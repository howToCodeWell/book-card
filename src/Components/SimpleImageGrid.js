import React from 'react'
import PropTypes from 'prop-types'
import SimpleImageGridItem from './SimpleImageGridItem'

const defaultCSSConfig = {
  gridParentContainer: 'grid-parent-container',
  titleContainer: 'title-container',
  title: 'title',
  titleLink: 'title-link',
  gridContainer: 'grid-container',
  gridItemsContainer: 'grid-items-container',
}


const SimpleImageGrid = ({ items, header, cssConfig = defaultCSSConfig, cssGridItemConfig }) => (
  <div className={cssConfig.gridParentContainer}>
    {header.isEnabled && (
      <div className={cssConfig.titleContainer}>
        <h1 className={cssConfig.title}>{header.title}</h1>
        <a href={header.link.url} className={cssConfig.titleLink}>{header.link.text}</a>
      </div>
    )}

    <div className={cssConfig.gridContainer}>
      <div className={cssConfig.gridItemsContainer}>
        {items.map(function (item, index) {
          return <SimpleImageGridItem item={item} key={index} cssConfig={cssGridItemConfig}/>
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
  }).isRequired,
}

export default SimpleImageGrid
