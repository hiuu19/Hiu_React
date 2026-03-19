import React from "react";
class DisplayInfo extends React.Component {
  state = {
    isShow: true,
  };
  handleShowHide = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  render() {
    console.log(this.props); // this: thao tác bên trong class này props: tự động truyền từ cha => con
    const { ListUser } = this.props;
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShow === true
              ? "Ẩn danh sách user"
              : "Hiện danh sách user"}
          </button>
        </div>
        {this.state.isShow && (
          <div>
            {ListUser.map((user) => {
              console.log("Check!", user);

              return (
                <div key={user.id} className={+user.age > 30 ? "green" : "red"}>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfo;
