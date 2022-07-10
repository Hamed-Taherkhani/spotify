import React from "react";
import "./css/Category.css";
import { Link } from "react-router-dom";

function Category(props) {
  const { title, musicsInfo } = props,
    linkTitle = title.toLowerCase().replaceAll(" ", "-");

  return (
    <section className="category-component-539">
      <h2 className="category-title">{title}</h2>

      <ul className="music-list">
        {musicsInfo.map((item, index) => (
          <li className="music" key={index}>
            <Link
              to={{
                pathname: `music/${linkTitle}/${index}`,
                search: `${item.singer.replaceAll(
                  " ",
                  "-"
                )}?${item.name.replaceAll(" ", "-")}?${item.cover}`,
              }}
            >
              <div>
                <div className="cover">
                  <img src={item.cover} alt={item.name} />
                </div>

                <h3 className="music-name">{item.name}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Category;
