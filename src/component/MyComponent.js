// 2 cách định nghĩa component
// class component - giai đoạn 1
import React from "react";
class MyComponent extends React.Component {
  state = { name: "Hiu", address: "Khánh Hòa", age: "22" };
  //JSX - Viết code js trong code html
  render() {
    // quy đinh nội dung component trả về
    return (
      <div>
        My name is: {this.state.name} and I am from {this.state.address}
      </div>
    );
  }
}
// function component - giai đoạn 2
export default MyComponent;
