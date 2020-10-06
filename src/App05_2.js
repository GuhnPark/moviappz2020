import React from 'react';

class App extends React.Component { //react.component 클래스에 있는 기능이 추가. 상속
  state = {
    count: 0,

  };// state는 동적 데이터를 사용할 때 반드시 도입해야할 요소이다. 리액트는 바뀐 데이터만 업데이트함. 변경 대상이 아니라면 키와 키값은 그대로 유지.

  add = () => { //여기서의 강점 리액트가 화면 구성이 빠르다.(필요한 부분만 바뀜.) 전체 새로고침이 이루어지지 않는다.
    console.log('add');
    //this.setState({ count: this.state.count + 1});
    this.setState(current => ({
      count:current.count +1,
    }))
  }

  minus = () => {
    console.log('minus');
    //this.setState({ count: this.state.count - 1});
    this.setState(current => ({ //current 인자를 받아 객체로 반환하는 함수.
      count:current.count -1,
    }))
  }
  
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }

}


export default App;
