import React from 'react'
import PropTypes from 'prop-types'
import SimpleImageGridItem from './SimpleImageGridItem'

const SimpleImageGrid = ({ items, header }) => (
  <div className="-ml-4 -mr-4 -mb-4 p-4 bg-gray-500 border-t ">
    {header.isEnabled && (
      <div className="text-center">
        <h1 className="text-black ">{header.title}</h1>
        <a href={header.link.url}
           className=" text-sm mt-2 text-black hover:text-white hover:no-underline">{header.link.text}</a>
      </div>
    )}

    <div className="container mx-auto px-4 pb-8">
      <div className="no-flex flex justify-center flex-wrap">
        {items.map(function (item, index) {
          return <SimpleImageGridItem item={item} key={index}/>
        })}
      </div>
    </div>
  </div>
)

SimpleImageGrid.propTypes = {
  items: PropTypes.array.isRequired,
  header: PropTypes.shape({
    isEnabled: PropTypes.bool.isRequired,
    title: PropTypes.string,
    link: PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string
    })
  }).isRequired
}

export default SimpleImageGrid
