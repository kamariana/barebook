# Barebook

A mini design system with a strong focus on performance, scalability, maintainability, and a small footprint.

Its architecture is based on <a href="http://itcss.io/">ITCSS</a> which is designed to aid the growth and maintainability of CSS projects. It also uses a composition of methodologies and principles such as <a href="http://bem.info/">BEM</a>, <a href="https://smacss.com/">SMACSS</a> and   <a href="http://oocss.org/">OOCSS</a>.

Barebook is a framework, but it does not give you pre-designed UI and layout, but instead, it gives you a strong and well-structured foundation on which you can build and design your own work.

But if you want to see a pre-designed UI and layout, I have extended it to [Barebook Design System](https://barebook.gm/) and the code is [here](https://github.com/camariana/barebook-design-system)



## Installation

You can install or use barebook with the following ways:

### NPM

```
Coming soon!
```

### Copy/Paste

You can download barebook, copy the `sass` directroy to your project and follow the steps below on Getting Started. This method is not recommended because you lose the ability to easily and quickly manage and update barebook as a dependency. This will change soon for the above one.



## Getting Started

Once you got the `sass` directory into your project, there are a handful of things we need to do before we're ready to move on.

The `main.scss` in the root of the `sass` directory, is the main file where all other partials are imported. 

Depending on how you structure your project, if you move things around, you'ill have to update all of the `@import`s to the new location.

If all is good, you should be able to run the following command on that the `main.scss` and get a compiled stylesheet without any errors:

```scss
path/to/sass/$ sass main.scss:main.css
```



## Sass directory structure

- **Settings** - Contains global *context* and *reference* definitions such as sizing, spacing methods, fonts, colors, z-index layers etc. Things here should have no CSS output.
- **Tools** - Contains site mixins and functions. No CSS output as well
- **Generic** - Contains low-specificity, far-reaching rulesets (e.g. resets, normalizations)
- **Elements** - Contains bare HTML elements styles without classes. Examples: body, headings, list links etc.
- **Objects** - Contains reusable parts of the user interface (UI) styles without cosmetics to support a variety of applications. Examples: page, contain, media etc 
- **Components** - Contains specific parts of the user interface (UI) styles with  cosmetics such as cards, cover, hero etc. This is the one layer that barebook doesn’t provide code for, as this is completely your terrain.
- **Modules** - Contains high-specificity, very explicit selectors. Overrides and helper classes that might override other styles above.

```scss
// Tools
@import './tools/mixin-core';

// Settings
@import './settings/font/settings-font-core';
@import './settings/settings-core';

// Generic
@import './generic/generic-normalise';
@import './generic/generic-reset';
@import './generic/generic-base';
@import './generic/generic-selection';
@import './generic/generic-scrollbar';

// Elements
@import './elements/elements-audio';
@import './elements/elements-code';
@import './elements/elements-details';
@import './elements/elements-figure';
@import './elements/elements-heading';
@import './elements/elements-image';
@import './elements/elements-picture';
@import './elements/elements-list';
@import './elements/elements-link';
@import './elements/elements-blockquote';
@import './elements/elements-hr';
@import './elements/elements-pre';
@import './elements/elements-video';
@import './elements/elements-iframe';
@import './elements/elements-table';
@import './elements/elements-form';

// Objects
@import './objects/objects-page';
@import './objects/objects-contain';
@import './objects/objects-icon';
@import './objects/objects-media-block';
@import './objects/objects-avatar';


// Components
// Import your components here


// Modules
@import './modules/modules-alignment';
@import './modules/modules-hidden';
@import './modules/modules-text';
```



## References

Heavily took ideas from the following projects

- [ITCSS](http://itcss.io/) and [Inuitcss](https://github.com/inuitcss/inuitcss)

- [The GOV.UK Design System](https://design-system.service.gov.uk/)
- [Polaris](https://polaris.shopify.com/)
