import React, { Component } from 'react';

import {observer, inject} from 'mobx-react';

import MainProductListView from '../../view/MainProductListView';

@inject('ProductStore')
@observer
class MainProductListContainer extends Component {
    
    render() {
        const {mainProducts} = this.props.ProductStore;
        return (
            <MainProductListView products={mainProducts}/>
        );
    }
}

export default MainProductListContainer;