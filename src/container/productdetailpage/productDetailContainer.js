import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ProductDetail from '../../view/ProductDetail';


@inject('ProductStore')
@observer
class ProductDetailContainer extends Component {
    onAddProductInCart=(product, count)=>{
        // let product, count = this.props.ProductStore;
        this.props.ProductStore.addProductInCart(product, count);
        // console.log(product);
        // console.log(count);
    }
    render() {
        const {selectedProduct} = this.props.ProductStore;

        return (
          <ProductDetail 
          product={selectedProduct}
          onAddProductInCart={this.onAddProductInCart}
          />
        );
    }
}

export default ProductDetailContainer;  