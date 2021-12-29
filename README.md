# arbeitszeiten

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Verwendete Bibliotheken

```
bootstrap-vue
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```


## Tailwind CSS
### Compile new CSS file during changes in tailwind.config
npx tailwindcss-cli@latest build -i ./src/assets/css/tailwindBase.css -o ./src/assets/css/tailwind.css  
