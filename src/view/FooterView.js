import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Header} from 'semantic-ui-react'

class FooterView extends Component {
    //test 
    render() {
        return (
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h1">고객센터</Header>
                    </Grid.Column>      
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    </Grid.Column>      
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    </Grid.Column>      
                </Grid.Row>
            </Grid>
        );
    }
}

export default FooterView;