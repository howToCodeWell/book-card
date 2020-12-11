import React from 'react';
import ReactDOM from 'react-dom';
import SimpleImageGrid from './Components/SimpleImageGrid'

const items = [
    {
        link: {
            title: "PHP Array Chunk",
            target: "_blank",
            url: "https://youtu.be/LSDmrLmVbZI"
        },
        image: {
            title: "PHP Array Chunk",
            alt: "Learn PHP Array Chunk",
            url: "http://i3.ytimg.com/vi/LSDmrLmVbZI/maxresdefault.jpg"
        }
    },
    {
        link: {
            title: "Change Key Case in PHP",
            target: "_blank",
            url: "https://youtu.be/wbyK_YCLco0"
        },
        image: {
            title: "Change Key Case in PHP",
            alt: "Change Key Case in PHP",
            url: "http://i3.ytimg.com/vi/wbyK_YCLco0/maxresdefault.jpg"
        }
    },
]

const header = {
    isEnabled: true,
    title: 'PHP Tutorials',
    link: {
        url: 'https://howtocodewell.net',
        text: 'See More'
    }
}

ReactDOM.render(
    <React.StrictMode>
      <SimpleImageGrid items={items} header={header} />
    </React.StrictMode>,
    document.getElementById('root')
);
