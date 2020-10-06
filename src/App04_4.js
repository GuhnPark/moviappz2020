import React from 'react';
import PropTypes from 'prop-types';


function Food( { name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt = {name + ".jpg"} />
    </div>
  )
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samggyeopsal',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Schweinebauch-2.jpg/1920px-Schweinebauch-2.jpg',
    rating: 3.1,
  },
  { 
    id: 3,
    name: 'Bibimbap',
    image: 'https://commons.wikimedia.org/wiki/File:Dolsot-bibimbap.jpg', 
    rating: 4.4,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'http://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg',
    rating: 2.2,
  },
];

//function renderFood(dish) {
//  return <Food name={dish.name} picture={dish.image} />;
//}

//const renderFood = dish => <Food name={dish.name} picture={dish.image} />; 화살표 함수로 정의

function App() {
  //console.log(foodILike.map(renderFood))
  return (
    <div>
      <h1>Hello!!</h1>
      {/* {foodILike.map(renderFood)} */}
      {foodILike.map(dish => 
        (<Food key={dish.id} name={dish.name} picture={dish.image} 
        rating={dish.rating}/>
      ))}
    </div>
  );
}

Food.propType = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,  //isRequired는 필수라는 뜻. 빼면 자료형만 맞추면된다.
};

export default App;
