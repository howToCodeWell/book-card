import React from 'react'
import PropTypes from 'prop-types'

const BookCard = ({ book }) => (
    <div className="w-screen md:w-auto md:flex-none w-auto sm:w-1/6 md:w-1/6 p-4 pt-0 mb-2 ">
        <div className={` shadow p-2 bg-gray-900 rounded-lg hover:bg-pink-600`}>
            <a href={book.attributes.url} title={book.attributes.name} target={`_blank`}>
                <img className="m-auto w-screen md:w-auto" src={book.attributes.image_path} alt={book.attributes.name}/>
            </a>
        </div>
    </div>
)

BookCard.propTypes = {
    book: PropTypes.shape({
        attributes: PropTypes.shape({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image_path: PropTypes.string,
        }),
    }).isRequired,
}

export default BookCard
