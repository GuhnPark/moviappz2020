import React from 'react';


function Food(props) {
  return <h1>I like {props.fav}</h1>;
}
// function Food({ fav }) { //구조 분해 할당(destructuring-assignment ES6)
//   return <h1>I like {fav}</h1>;
//   //return <h1>I like {props.fav}</h1>;
// }


function App() {
  //return <div className="App" />;
  return (
    <div>
      <h1>Hello!!</h1>
      <Food fav="kimchi" />
      <Food fav="samgipsal" />
      <Food fav="chucumi" />
      <Food fav="ramen" />
    </div>
  );
}

export default App;
