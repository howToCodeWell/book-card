import React from 'react'
import PropTypes from 'prop-types'
import SimpleImageGridItem from './SimpleImageGridItem'

const SimpleImageGrid = ({ items }) => (
    <div className="-ml-4 -mr-4 -mb-4 p-4 bg-gray-500 border-t ">
        <div className="text-center">
            <h1 className="text-black ">Programming resources</h1>
            <a href={`/books`} className=" text-sm mt-2 text-black hover:text-white hover:no-underline">(See all)</a>
        </div>
        <div className="container mx-auto px-4 pb-8">
            <div className="no-flex flex justify-center flex-wrap">
                {items.map(function (item, index) {
                    return <SimpleImageGridItem book={item} key={index}/>
                })}
            </div>
        </div>
    </div>
)

SimpleImageGrid.propTypes = {
    items: PropTypes.array.isRequired,
}

export default SimpleImageGrid
