import React from 'react';
import Profile from './Profile';

function Gallery({ Members }) {
    return (
        <div className="gallery">
            {Members.map((member, index) => (
                <Profile key={index} {...member} />
            ))}
        </div>
    );
}

export default Gallery;