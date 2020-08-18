import React, { Component } from 'react';
import CartListView from '../../view/CartListView';

import {inject, observer} from 'mobx-react';

@inject('ProductStore')
@observer

class CartListContainer extends Component {
    onChangedChecked = () => {
        this.props.ProductStore.changeChecked();
    }
    onRemoveProduct = (selectedId) => {
        this.props.ProductStore.removeProduct(selectedId);
    }
    render() {
        const {productsInCart, allProductPriceInCart} = this.props.ProductStore;
        return (
            <CartListView 
            products={productsInCart}
            price={allProductPriceInCart}
            onChangedChecked={this.onChangedChecked}
            onRemoveProduct={this.onRemove}
             />
        );
    }
}

export default CartListContainer;