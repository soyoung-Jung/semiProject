import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import PromotionView from '../../view/PromotionView';

@inject('ProductStore')
@observer
class PromotionContainer extends Component {
    render() {
        let  promotionImgs  = this.props.ProductStore.getPromotionImgs;
        const imgLength = promotionImgs.length;
        return (
            <PromotionView images = {promotionImgs} imgLength={imgLength}
        
      />
        );
    }
}

export default PromotionContainer;