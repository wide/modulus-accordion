# Modulus Accordion

Enhanced accordion component, to be used with `@wide/modulus`.


## Install

```
npm install @wide/modulus-accordion --save
```


## Usage

Register this component using `Modulus`:
```js
import modulus   from '@wide/modulus'
import Accordion from '@wide/modulus-accordion'

modulus.component('accordion', Accordion)
```

Import base `scss` styles:
```scss
@use '@wide/modulus-accordion';
```

And use the provided `twig` template:
```html
{% include '@wide::modulus-accordion' with {
  id: 'accordion-1',
  items: [{
    title: 'Title 1'
    body: 'Body 1'
  }]
} %}
```


## Authors

- **Aymeric Assier** - [github.com/myeti](https://github.com/myeti)
- **Julien Martins Da Costa** - [github.com/jdacosta](https://github.com/jdacosta)


## License

This project is licensed under the MIT License - see the [licence](licence) file for details