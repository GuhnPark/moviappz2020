import React from 'react';

class App extends React.Component { 
  constructor(props) {
    super(props);
    console.log('hello');
  }

  state = {
    count: 0,

  };

  add = () => {
    this.setState(current => ({
      count:current.count +1,
    }))
  }

  minus = () => {
      this.setState(current => ({ //current 인자를 받아 객체로 반환하는 함수.
      count:current.count -1,
    }))
  }

  componentDidMount() { //렌더 실행후 실행
    console.log('component renderd');
  }

  componentDidUpdate() { //업데이트 될때.(ex. setState)
    console.log('I just updated.');
  }

  componentWillUnmount() { //화면에서 떠날때.
    console.log('Goodbye, cruel world');
  }

  
  render() {
    console.log('render');
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
