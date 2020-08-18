import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ProductDetail from '../../view/ProductDetail';


@inject('ProductStore')
@observer
class ProductDetailContainer extends Component {
    onAddProductInCart=()=>{
        
    }
    render() {
        const {selectedProduct} = this.props.ProductStore;
        console.log(selectedProduct)
        return (
          <ProductDetail product={selectedProduct}/>
        );
    }
}

export default ProductDetailContainer;  