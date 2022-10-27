---
layout: til
title: The "all" CSS property

featured: false

categories: [CSS]
created_at: 2021-04-09 10:20:00 +00:00
---



The programs details are on top of each other like a stack of cards, once the user clicks on the program name, it brings that program details into view. This is why we use a focusable element such as a button.

>The `**all**` [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property resets all of an element's properties except [`unicode-bidi`](https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi), [`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction), and [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.
>
>[all - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/all)

Consider the following markup

```html
<ol>
    <li>
        <button>BA Islamic Studies</button>
        <div>
            <!-- program details comes here -->
        </div>
    </li>
    <li>
        <button>BA History</button>
        <div>
            <!-- program details comes here -->
        </div>
    </li>
    <li>
        <button>BA Linguistics</button>
        <div>
            <!-- program details comes here -->
        </div>
    </li>
</ol>
```

To make sure the  list item is accessible to assistive technologies and keyboard users we nest the content into a `button` element in the `li` element.

Consider the following style

```css
button {
    all: inherit;
    /* other declarations */
}
```

The good button comes with it package of styles. So, to make sure the button feel like the list item we use the `all` CSS property to reset it.



put this in a alert box

Note: for simplicity, we do not use any specific class for styling. That means, on a project you would not apply this on all buttons, you will apply it to the element it's needed.

