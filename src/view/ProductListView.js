import React, { Component } from 'react';
import { Grid, Card, Image, Icon, Rating} from 'semantic-ui-react'




class ProductListView extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row columns={3}>
                <Grid.Column>
                    <Card>
                        <Image wrapped ui={false} />
                        <Card.Content>
                            <Card.Header as="h1" textAlign="center">product name</Card.Header>
                            <Card.Header as="h6" >product price</Card.Header> 
                            {/* large font & no border & icon float right = css? */}
                            <Card.Meta>
                                <Rating icon='star' defaultRating={3} maxRating={5} />  
                                <span className='date'>product rating</span>
                            </Card.Meta>
                            <Card.Description>
                                product description
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

                <Grid.Column>
                    <Card>
                    <Image wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Matthew</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                        </Card.Content>
                    </Card>

                </Grid.Column>
                <Grid.Column>
                    <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Matthew</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={4}>
                <Grid.Column>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Matthew</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>

                <Grid.Column>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Matthew</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Matthew</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default ProductListView;