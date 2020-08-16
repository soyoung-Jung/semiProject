import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid} from 'semantic-ui-react'

class FooterView extends Component {
    render() {
        return (
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column> 
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