import React from "react";
import Category from "./Category";
import cover0 from "./../Media/images/Zayn0.jpg";
import cover1 from "./../Media/images/Zayn1.jpg";
import cover3 from "./../Media/images/Zayn 3.jpg";
import cover4 from "./../Media/images/Zayn4.jpg";
import cover5 from "./../Media/images/Zayn5.jpg";

function Main() {
  const bg = {
    backgroundImage: "linear-gradient(-45deg,#000 78%, #1ed760)",
  };

  return (
    <main className="root-main" style={bg}>
      {categories().map((item, index) => (
        <Category title={item.title} musicsInfo={item.musics} key={index} />
      ))}
    </main>
  );
}

function categories() {
  const categories = [
    {
      title: "Bleib auf dem Laufeden",
      musics: [
        {
          name: "Music Name",
          cover: cover0,
        },
        {
          name: "Music Name",
          cover: cover1,
        },
        {
          name: "Music Name",
          cover: cover3,
        },
        {
          name: "Music Name",
          cover: cover4,
        },
        {
          name: "Music Name",
          cover: cover5,
        },
      ],
    },
    {
      title: "Sleep",
      musics: [
        {
          name: "Music Name",
          cover: cover0,
        },
        {
          name: "Music Name",
          cover: cover1,
        },
        {
          name: "Music Name",
          cover: cover3,
        },
        {
          name: "Music Name",
          cover: cover4,
        },
        {
          name: "Music Name",
          cover: cover5,
        },
      ],
    },
    {
      title: "Focus",
      musics: [
        {
          name: "Music Name",
          cover: cover0,
        },
        {
          name: "Music Name",
          cover: cover1,
        },
        {
          name: "Music Name",
          cover: cover3,
        },
        {
          name: "Music Name",
          cover: cover4,
        },
        {
          name: "Music Name",
          cover: cover5,
        },
      ],
    },
    {
      title: "Mood",
      musics: [
        {
          name: "Music Name",
          cover: cover0,
        },
        {
          name: "Music Name",
          cover: cover1,
        },
        {
          name: "Music Name",
          cover: cover3,
        },
        {
          name: "Music Name",
          cover: cover4,
        },
        {
          name: "Music Name",
          cover: cover5,
        },
      ],
    },
    {
      title: "Entdecke neue Podcasts",
      musics: [
        {
          name: "Music Name",
          cover: cover0,
        },
        {
          name: "Music Name",
          cover: cover1,
        },
        {
          name: "Music Name",
          cover: cover3,
        },
        {
          name: "Music Name",
          cover: cover4,
        },
        {
          name: "Music Name",
          cover: cover5,
        },
      ],
    },
    {
      title: "Popular new releases",
      musics: [
        {
          name: "Music Name",
          cover: cover0,
        },
        {
          name: "Music Name",
          cover: cover1,
        },
        {
          name: "Music Name",
          cover: cover3,
        },
        {
          name: "Music Name",
          cover: cover4,
        },
        {
          name: "Music Name",
          cover: cover5,
        },
      ],
    },
    {
      title: "Bettferting",
      musics: [
        {
          name: "Music Name",
          cover: cover0,
        },
        {
          name: "Music Name",
          cover: cover1,
        },
        {
          name: "Music Name",
          cover: cover3,
        },
        {
          name: "Music Name",
          cover: cover4,
        },
        {
          name: "Music Name",
          cover: cover5,
        },
      ],
    },
    {
      title: "Soundtrack your home",
      musics: [
        {
          name: "Music Name",
          cover: cover0,
        },
        {
          name: "Music Name",
          cover: cover1,
        },
        {
          name: "Music Name",
          cover: cover3,
        },
        {
          name: "Music Name",
          cover: cover4,
        },
        {
          name: "Music Name",
          cover: cover5,
        },
      ],
    },
  ];

  return categories;
}

export default Main;
