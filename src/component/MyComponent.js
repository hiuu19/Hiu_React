// 2 cách định nghĩa component
// class component - giai đoạn 1
import React from "react";
class MyComponent extends React.Component {
  //JSX - Viết code js trong code html
  render() {
    // quy đinh nội dung component trả về
    return (
      <div>
        My first component!
        {Math.random()}
      </div>
    );
  }
}
// function component - giai đoạn 2
export default MyComponent;
