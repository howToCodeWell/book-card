import React from 'react'
import { render, screen } from '@testing-library/react'
import SimpleImageGrid from '../Components/SimpleImageGrid'
import '@testing-library/jest-dom/extend-expect'

test('loads image grid', () => {
  const itemConfig = [
    {
      link: {
        url: 'https://youtu.be/LSDmrLmVbZI'
      },
      image: {
        alt: 'PHP Array Chunk',
        url: 'http://i3.ytimg.com/vi/LSDmrLmVbZI/maxresdefault.jpg'
      }
    }
  ]
  const headerConfig = {
    isEnabled: true,
    title: 'Web Development Courses',
    link: {
      url: 'https://howtocodewell.net/courses',
      text: 'See more'
    }
  }

  render(<SimpleImageGrid items={itemConfig} header={headerConfig}/>)
  expect(screen.getByRole('heading')).toHaveTextContent(headerConfig.title)
  const links = screen.getAllByRole('link')
  expect(links[0]).toHaveTextContent(headerConfig.link.text)
  expect(links[0]).toHaveAttribute('href', headerConfig.link.url)
})
