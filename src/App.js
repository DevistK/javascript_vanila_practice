import React from "react";
import PropTypes from "prop-types";

// 동적으로 props 엘리먼트를 추가하기 위한 음식 API
const foodILike = [
  {
    id: 1,
    name: "pizza",
    src: "https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png",
    rating: 5,
  },
  {
    id: 2,
    name: "hambugger",
    src: "https://img-global.cpcdn.com/recipes/6f1b637530078f17/680x482cq70/bugger-recipe-recipe-main-photo.webp",
    rating: 3,
  },
  {
    id: 3,
    name: "ramen",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/250px-Shoyu_Ramen.jpg",
    rating: 4,
  },
];

function Food({ name, picture, rating }) {
  return (
    <h2>
      I like {name}
      <span>
        <img src={picture} alt={name}></img>
      </span>
      <p>rating : {rating}</p>
    </h2>
  );
}

// propType check

Food.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  rating: PropTypes.number,
};

function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.src}
          rating={dish.rating}
        />
      ))}
      {/* {foodILike.map(renderFood)} */}
    </div>
  );
}

export default App;
