import React from 'react'
import PropTypes from 'prop-types'

const SimpleImageGridItem = ({ item }) => (
  <div className="w-screen md:w-auto md:flex-none w-auto sm:w-1/6 md:w-1/6 p-4 pt-0 mb-2 ">
    <div className={` shadow p-2 bg-gray-900 rounded-lg hover:bg-pink-600`}>
      <a href={item.link.url} title={item.link.title} target={item.link.target}>
        <img className="m-auto w-screen md:w-auto" src={item.image.url} alt={item.image.alt}/>
      </a>
    </div>
  </div>
)

SimpleImageGridItem.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.shape({
      title: PropTypes.string.isRequired,
      target: PropTypes.string,
      url: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.shape({
      title: PropTypes.string.isRequired,
      alt: PropTypes.string,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default SimpleImageGridItem
