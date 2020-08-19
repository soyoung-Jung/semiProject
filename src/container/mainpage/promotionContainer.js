import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import PromotionView from '../../view/PromotionView';

@inject('ProductStore')
@observer
class promotionContainer extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default promotionContainer;