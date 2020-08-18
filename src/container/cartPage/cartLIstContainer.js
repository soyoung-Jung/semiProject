import React, { Component } from 'react';
import CartListView from '../../view/CartListView';

import {inject, observer} from 'mobx-react';

@inject('ProductStore')
@observer

class CartListContainer extends Component {
    render() {
        const {productsInCart, allProductPriceInCart} = this.props.ProductStore;
        return (
            <CartListView products={productsInCart} price={allProductPriceInCart}/>
        );
    }
}

export default CartListContainer;