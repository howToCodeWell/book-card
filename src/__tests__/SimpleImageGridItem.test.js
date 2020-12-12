import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import SimpleImageGridItem from '../Components/SimpleImageGridItem'
import '@testing-library/jest-dom/extend-expect'

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

test('loads image grid item',() => {
  render(<SimpleImageGridItem item={item}/>)
  expect(screen.getByRole('img')).toHaveAttribute('src', item.image.url)
  expect(screen.getByRole('img')).toHaveAttribute('alt', item.image.alt)

  expect(screen.getByRole('link')).toHaveAttribute('href', item.link.url)
  expect(screen.getByRole('link')).toHaveAttribute('target', item.link.target)
  expect(screen.getByRole('link')).toHaveAttribute('title', item.link.title)
})
