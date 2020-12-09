# Book Card React Component
Displays a simple grid of linkable images.

## Install
```
npm install @howtocodewell/simple-image-grid
```
## Configuration
```javascript

const items = [
    {
      links: {
        title: "Foo",
        target: "_blank",
        url: "https://www.howtocodewell.net"
      },
      image: {
        title: "test",
        alt: "test",
        url: ""
      }
    },
    {
      links: {
        title: "Foo",
        target: "_blank",
        url: "https://www.howtocodewell.net"
      },
      image: {
        title: "test",
        alt: "test",
        url: ""
      }
    },
  ]

const header = {
    isEnabled: true,
    title: 'My Title',
    link: {
      url: 'https://howtocodewell.net',
      text: 'See More'
    }
}
```

## Usage
```javascript
import { SimpleImageGrid } from '@howtocodewell/simple-image-grid/src'
<SimpleImageGrid items={items} header={header}/>
```