import React, { Component } from 'react';
import { Grid, Image, Header, Button } from 'semantic-ui-react';
import "./PromotionView.css";
import 'react-slideshow-image/dist/styles.css';

class PromotionView extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <Image src='/resrc/kkj/kelvv.jpg' />
                </Grid.Column>
                <Grid.Column width={6} className="description">
                    <Header as='h1'>Designed to your dream standards</Header>
                    <p>불 좀 꺼줄래...? 내 램 좀 보게 </p>
                    <p>불 좀 꺼줄래...? 내 램 좀 보게 </p>
                    <p>불 좀 꺼줄래...? 내 램 좀 보게 </p>
                    <p>불 좀 꺼줄래...? 내 램 좀 보게 </p>
                    <p>오늘 내 기분? 컬러로 말할게 </p>
                    <Button circular="true">Shop now</Button>
                    
                </Grid.Column>
            </Grid>
            
        );
    }
}

export default PromotionView;