import React from 'react'
import { render, screen } from '@testing-library/react'
import SimpleImageGridItem from '../Components/SimpleImageGridItem'
import '@testing-library/jest-dom/extend-expect'

test('loads grid item with css', () => {
  const item = {
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
  }
  const CSSConfig = {
    gridItemContainer: 'grid-item-container',
    gridItem: 'grid-item',
    gridItemLink: 'grid-item-link',
    gridItemImage: 'grid-item-image'
  }
  const { container } = render(<SimpleImageGridItem item={item} cssConfig={CSSConfig}/>)
  expect(container.firstChild.classList.contains(CSSConfig.gridItemContainer)).toBe(true)
  expect(container.firstChild.firstChild.classList.contains(CSSConfig.gridItem)).toBe(true)

  expect(screen.getByRole('link')).toHaveAttribute('class', CSSConfig.gridItemLink)
  expect(screen.getByRole('img')).toHaveAttribute('class', CSSConfig.gridItemImage)
})
