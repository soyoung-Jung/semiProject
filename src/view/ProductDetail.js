import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import bed from '../image/bed.png';

class ProductDetail extends Component {
    render() {
        return (
            <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <img src={bed} />
              </Grid.Column>
              <br/>
              <Grid.Column width={8}>
                <div>
                    <h2>침대</h2>
                </div>
                <div>
                    <button attached='left' size='2'>-</button>
                    <input type= 'number' size='2'/>
                    <button attached='right'>+</button>
                </div>
              </Grid.Column>
            </Grid.Row>
        
            <Grid.Row>
              <Grid.Column width={16}>
                <div>
                    <p>Have a nice day!!!!</p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
    }
}

export default ProductDetail;