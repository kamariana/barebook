# Barebook

**Barebook** is an open design system engineered for high performance, seamless scalability, and effortless maintainability, empowering you to build faster, more efficient web and mobile applications.

Its architecture is based on [ITCSS](http://itcss.io/), a methodology designed to aid in the growth and maintainability of CSS projects. Barebook also integrates a composition of methodologies and principles such as [BEM](http://bem.info/), [SMACSS](https://smacss.com/), and [OOCSS](http://oocss.org/).

Barebook doesn’t provide pre-designed UIs. Instead, it offers a robust and well-structured foundation upon which you can build and design your own unique work.

However, if you prefer pre-designed UIs, we’ve developed [Barebook CSS](https://css.barebook.gm/), an open UI implementation of Barebook. It includes components and resources to help you create more cohesive applications.

## Project Organization

In the `sass` folder, there are four folders and one file respectively: `core`, `lib`, `module`, `ui`, and `main.scss`

- **core**: This folder contains the core (well-structured foundation) barebook styles which the **UIs** and the **modules**  styles are build on top of.
-  **lib**: This folder contains the shared the settings files such as: tokes, functions, and, mixins
-  **ui**: This folder contain specific parts of the user interface (UI) styles with  cosmetics such as cards, cover, hero etc.
-  **module**: This folder contains high-specificity, very explicit re-usable classes -- aka modules. They override all other styles.
-  **main.scss**: This folder contains all the partials from the four main folders (`core`, `lib`, `module`, and `ui`)ll the partials from the four main folders (core, lib, module, and ui)

## References

- [ITCSS](http://itcss.io/) and [Inuitcss](https://github.com/inuitcss/inuitcss)
- [BEM](http://bem.info/), [SMACSS](https://smacss.com/), and [OOCSS](http://oocss.org/).
