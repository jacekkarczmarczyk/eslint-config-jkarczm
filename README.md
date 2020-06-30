# eslint-config-jkarczm
Private opinionated eslint config for Vue/Vuetify/Typescript projects

### Install
Ain't nobody got time for npm releases
```json
// package.json
{
  "devDependencies": {
    "eslint-config-jkarczm": "https://github.com/jacekkarczmarczyk/eslint-config-jkarczm#v2.0.1"
  }
}
```

### Usage
```js
// .eslintrc.js - TS project
module.exports = {
  extends: ['jkarczm']
}
```

```js
// .eslintrc.js - Vue project
module.exports = {
  extends: ['jkarczm/vue']
}
```

```js
// .eslintrc.js - Vuetify project
module.exports = {
  extends: ['jkarczm/vuetify']
}
```

### License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present Jacek Karczmarczyk
