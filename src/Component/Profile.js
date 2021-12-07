import React from 'react'
import style from "./style.css"
function Profile({person}) {
    return (
        <div className="contenu">
           
            {person.imgSrc}
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <h2>{person.profession}</h2>
        </div>
    )
}

export default Profile
