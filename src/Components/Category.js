import React from "react";
import "./css/Category.css";

function Category(props) {
  const { title, musicsInfo } = props;

  return (
    <section className="category-component-539">
      <h2 className="category-title">{title}</h2>

      <ul className="music-list">
        {musicsInfo.map((item, index) => (
          <li className="music" key={index}>
            <div className="cover">
              <img src={item.cover} alt={item.name} />
            </div>

            <h3 className="music-name">{item.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Category;
