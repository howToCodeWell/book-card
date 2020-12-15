import React from 'react'
import ReactDOM from 'react-dom'
import SimpleImageGrid from './Components/SimpleImageGrid'

const itemConfig = [
  {
    link: {
      title: 'PHP Array Chunk',
      target: '_blank',
      url: 'https://youtu.be/LSDmrLmVbZI'
    },
    image: {
      title: 'PHP Array Chunk',
      alt: 'Learn PHP Array Chunk',
      url: 'http://i3.ytimg.com/vi/LSDmrLmVbZI/maxresdefault.jpg'
    }
  },
  {
    link: {
      title: 'Change Key Case in PHP',
      target: '_blank',
      url: 'https://youtu.be/wbyK_YCLco0'
    },
    image: {
      title: 'Change Key Case in PHP',
      alt: 'Change Key Case in PHP',
      url: 'http://i3.ytimg.com/vi/wbyK_YCLco0/maxresdefault.jpg'
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
  gridParentContainer: '-ml-4 -mr-4 -mb-4 p-4 bg-gray-500 border-t',
  titleContainer: 'text-center',
  title: 'text-black',
  titleLink: 'text-sm mt-2 text-black hover:text-white hover:no-underline',
  gridContainer: 'container mx-auto px-4 pb-8',
  gridItemsContainer: 'no-flex flex justify-center flex-wrap',
}
const CSSGridItemConfig = {
  gridItemContainer: 'w-screen md:w-auto md:flex-none w-auto sm:w-1/6 md:w-1/6 p-4 pt-0 mb-2',
  gridItem: 'shadow p-2 bg-gray-900 rounded-lg hover:bg-pink-600',
  gridItemLink: '',
  gridItemImage: 'm-auto w-screen md:w-auto'
}

ReactDOM.render(
  <React.StrictMode>
    <SimpleImageGrid items={itemConfig} header={headerConfig} cssConfig={CSSGridContainerConfig} cssGridItemConfig={CSSGridItemConfig}/>
  </React.StrictMode>,
  document.getElementById('root')
)
