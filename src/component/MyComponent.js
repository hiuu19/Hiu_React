// 2 cách định nghĩa component
// class component - giai đoạn 1
import React from "react";
class MyComponent extends React.Component {
  state = { name: "Hiu", address: "Khánh Hòa", age: "22" };
  handleClick = (event) => {
    //console.log(">> Clicked!");
    console.log("Click mey button!");
    this.setState({
      name: "Eric",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };
  handleOnchange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  //JSX - Viết code js trong code html
  render() {
    // quy đinh nội dung component trả về
    return (
      <div>
        My name is: {this.state.name} and I am {this.state.age}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnchange(event)} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
// function component - giai đoạn 2
export default MyComponent;
