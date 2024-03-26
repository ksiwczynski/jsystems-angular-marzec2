# Instalacje 
node -v 
v20.10.0

npm -v
10.2.3

git --version
git version 2.43.0.windows.1

code -v

https://code.visualstudio.com/
Help -> About 
1.87.2


# GIT
git clone https://bitbucket.org/ev45ive/jsystems-angular-marzec2.git

F1 -> Git:Clone -> Paste -> Clone from URL -> Select location -> Open 

git pull -f 
npm i 

# Extensions

Angular Language Service
https://marketplace.visualstudio.com/items?itemName=Angular.ng-template

Angular 10 Snippets - Mikael Morlund
https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode

Prettier
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Paste JSON as Code - quicktype
https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype

https://angular.dev/tools/devtools
https://chrome.google.com/webstore/detail/angular-developer-tools/ienfalfjdbdpebioblfackkekamfmbnh

# ANgular

https://angular.dev/
https://angular.dev/tutorials
https://angular.dev/tools/cli
https://angular.dev/tools/language-service



# Angular CLI
npm i -g @angular/cli
 
https://angular.io/cli/

ng version
ng help

ng generate --help
ng new --help

ng new jsystems-rossmann-angular --directory "." --routing --style "scss" --standalone false 
ng new jsystems-rossmann-angular --directory "." --standalone false 

## Material Design
ng add @angular/material
https://material.angular.io/guide/getting-started

# ng generate - Schematics 
ng g --help
ng generate

ng g c --help
ng g m --help

# Playlists module
ng g m playlists -m app --route playlists --routing

ng g c playlists/containers/playlists-view
ng g c playlists/containers/playlists-tracks-view

ng g c playlists/components/playlist-list
ng g c playlists/components/playlist-details
ng g c playlists/components/playlist-editor

ng g m shared -m app
ng g c shared/components/clock --export 
ng g d shared/directives/contenteditable --export 

# Music "module" --standalone

ng g m music -m app --route music --routing

ng g c music/containers/album-detail-view --standalone true
ng g c music/containers/album-search-view --standalone true

ng g c music/components/album-card --standalone true
ng g c music/components/results-grid --standalone true
ng g c music/components/search-form --standalone true

ng g m core -m app
ng g s core/services/music-api

