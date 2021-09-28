import React from "react";

const Book = ({ title, author, descriptions, category, path }) => {
  return (
    <div className="book-card-info">
      <div className=" book-card-cover-image">
        <figure>
          <img src={path} alt={" cover " + title} width="150px" />
        </figure>
      </div>
      <div className="book-card-info-title">
        <h1>{title}</h1>
        <p>{author}</p>
        <p>{category}</p>
        <p>{descriptions}</p>
      </div>
    </div>
  );
};

export default Book;
