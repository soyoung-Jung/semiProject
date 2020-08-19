import { Grid, Image, Icon } from "semantic-ui-react";
import SlideImages from "../SlideImage";
import React, { Component } from 'react';

const iconStyle1 = {
    position: 'absolute',
    top: '36%',
    right: '1%',
    cursor: "pointer"

}
const iconStyle2 = {
    position: 'absolute',
    top: '36%',
    left: '3%',
    cursor: "pointer"

}

class PromotionView extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgIndex : 0
        }
        this.length = SlideImages.length;
    }
    imgChange = (symbol) =>{
        let {imgIndex} = this.state;
        let nextIndex;
        if ( symbol === "plus") {
            nextIndex = imgIndex + 1;

            if (this.length === nextIndex) {
                nextIndex = 0;
        }
    }   else {
        nextIndex = imgIndex - 1;
        if(nextIndex < 0) {
            nextIndex = this.length - 1;
        }
    }   this.setState({
        imgIndex : nextIndex
    });

    };
    render() {
        let { imgIndex } = this.state;
        return (
            

            <div>
            <Grid>      
                <Grid.Column width={1}>
                
                </Grid.Column>
                
                <Grid.Column width={14} className="slideImages">
                    <Image src = {SlideImages[imgIndex].imgUrl}></Image>
                    <Icon name="angle right"
                          size="huge"
                          className="angle-right-icon"
                          onClick={() => this.imgChange("plus")}
                          style={iconStyle1}>
                    </Icon>
                    <Icon name="angle left"
                          size="huge"
                          className="angle-left-icon"
                          onClick={() => this.imgChange("minus")}
                          style={iconStyle2}>
                    </Icon>
                    
    
                </Grid.Column>
                
                
                <Grid.Column width={1}>
                
                </Grid.Column>

            </Grid>
        </div>
        );
    }
}

export default PromotionView;

