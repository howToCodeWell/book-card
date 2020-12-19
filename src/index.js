import React from 'react'
import ReactDOM from 'react-dom'
import SimpleImageGrid from './Components/SimpleImageGrid'

const itemConfig = [
  {
    link: {
      title: '19: Pop an element off the end of a PHP array',
      target: '_blank',
      url: 'https://youtu.be/LM0w_Syygss'
    },
    image: {
      title: '19: Pop an element off the end of a PHP array',
      alt: '19: Pop an element off the end of a PHP array',
      url: 'http://i3.ytimg.com/vi/LM0w_Syygss/maxresdefault.jpg'
    }
  },
  {
    link: {
      title: '20: PHP Batch Processing with Array Chunk',
      target: '_blank',
      url: 'https://youtu.be/LSDmrLmVbZI'
    },
    image: {
      title: '20: PHP Batch Processing with Array Chunk',
      alt: '20: PHP Batch Processing with Array Chunk',
      url: 'http://i3.ytimg.com/vi/LSDmrLmVbZI/maxresdefault.jpg'
    }
  },
    {
    link: {
      title: '21: How to calculate the product of a PHP array - PHP 7 Tutorial',
      target: '_blank',
      url: 'https://youtu.be/mhxEggY55e0'
    },
    image: {
      title: '21: How to calculate the product of a PHP array - PHP 7 Tutorial',
      alt: '21: How to calculate the product of a PHP array - PHP 7 Tutorial',
      url: 'http://i3.ytimg.com/vi/mhxEggY55e0/maxresdefault.jpg'
    }
  },
  {
    link: {
      title: '22: How to get a random PHP array element - PHP 7 Tutorial',
      target: '_blank',
      url: 'https://youtu.be/6WPAl81rRFg'
    },
    image: {
      title: '22: How to get a random PHP array element - PHP 7 Tutorial',
      alt: '22: How to get a random PHP array element - PHP 7 Tutorial',
      url: 'http://i3.ytimg.com/vi/6WPAl81rRFg/maxresdefault.jpg'
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

const CSSGridContainerConfig = {
  gridParentContainer: 'p-4 bg-red-300 border border-red-500',
  titleContainer: 'text-2xl text-center mb-4',
  title: 'text-black',
  titleLink: 'text-sm mt-2 text-black hover:text-white hover:no-underline',
  gridContainer: 'container mx-auto px-4 pb-8',
  gridItemsContainer: 'no-flex flex justify-center flex-wrap',
}
const CSSGridItemConfig = {
  gridItemContainer: 'w-screen md:w-auto md:flex-none w-auto md:w-1/2 p-4 pt-0 mb-2',
  gridItem: 'shadow p-2 bg-black rounded-lg hover:bg-red-600',
  gridItemLink: '',
  gridItemImage: 'm-auto w-screen md:w-auto'
}

ReactDOM.render(
  <React.StrictMode>
    <SimpleImageGrid items={itemConfig} header={headerConfig} cssConfig={CSSGridContainerConfig} cssGridItemConfig={CSSGridItemConfig}/>
  </React.StrictMode>,
  document.getElementById('root')
)
