# 1337translate

This is a package that translates strings from and to 1337speek.

For example:

```javascript
console.log(
    leettranslate.toleet('Hello, boys, girls and others!')
)
```

Will return:

H3110, 80y5, 9!r15 4nd 07h3r5!

You can also set a 'light' mode that will not replace 'b','g','i' and 'z':

```javascript
console.log(
    leettranslate.toleet('Hello, boys, girls and others!', true)
)
```

returns 

H3110, b0y5, gir15 4nd 07h3r5!

The other way around works, too:


You call the functionality with the `translate.toleet()` and `translate.totext()` methods, each taking parameters:

* `text` - the text to translate (mandatory)
* `light` - an Boolean to turn on light mode - pre-set to false (optional)

You can try it by calling `demo.js` on the commmand line.

Use it via npm:

```
npm -i leetranslate
```