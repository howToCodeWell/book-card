# Simple Image Grid React Component
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/howtocodewell/simple-image-grid)
![Travis (.org) branch](https://img.shields.io/travis/howtocodewell/simple-image-grid/main)
![GitHub issues](https://img.shields.io/github/issues/howtocodewell/simple-image-grid)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/howtocodewell/simple-image-grid)
![Twitter Follow](https://img.shields.io/twitter/follow/howtocodewell)

This component displays a grid of linkable images.
It is used as part of [https://howtocodewell](https://howtocodewell])

## Install
```bash
$ npm install @howtocodewell/simple-image-grid
```
## Example
To see an example of the component run 
```bash
$ npm start
```
## Test
To test the component
```bash
$ npm  test
```

## Configuration
```javascript

const itemConfig = [
    {
        link: {
            title: "PHP Array Chunk",
            target: "_blank",
            url: "https://youtu.be/LSDmrLmVbZI"
        },
        image: {
            title: "PHP Array Chunk",
            alt: "Learn PHP Array Chunk",
            url: "http://i3.ytimg.com/vi/LSDmrLmVbZI/maxresdefault.jpg"
        }
    },
    {
        link: {
            title: "Change Key Case in PHP",
            target: "_blank",
            url: "https://youtu.be/wbyK_YCLco0"
        },
        image: {
            title: "Change Key Case in PHP",
            alt: "Change Key Case in PHP",
            url: "http://i3.ytimg.com/vi/wbyK_YCLco0/maxresdefault.jpg"
        }
    },
]

const headerConfig = {
    isEnabled: true,
    title: 'PHP Tutorials',
    link: {
        url: 'https://howtocodewell.net',
        text: 'See More'
    }
}
```

## Usage
```javascript
import { SimpleImageGrid } from '@howtocodewell/simple-image-grid'

<SimpleImageGrid items={itemConfig} header={headerConfig} />

```
