# Barebook

Barebook is an open mini design system with a strong focus on performance, scalability, and maintainability.

Its architecture is based on <a href="http://itcss.io/">ITCSS</a> which is designed to aid the growth and maintainability of CSS projects. It also uses a composition of methodologies and principles such as <a href="http://bem.info/">BEM</a>, <a href="https://smacss.com/">SMACSS</a> and   <a href="http://oocss.org/">OOCSS</a>.

Barebook is a framework, but it does not give you pre-designed UI and layout, but instead, it gives you a strong and well-structured foundation on which you can build and design your own work.

But if you want to see a pre-designed UI and layout, we have extended it to [Barebook Design System](https://barebook.gm/) and the code is [here](https://github.com/camariana/barebook-design-system)

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
├── main.scss
└── styles
```

### barebook folder: 

This is where the core styles of barebook are. Here's the structure and files:

```
barebook
├── _barebook.scss
├── elements
│   ├── _elements-audio.scss
│   ├── _elements-blockquote.scss
│   ├── _elements-code.scss
│   ├── _elements-details.scss
│   ├── _elements-figure.scss
│   ├── _elements-form.scss
│   ├── _elements-heading.scss
│   ├── _elements-hr.scss
│   ├── _elements-iframe.scss
│   ├── _elements-image.scss
│   ├── _elements-link.scss
│   ├── _elements-list.scss
│   ├── _elements-picture.scss
│   ├── _elements-pre.scss
│   ├── _elements-progress.scss
│   ├── _elements-p.scss
│   ├── _elements-table.scss
│   └── _elements-video.scss
├── generic
│   ├── _generic-base.scss
│   ├── _generic-normalise.scss
│   ├── _generic-reset.scss
│   ├── _generic-scrollbar.scss
│   └── _generic-selection.scss
├── modules
│   ├── _modules-alignment.scss
│   ├── _modules-hidden.scss
│   ├── _modules-spacers.scss
│   └── _modules-text.scss
├── objects
│   ├── _objects-avatar.scss
│   ├── _objects-contain.scss
│   ├── _objects-icon.scss
│   ├── _objects-media-block.scss
│   ├── _objects-pageless.scss
│   └── _objects-page.scss
├── settings
│   ├── context
│   │   ├── _context-color.scss
│   │   ├── _context-core.scss
│   │   ├── _context-dimension.scss
│   │   ├── _context-elevation.scss
│   │   ├── _context-shape.scss
│   │   ├── _context-spacing.scss
│   │   ├── _context-syntax-highlighting.scss
│   │   ├── _context-typography.scss
│   │   └── _context-z-index-layer.scss
│   ├── fonts
│   │   └── _fonts-core.scss
│   ├── references
│   │   ├── _references-color.scss
│   │   ├── _references-core.scss
│   │   └── _references-sizing.scss
│   └── _settings-core.scss
└── tools
    ├── _mixin-box.scss
    ├── _mixin-breakpoint.scss
    ├── _mixin-core.scss
    ├── _mixin-flexbox.scss
    ├── _mixin-media.scss
    ├── _mixin-owl.scss
    ├── _mixin-position.scss
    ├── _mixin-pseudo-class.scss
    ├── _mixin-reset-list.scss
    └── _mixin-timing.scss
```

All the partials in this folder (barebook), are imported in to `barebook.scss`.

Here's the directory structure explanation

- **Settings** - Contains global *context* and *reference* definitions such as sizing, spacing methods, fonts, colors, z-index layers etc. Things here should have no CSS output.
- **Tools** - Contains site mixins and functions. No CSS output as well
- **Generic** - Contains low-specificity, far-reaching rulesets (e.g. resets, normalizations)
- **Elements** - Contains bare HTML elements styles without classes. Examples: body, headings, list links etc.
- **Objects** - Contains reusable parts of the user interface (UI) styles without cosmetics to support a variety of applications. Examples: page, contain, media etc 
- **Modules** - Contains high-specificity, very explicit selectors. Overrides and helper classes that might override other styles above.

Here's is the content of the `_barebook.scss` file:

```scss
// Tools
@import './tools/mixin-core';


// Settings
@import './settings/fonts/fonts-core';
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
@import './elements/elements-p';
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
@import './objects/objects-pageless';
@import './objects/objects-contain';
@import './objects/objects-icon';
@import './objects/objects-media-block';
@import './objects/objects-avatar';


// Modules
@import './modules/modules-spacers';
@import './modules/modules-alignment';
@import './modules/modules-hidden';
@import './modules/modules-text';
```



### styles folder

This folder will contain the components and layouts files specific to your project/s.

```
styles
├── components
├── layouts
└── _styles.scss
```

Here's the directory structure explanation

- **layouts** - Should contain application layout (UI) styles. This is a layer that barebook doesn’t provide code for, as this is completely your terrain.
- **Components** - Should contain specific parts of the user interface (UI) styles with  cosmetics such as cards, cover, hero etc. This is another layer that barebook doesn’t provide code for, as this is completely your terrain.

Here's is an example content of the `_styles.scss` file:

```scss
// Layouts
@import './layouts/header/layouts-header';
@import './layouts/journal/layouts-journal';
@import './layouts/sidebar/layouts-sidebar';
@import './layouts/footer/layouts-footer';


// Components
@import './components/logo/components-logo';
@import './components/navigation/components-navbar';
@import './components/navigation/components-primary-nav';
@import './components/navigation/components-fullscreen-nav';
@import './components/toc/components-toc';

@import './components/buttons/components-button';
@import './components/buttons/components-button-group';
@import './components/buttons/components-button-toggle-nav';
@import './components/buttons/components-button-color-scheme-switcher';
```



### main.scss file

The `main.scss` file is where:

-  the `barebook.scss` partial is imported (this file contains all the core barebook styles)
- the `styles.scss` partial is imported (this file contains your own components and layouts files)

Here's is the content of the `main.scss` file:

```scss
// Barebook: core barebook styles
@import './barebook/barebook';

// Custom Styles: your own components and layouts files
@import './styles/styles';
```

Depending on how you structure your project, if you move things around, you'ill have to update all of the `@import`s respectively.

If all is good, you should be able to run the following command on the `main.scss` and get a compiled stylesheet without any errors:

```scss
path/to/sass/$ sass main.scss main.css
```

## References

Heavily took ideas from the following projects

- [ITCSS](http://itcss.io/) and [Inuitcss](https://github.com/inuitcss/inuitcss)

- [The GOV.UK Design System](https://design-system.service.gov.uk/) for Barebook Design System
- [Polaris](https://polaris.shopify.com/) for Barebook Design System
