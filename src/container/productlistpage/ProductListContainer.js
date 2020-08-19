import React, { Component } from "react";

import { observer, inject } from "mobx-react";

import ProductListView from "../../view/ProductListView";

@inject("ProductStore")
@observer
class productListContainer extends Component {
  onSelectProduct = (id) => {
    this.props.ProductStore.selectProduct(id);
    this.props.ProductStore.switchItem("detail");
  };

  render() {
    const { selectedCategory } = this.props.ProductStore;
    console.log(selectedCategory);
    return (
      <ProductListView
        products={selectedCategory}
        onSelectProduct={this.onSelectProduct}
      />
    );
  }
}

export default productListContainer;
