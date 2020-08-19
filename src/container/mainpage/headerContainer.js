import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import HeaderView from "../../view/HeaderView";

@inject("ProductStore", "UserStore")
@observer
class HeaderContainer extends Component {
  setLoginUser = (name, value) => {
    this.props.UserStore.setLoginUser(name, value);
  };
  onSwitchItem = () => {
    this.props.ProductStore.switchItem("home");
    console.log("home");
  };

  render() {
    const { loginBool } = this.props.UserStore;
    return (
      <div>
        <HeaderView
          onSwitchItem={this.onSwitchItem}
          setLoginUser={this.setLoginUser}
          loginBool={loginBool}
        />
      </div>
    );
  }
}

export default HeaderContainer;
