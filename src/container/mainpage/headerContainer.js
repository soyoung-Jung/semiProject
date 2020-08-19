import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import HeaderView from "../../view/HeaderView";

@inject("ProductStore", "UserStore")
@observer
class HeaderContainer extends Component {
  setLoginUser = (name, value) => {
    this.props.UserStore.setLoginUser(name, value);
  };
  onSwitchItem = (keyword) => {
    this.props.ProductStore.switchItem(keyword);
    console.log(keyword);
  };
  onSelectCategory = (text) => {
    this.props.ProductStore.selectProduct(text);
    this.props.ProductStore.switchItem("list");
  };

  render() {
    const { loginBool } = this.props.UserStore;
    return (
        <HeaderView
          onSwitchItem={this.onSwitchItem}
          setLoginUser={this.setLoginUser}
          loginBool={loginBool}
          onSelectCategory={this.onSelectCategory}
        />
    );
  }
}

export default HeaderContainer;
