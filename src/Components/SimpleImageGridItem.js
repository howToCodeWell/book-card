import React from 'react'
import PropTypes from 'prop-types'

const defaultGridItemCSSConfig = {
  gridItemContainer: 'grid-item-container',
  gridItem: 'grid-item',
  gridItemLink: 'grid-item-link',
  gridItemImage: 'grid-item-image'
}

const SimpleImageGridItem = ({ item, cssConfig = defaultGridItemCSSConfig}) => {

  return <div className={cssConfig.gridItemContainer}>
    <div className={cssConfig.gridItem}>
      <a href={item.link.url} title={item.link.title} target={item.link.target} className={cssConfig.gridItemLink}>
        <img src={item.image.url} alt={item.image.alt} className={cssConfig.gridItemImage}/>
      </a>
    </div>
  </div>
}

SimpleImageGridItem.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.shape({
      title: PropTypes.string,
      target: PropTypes.string,
      url: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.shape({
      title: PropTypes.string,
      alt: PropTypes.string,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  cssConfig: PropTypes.shape({
    gridItemContainer: PropTypes.string,
    gridItem: PropTypes.string,
    gridItemLink: PropTypes.string,
    gridItemImage: PropTypes.string,
  })
}

export default SimpleImageGridItem
