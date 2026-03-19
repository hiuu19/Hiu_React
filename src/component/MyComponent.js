// 2 cách định nghĩa component
// class component - giai đoạn 1
import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  state = {
    ListUser: [
      { id: 1, name: "Hiếu Phạm", age: "23" },
      { id: 2, name: "Hương Phạm", age: "43" },
      { id: 3, name: "Chung Phạm", age: "28" },
      { id: 4, name: "Thực Phạm", age: "53" },
    ],
  };
  // hàm thêm function
  handleAddFunction = (userValue) => {
    console.log(userValue);
    this.setState({ ListUser: [userValue, ...this.state.ListUser] });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state); // Thực thi hàm => cần ()
  };
  //JSX - Viết code js trong code html
  render() {
    // quy đinh nội dung component trả về
    return (
      <div>
        <AddUserInfo handleAddFunction={this.handleAddFunction} />
        <DisplayInfo
          ListUser={this.state.ListUser} // có ()=> hàm được thực thi ngay lập tức/ khi muốn trừ cha => con => không sà i ()
        />
      </div>
    );
  }
}
// function component - giai đoạn 2
export default MyComponent;
