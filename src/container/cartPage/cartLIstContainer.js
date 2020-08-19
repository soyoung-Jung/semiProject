import React, { Component } from "react";
import CartListView from "../../view/CartListView";

import { inject, observer } from "mobx-react";
<<<<<<< HEAD

=======
//10
>>>>>>> 3a4d04827ea55527f3fe45fdc717a7cc787efc56
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
<<<<<<< HEAD
  onchangeAllChecked = (check) => {
    this.props.ProductStore.changeAllChecked(check);
    this.props.ProductStore.calculatePriceInCart();
  };
=======
>>>>>>> 3a4d04827ea55527f3fe45fdc717a7cc787efc56

  render() {
    const { productsInCart, sumPrice } = this.props.ProductStore;
    return (
      <CartListView
        products={productsInCart}
        price={sumPrice}
        onChangedChecked={this.onChangedChecked}
        onRemoveProduct={this.onRemoveProduct}
<<<<<<< HEAD
        onchangeAllChecked={this.onchangeAllChecked}
=======
>>>>>>> 3a4d04827ea55527f3fe45fdc717a7cc787efc56
      />
    );
  }
}

export default CartListContainer;
