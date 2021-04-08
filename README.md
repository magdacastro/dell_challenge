# dell_challenge
Exercises developed for the Dell selection process.

### Assess your knowledge level on the following languages (1 = none; 5 = expert):

Vanilla JS - 4
jQuery - 4
HTML/HTML5 - 4
CSS/CSS3 - 4
Ajax - 1
AngularJS - 0
Bootstrap - 4

### What is the width of a container with 100px of width and 5px of padding?

The container still contains the same width (100px), only the internal content that will not occupy all this space.

### How to apply a click event to all paragraphs except for the last?

```javascript
Array.from(document.querySelectorAll("p:not(:last-child)")).map((el) => {
  el.addEventListener("click", (event)=>{
    console.log(event.target);
    });
});
```

### Why does the alert show "Jack" first and then undefined?
```javascript
function identity() {
    var name = 'Jack';
    alert(name);
    return
    name
};

var who = identity();
alert(who)
```

In the Javascript language, a semicolon is not mandatory, causing the first alert to trigger the content stored in the variable, while the second alert fires empty due to the return of the function (which did not return anything).
