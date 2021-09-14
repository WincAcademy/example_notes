# Array basics

Arrays are data structures that can contain 0..n items.

The items can be anything:

- numbers
- strings
- booleans
- objects
- other arrays!

## Adding to an array

```js
let groceries = ["rice", "tomato"];
groceries.push("broccoli");
console.log(groceries);
```

## Reading the last item of an array

```js
let groceries = ["rice", "tomato", "broccoli"];
groceries[groceries.length - 1];
```

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
