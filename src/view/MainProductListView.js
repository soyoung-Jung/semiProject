import React, { Component } from 'react';
import { Grid, Card, Image, Icon, Rating} from 'semantic-ui-react';


class MainProductListView extends Component {
    render() {
        const {products} = this.props;
        return (
            <Grid>
                <Grid.Row columns={4}>
                    {products.map((product) => {
                        return(
                            <Grid.Column>
                                <Card>
                                    <Image src={product.imgUrl} wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header as="h1" textAlign="center">{product.name}</Card.Header>
                                        <Card.Header as="h6" >{product.price}</Card.Header> 
                                        <Card.Meta>
                                            <Rating icon='star' defaultRating={3} maxRating={5} />  
                                            <span className='date'>product rating</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            {product.description}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                        <Icon size="large"name='cart' />
                                        </a>
                                        <a>
                                        <Icon size = "large"name='like'/>
                                        </a>
                                    </Card.Content>
                                    </Card>
                                </Grid.Column>
                        )
                    })}
                </Grid.Row>

            </Grid>
        );
    }
}

export default MainProductListView;