# Flagship-css

A collection of all country flags in SVG - Inspired and based on
[Lipis/flag-icon-css](https://github.com/lipis/flag-icon-css/blob/master)

## Install 

You can either download the whole project as is or install it via NPM: 

```
npm install flagship-css
```

# Usage 

For using the flags inline with text add the classes `.flag-icon` and `.flag-icon-xx`
(where `xx` is the ISO 3166-1-alpha-2 code of a country) to an empty `<span>`.
If you want to have a squared version flag then add the class `flag-icon-squared` as well. 

**Example:**

```html
<span class="flag-icon flag-icon-gr"></span>
<span class="flag-icon flag-icon-gr flag-icon-squared"></span>
```

You could also apply this to any element, but in that case you'll have to use the `flag-cion-background` instead of 
`flag-icon` and you're set. This will add the correct background with the following CSS properties:

```css
background-size: contain;
background-position: 50%;
background-repeat: no-repeat;
```

Which means that the flag is just going to appear in the middle of an element, 
so you will have to set manually the correct size of 4 by 3 ratio or if it's squared add also the `flag-icon-squared` class.

# Development 

Run the `npm install` to install the dependencies after cloning the project and you'll
be able to run the following Gulp commands: 

```
Usage
  gulp [TASK] [OPTIONS...]

Available tasks
  help         Display this help text.
  sass:lint    Check the SASS files for codestyle warnings.
  sass:render  Generate the CSS file from SASS.
```

# Credits 

This project wouldn't exist without the awesome content of: 

- [koppi](https://github.com/koppi)
- [Lipis/flag-icon-css](https://github.com/lipis/flag-icon-css/blob/master)
