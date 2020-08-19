import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ProductDetailView from '../../view/ProductDetailView';
import ModalView from '../../view/ModalView'


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
        console.log(selectedProduct.imgUrl);
        return (
        <div>
          <ProductDetailView
          product={selectedProduct}
          onAddProductInCart={this.onAddProductInCart}
          />
          {/* <ModalView selectedProduct={selectedProduct}/> */}
        </div>
        );
    }
}

export default ProductDetailContainer;  