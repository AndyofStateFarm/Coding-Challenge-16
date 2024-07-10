import React from 'react';

function Profile({ name, role, photo }) {
    return (
        <div className="profile">
            <img src={photo} alt={name} />
            <h1>{name}</h1>
            <h2>{role}</h2>
        </div>
    );
}

export default Profile;