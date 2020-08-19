import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Header} from 'semantic-ui-react'

//링크 만들지 결정
class FooterView extends Component {
    render() {
        const gridStyle={
            marginLeft: '10%',
            
        }
        return (
            <Grid columns={3} divided >
                <Grid.Row style={gridStyle}>
                    <Grid.Column>
                        <Header as="h4">고객센터</Header>
                            <p>Tel: 010-9220-0628</p>
                            <p>서울특별시 강남구 언주로 508, SUITE 506 </p>
                            <p>Mail: kyungju620@gmail.com</p>
                    </Grid.Column>      
                
                    <Grid.Column>
                        <Header as="h4">IIIKEA KOREA</Header>
                            <p>Customer Service</p>
                            <p>My Orders</p>
                            <p>Return Policy</p>
                    </Grid.Column> 
                    <Grid.Column>
                        <Header as="h4">ABOUT IIIKEA</Header>
                            <p>This is IIIKEA</p>
                            <p>CAREERS</p>
                            <p>News Room</p>
                            <p>Help IIIKEA</p>
                    </Grid.Column>      
                </Grid.Row>
            </Grid>
        );
    }
}

export default FooterView;