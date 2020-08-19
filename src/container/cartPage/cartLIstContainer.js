import React, { Component } from "react";
import CartListView from "../../view/CartListView";

import { inject, observer } from "mobx-react";

@inject("ProductStore")
@observer
class CartListContainer extends Component {
  onChangedChecked = (product) => {
    this.props.ProductStore.changeChecked(product);
    this.props.ProductStore.calculatePriceInCart();
  };
  onRemoveProduct = () => {
    this.props.ProductStore.removeProductInCart();
    this.props.ProductStore.calculatePriceInCart();
  };
  onchangeAllChecked = (check) => {
    this.props.ProductStore.changeAllChecked(check);
    this.props.ProductStore.calculatePriceInCart();
  };

  render() {
    const { productsInCart, sumPrice } = this.props.ProductStore;
    return (
      <CartListView
        products={productsInCart}
        price={sumPrice}
        onChangedChecked={this.onChangedChecked}
        onRemoveProduct={this.onRemoveProduct}
        onchangeAllChecked={this.onchangeAllChecked}
      />
    );
  }
}

export default CartListContainer;
