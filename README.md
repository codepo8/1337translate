# derpify

![Derpify.js logo showing the Spongebob clucking like a chicken meme](derpifyjs.png)

This is a package that "derpifies" strings by randomly changing upper- and lowercase.

For example:

```javascript
console.log(
    derpify('All he wanted to say was I love you all.')
)
```

Will return as one example (as it is random):

`ALL hE WANTed to SAY WAS I lOVe YoU AlL.`

You call the functionality with the `derpify` method, which takes two parameters:

* `str` - the string to split (mandatory).
* `randomness` - an float between 0 and 1, preset to 0.3 (optional).

You can try derpify's outcome using the [demo page](https://codepo8.github.io/derpify/demo.html) or `demo.js` on the commmand line.

Use it via npm:

```
npm -i derpify
```

Or the client-side package via unpkg

```HTML
<script src="https://unpkg.com/trimmiddle@0.1.0/derpify.js"></script>
```
