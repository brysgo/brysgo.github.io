e ~/.vim/init.vim
Ag buff
Ag swap
e ~/.vimrc.local
w!
e ../sptball/
Ag cursor
Ag citedBy
j:e!
W
Ag onClick
%s//focusItems/g
%s//setFocusItems/g
e
Ag primarB
Qdo %s//primaryBackgroundShade/g
Qdo %s/primarBackgroundShade/primaryBackgroundShade/g
Qdo %s/secondary/secondarBackgroundShade/gc
Ag secondary
Qdo %s/secondarBackgroundShade/secondaryBackgroundShade/gc
Ag secondarBack
e!
Ag TextArea
qw
prettier %
%s/\.\/
Ag \.\/
Qdo %s///gc
Ag .\/ src/
Ag \.\/ src/
Ag colors
Ag colors src
set nopaste
Ag Button
:w
Ag storybook
Ag LightbulbIcon
'<,'>
redraw
'<,'>normal $dT'A}
'<,'>normal $dT'a}
'<,'>normal $dT'i}
'<,'>normal A
'<,'>normal A,
we
Ag 720
Ag 10px src
Ag push
%s/10px/${iconSize}px/g
Ag 10px
Ag 34px
Ag [0-9]px
ew
Ag [0-9]px src/components/**.js
Ag [0-9]px src/components/**/*.js
Ag [0-9]px src/components/*/*.js
Ag [0-9]px src/components/Feed/*.js
Ag iconSizeDiff
Ag [0-9]px src/components/*.js
Ag [0-9]em
Ag px
Ag px src
Ag px src/*.js
Qdo %s/}em;/}px;
Qdo %s/\}em;/}px;
Ag px src/**/*.js
Qdo %s/\}px;/}em;
Qdo %s/\}px/}em/g
:wa
Ag borderWidth}em src/**/*.js
Ag borderRadius}em src/**/*.js
Ag wadPadding
Ag [0-9]em src
Ag baseline
Ag overflow
Ag top
!prettier %
Ag [fF]ocus
Ag [fF]ocus[iI]tem
gg-G:w
Ag "<Wad"
Ag focused
Ag useState
Ag toggleFocusItem
only
qa!
Ag SharedFocusItems.Provider
Gdiff
redraw!
Ag app
Qa
,ffak
wa
sp
e ../sptball-server/src/graphql/schema.js
sp ./package.json
wq
'<,'>s/=/:/g
'<,'>s/;/,/
A
set paste
qa
w
q
w .github/main.workflow

