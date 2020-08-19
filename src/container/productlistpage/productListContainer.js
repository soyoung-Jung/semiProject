import React, { Component } from 'react';

import {observer, inject} from 'mobx-react';

import ProductListView from '../../view/ProductListView';

@inject("ProductStore")
@observer

class productListContainer extends Component {
    render() {
        const {selectedCategory} = this.props.ProductStore;
        return (
            <ProductListView products={selectedCategory}/>
        );
    }
}

export default productListContainer;