import React from "react";

const ContactItemImage = ({ imageUrl }) => {
    return (
        <div className="contact-item__image">
            <img src={ imageUrl } alt="contact avatar" />
        </div>
    );
}

export default ContactItemImage;