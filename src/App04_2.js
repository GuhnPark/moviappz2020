import React from 'react';


function Food( { name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src = {picture} />
    </div>
  )
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg',
  },
  {
    name: 'Samggyeopsal',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Schweinebauch-2.jpg/1920px-Schweinebauch-2.jpg',
  },
  {
    name: 'Bibimbap',
    image: 'https://commons.wikimedia.org/wiki/File:Dolsot-bibimbap.jpg',
  },
  {
    name: 'Doncasu',
    image: 'http://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg',
  },
];

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      {foodILike.map(dish => 
        (<Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
