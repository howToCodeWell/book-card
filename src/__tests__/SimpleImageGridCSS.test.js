import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SimpleImageGrid from '../Components/SimpleImageGrid'

test('CSS grid config', () => {
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

  const CSSConfig = {
    gridParentContainer: 'grid-parent-container',
    titleContainer: 'title-container',
    title: 'title',
    titleLink: 'title-link',
    gridContainer: 'grid-container',
    gridItemsContainer: 'grid-items-container',
    gridItemContainer: 'grid-item-container',
    gridItem: 'grid-item',
    gridItemLink: 'grid-item-link',
    gridItemImage: 'grid-item-image'
  }

  const { container } = render(<SimpleImageGrid items={itemConfig} header={headerConfig} cssConfig={CSSConfig}/>)
  expect(screen.getByRole('heading')).toHaveTextContent(headerConfig.title)
  expect(screen.getByRole('heading')).toHaveAttribute('class' , 'title')

  const parentContainer = container.firstChild
  expect(parentContainer.classList.contains(CSSConfig.gridParentContainer)).toBe(true)

  const gridContainer = parentContainer.childNodes[1]
  expect(gridContainer.classList.contains(CSSConfig.gridContainer)).toBe(true)
  expect(gridContainer.firstChild.classList.contains(CSSConfig.gridItemsContainer)).toBe(true)

  const links = screen.getAllByRole('link')
  expect(links[0]).toHaveTextContent(headerConfig.link.text)
  expect(links[0]).toHaveAttribute('href', headerConfig.link.url)
  expect(links[0]).toHaveAttribute('href', headerConfig.link.url)
  expect(links[0]).toHaveAttribute('class', CSSConfig.titleLink)
})
