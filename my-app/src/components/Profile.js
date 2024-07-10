import React from 'react';

function Profile({ name, role, photo }) {
    return (
        <div className="profile">
            <img src={photo} alt={name} />
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );
}

export default Profile;