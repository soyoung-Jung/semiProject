import React, { Component } from 'react';

import {observer, inject} from 'mobx-react';

import MainProductListView from '../../view/MainProductListView';

@inject('ProductStore')
@observer
class MainProductListContainer extends Component {

    onSelectProduct = (id) => {
      this.props.ProductStore.selectProduct(id)
      
    }

    render() {
        const {mainProducts} = this.props.ProductStore;
        return (
            <MainProductListView 
            products={mainProducts} onSelectProduct={this.onSelectProduct}
            />
        );
    }
}

export default MainProductListContainer;