# ngsize
You think the Angular CLI should totally print the total build size?<br>
Your calculating skills are not good enough to sum it up yourself?<br>
ngsize to the rescue.

![image](https://user-images.githubusercontent.com/2671139/30515585-f4be476a-9b2a-11e7-8727-df68525eaf54.png)

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
