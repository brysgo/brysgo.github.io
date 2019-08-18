workflow "Deploy to GitHub Pages" {
  on = {
    push = {
      branches = ["hugo"]
    }
  }
  resolves = ["hugo-deploy-gh-pages"]
}

action "hugo-deploy-gh-pages" {
  uses = "khanhicetea/gh-actions-hugo-deploy-gh-pages@master"
  secrets = [
    "GIT_DEPLOY_KEY"
  ]
  env = {
    HUGO_VERSION = "0.53"
  }
}
