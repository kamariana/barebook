# Barebook

Barebook is a scalable and maintainable CSS library base on [ITCSS] architecture. It is also base on a composite of a number of methodologies and principles such as [BEM](http://bem.info/), [SMACSS](https://smacss.com/), and  [OOCSS](http://oocss.org/)

## Folder Organization

- **Settings** - Contains variables definitions such as spacing methods, fonts, colors, z-index layers etc. Things here should have no CSS output.
- **Tools** - Contains mixins and functions. No CSS output as well
- **Generic** - Contains CSS reset and/or normalizations styles
- **Elements** - Contains bare HTML elements styles without classes. Examples: body, headings, list links etc.
- **Objects** - Contains reusable parts of the user interface (UI) styles without cosmetics to support a variety of applications. Examples: page, contain, media etc 
- **Components** - Contains specific parts of the user interface (UI) styles with  cosmetics such as cards, cover, hero etc. Components are often combined with one or more objects.
- **Themes** - Contains different theme styles, especially on a large scale multi site with different typography, colors schemes, fonts etc. 
- **Utilities** - Contains helpers classes that might override other styles above.

