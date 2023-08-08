# Barebook

Barebook is an open mini design system with a strong focus on performance, scalability, and maintainability.

Its architecture is based on <a href="http://itcss.io/">ITCSS</a> which is designed to aid the growth and maintainability of CSS projects. It also uses a composition of methodologies and principles such as <a href="http://bem.info/">BEM</a>, <a href="https://smacss.com/">SMACSS</a> and   <a href="http://oocss.org/">OOCSS</a>.

Barebook is a CSS framework, but it does not give you pre-designed UI and layout styles, but instead, it gives you a strong and well-structured foundation on which you can build and design your own work.

But if you want to see a pre-designed UI and layout components, we have extended it to [Barebook Design System](https://barebook.gm/) and the code is [here](https://github.com/kamariana/barebook-design-system)

## Installation

You can install or use barebook via the following ways:

### NPM

```
Coming soon!
```

### Copy/Paste

You can download barebook, copy the `sass` directroy to your project and follow the steps below on Getting Started. 

This method is not recommended (but that is what is available for now) because you lose the ability to easily and quickly manage and update barebook as a dependency. This will change soon for the above one.

## Getting Started

Once you got the `sass` directory into your project, there are a handful of things we need to know and do before we're ready to move on.

Inside the `sass` folder, there two folders and one file: `barebook`, `styles`, and `main.scss`

```
├── barebook
├── styles
└── main.scss
```

### barebook folder: 

This is where the core styles of barebook are. Here's the structure and files:

```
.
├── elements
│   ├── _elements-audio.scss
│   ├── _elements-blockquote.scss
│   ├── _elements-code.scss
│   ├── _elements-details.scss
│   ├── _elements-figure.scss
│   ├── _elements-form.scss
│   ├── _elements-heading.scss
│   ├── _elements-hr.scss
│   ├── _elements-iframe.scss
│   ├── _elements-image.scss
│   ├── _elements-link.scss
│   ├── _elements-list.scss
│   ├── _elements-picture.scss
│   ├── _elements-pre.scss
│   ├── _elements-progress.scss
│   ├── _elements-p.scss
│   ├── _elements-table.scss
│   ├── _elements-video.scss
│   └── _index.scss
├── generic
│   ├── _generic-base-webapp.scss
│   ├── _generic-base-website.scss
│   ├── _generic-normalise.scss
│   ├── _generic-reset.scss
│   ├── _generic-scrollbar.scss
│   ├── _generic-selection.scss
│   └── _index.scss
├── _index.scss
├── modules
│   ├── _index.scss
│   ├── _modules-alignment.scss
│   ├── _modules-hidden.scss
│   ├── _modules-scroll.scss
│   ├── _modules-spacers.scss
│   └── _modules-text.scss
├── objects
│   ├── _index.scss
│   ├── _objects-avatar.scss
│   ├── _objects-contain.scss
│   ├── _objects-icon.scss
│   ├── _objects-media-block.scss
│   ├── _objects-pageless.scss
│   └── _objects-page.scss
├── settings
│   ├── context
│   │   ├── _context-color.scss
│   │   ├── _context-dimension.scss
│   │   ├── _context-elevation.scss
│   │   ├── _context-shape.scss
│   │   ├── _context-syntax-highlighting.scss
│   │   ├── _context-typography.scss
│   │   ├── _context-z-index-layer.scss
│   │   └── _index.scss
│   ├── fonts
│   │   ├── _fonts-metropolis.scss
│   │   ├── _fonts-montserrat.scss
│   │   └── _index.scss
│   ├── _index.scss
│   └── references
│       ├── _index.scss
│       ├── _references-color.scss
│       └── _references-sizing.scss
└── tools
    ├── functions
    └── mixins
        ├── _index.scss
        ├── _mixin-box.scss
        ├── _mixin-breakpoint.scss
        ├── _mixin-flexbox.scss
        ├── _mixin-media.scss
        ├── _mixin-owl.scss
        ├── _mixin-position.scss
        ├── _mixin-pseudo-class.scss
        ├── _mixin-reset-list.scss
        └── _mixin-timing.scss
```

All the partials in this folder (barebook), are imported in to `_index.scss`. And that is imported in `main.scss`

Here's the directory structure explanation

- **Settings** - Contains global *context* and *reference* definitions such as sizing, spacing methods, fonts, colors, z-index layers etc. Things here should have no CSS output.
- **Tools** - Contains site mixins and functions. No CSS output as well
- **Generic** - Contains low-specificity, far-reaching rulesets (e.g. resets, normalizations)
- **Elements** - Contains bare HTML elements styles without classes. Examples: body, headings, list links etc.
- **Objects** - Contains reusable parts of the user interface (UI) styles without cosmetics to support a variety of applications. Examples: page, contain, media etc 
- **Modules** - Contains high-specificity, very explicit selectors. Overrides and helper classes that might override other styles above.

Here's is the content of the `_index.scss` file inside the barebook folder:

```scss
@import './tools/mixins/index';
@import './settings/index';
@import './generic/index';
@import './elements/index';
@import './objects/index';
@import './modules/index';
```



### styles folder

This folder will contain the components and layouts files specific to your project/s.

```
styles
├── components
├── layouts
└── _index.scss
```

Here's the directory structure explanation

- **layouts** - Should contain application layout (UI) styles. This is a layer that barebook doesn’t provide code for, as this is completely your terrain.
- **Components** - Should contain specific parts of the user interface (UI) styles with  cosmetics such as cards, cover, hero etc. This is another layer that barebook doesn’t provide code for, as this is completely your terrain.

Here's is an example content of the `_index.scss` file in the stye folder:

```scss
@import './layouts/index';
@import './components/index';
```



### main.scss file

The `main.scss` file is where:

-  the `_index.scss` in the barebook folder is imported into `main.scss` file (this file contains all the core barebook styles)
- the `_index.scss` in the styles folder is also imported in the `main.scss` file (this file contains your own components and layouts files)

Here's is the content of the `main.scss` file:

```scss
// Barebook
@import './barebook/index';

// Custom Styles
@import './styles/index';
```

Depending on how you structure your project, if you move things around, you'ill have to update all of the `@import`s respectively.

If all is good, you should be able to run the following command on the `main.scss` and get a compiled stylesheet without any errors:

```scss
path/to/sass/$ sass main.scss main.css
```



## Customising the settings

Coming soon!

## References

Heavily took ideas from the following projects

- [ITCSS](http://itcss.io/) and [Inuitcss](https://github.com/inuitcss/inuitcss)

- [The GOV.UK Design System](https://design-system.service.gov.uk/) for Barebook Design System
- [Polaris](https://polaris.shopify.com/) for Barebook Design System
