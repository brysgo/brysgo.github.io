const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const md5 = require("md5");
const slugify = require("slugify");

(async () => {
  const postedTitleKeys = [];
  const SPREADSHEET =
    "https://spreadsheets.google.com/feeds/cells/1UkPZul1YlXjTM-ieRXwMxdfpXfHYs6CamJhjynjAguI/1/public/values?alt=json";
  const dir = "../content/post";
  const POSTING_INTERVAL = 8.64e7; // 1 day in milliseconds
  const LAST_POSTED = fs
    .readdirSync(dir)
    .reduce((latest, cur) => {
      postedTitleKeys.push(cur.split("-").slice(3).join("-").split(".")[0]);
      const { mtime } = fs.lstatSync(path.join(dir, cur));
      return latest > mtime ? latest : mtime;
    })
    .getTime();
  const POST_AFTER_DATE = "Post after date";
  const AUTO_SCHEDULE = "Schedule automatically";
  const POST_NOW = "Post now";
  const TAG_SPLIT = ", ";

  let spreadsheet;
  try {
    spreadsheet = await (
      await fetch(SPREADSHEET, {
        headers: {
          accept: "application/json",
          "cache-control": "max-age=0",
        },
      })
    ).json();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  const titleToTitleKey = (title) =>
    `${slugify(title).slice(0, 20)}-${md5(title).slice(0, 6)}`;

  const rows = {};
  spreadsheet.feed.entry.forEach(({ gs$cell: { row, col, $t: text } }) => {
    rows[row] = rows[row] || {};
    rows[row][col] = text;
  });

  const formatDate = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const newArticlesPosted = [];
  const makePost = ({ content, title, tags, titleKey }) => {
    const filepath = path.join(
      dir,
      `${[formatDate(new Date()), titleKey].join("-")}.md`
    );
    newArticlesPosted.push(filepath);
    return fs.writeFile(
      filepath,
      `---
categories: none
tags:
  - ${tags.split(TAG_SPLIT).join("\n  - ")}
title: "${title}"
date: ${new Date().toISOString()}
---

${content}`
    );
  };
  const blogsQueued = [];
  const anyPosted = (
    await Promise.all(
      Object.values(rows).map((p) => {
        const [
          timestamp,
          schedulingMode,
          postAfterDate,
          content,
          tags,
          title,
        ] = Array.from({ length: 6 }).map((_, i) => p[`${i + 1}`]);
        const titleKey = titleToTitleKey(title);
        const result = {
          timestamp,
          schedulingMode,
          postAfterDate,
          content,
          tags,
          title,
          titleKey,
        };
        if (postedTitleKeys.includes(titleKey)) {
          return Promise.resolve(false);
        }
        if (schedulingMode === AUTO_SCHEDULE) {
          blogsQueued.push(result);
          return Promise.resolve(false);
        }
        if (
          schedulingMode === POST_NOW ||
          (schedulingMode === POST_AFTER_DATE &&
            new Date(postAfterDate).getTime() < new Date().getTime())
        ) {
          return makePost(result);
        }
        return Promise.resolve(false);
      })
    )
  ).some((x) => (console.log({ x }), x !== false));

  console.log({ anyPosted });
  if (!anyPosted && LAST_POSTED + POSTING_INTERVAL <= new Date().getTime()) {
    const articleToPost = blogsQueued.shift();
    if (articleToPost) {
      await makePost(articleToPost);
    }
  }

  console.log({ blogsQueued, blogsQueued, newArticlesPosted });
})();
