# ngsize
You want to know your total bundle size, but your calculating skills are not good enough to sum up yourself?<br>
You think the Angular CLI should totally print the total size?<br>
ngsize to the rescue.

![image](https://user-images.githubusercontent.com/2671139/30515379-b6e66eda-9b26-11e7-899e-36c8ceb9d6ab.png)

## How to use
### Install
Either install globally: `npm install -g ngsize`

Or install as dev dependency and add it to your projects run scripts:
```
 npm install --save-dev ngsize
```

In your package.json: 
```
"scripts": {
  "ngsize": "ngsize"
}
```

### Usage
Pipe the output of the `ng build` command to `ngsize`:
```
ng build | ngsize
```

If you have installed ngsize only locally, you need to use it within an npm run script:
```
"scripts": {
  "ng": "ng",
  "ngsize": "ngsize",
  "build": "ng build | ngsize"
}
```

And then `npm run build`.
