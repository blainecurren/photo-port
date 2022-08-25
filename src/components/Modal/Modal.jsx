import React from "react";

export default function Modal({ onClose, currentPhoto, linkClick }) {
  const { name, category, description, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`)}
          alt="current category"
        />
        <p>{description}</p>
        <button onClick={linkClick} type="button">
          Check out this project!
        </button>
        <button onClick={onClose} type="button">
          Close this modal
        </button>
      </div>
    </div>
  );
}
