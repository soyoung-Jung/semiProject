import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import HeaderView from "../../view/HeaderView";

@inject("ProductStore")
@observer
class HeaderContainer extends Component {
  onSwitchItem = () => {
    this.props.ProductStore.switchItem("home");
    console.log("eeee");
  };
  render() {
    return (
      <div>
        <HeaderView onSwitchItem={this.onSwitchItem} />
      </div>
    );
  }
}

export default HeaderContainer;
