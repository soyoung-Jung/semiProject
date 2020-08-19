import React, { Component } from "react";
import { Grid, Card, Image, Icon, Rating } from "semantic-ui-react";

class MainProductListView extends Component {
<<<<<<< HEAD
  render() {
    const { products, onSelectProduct } = this.props;
    const gridStyle1 = {
      marginLeft: "5%",
      marginRight: "5%",
    };
    return (
      <Grid>
        <Grid.Row columns={4} style={gridStyle1}>
          {products.map((product) => {
            return (
              <Grid.Column key={product.id}>
                <Card onClick={() => onSelectProduct(product.id)}>
                  <Image src={product.imgUrl} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header as="h1" textAlign="center">
                      {product.name}
                    </Card.Header>
                    <Card.Description>{product.description}</Card.Description>
                    <Card.Meta>
                      <Rating icon="star" defaultRating={3} maxRating={5} />
                    </Card.Meta>
                    <Card.Header as="h1" textAlign="center">
                      {product.price}원
                    </Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon size="large" name="cart" />
                    <Icon size="large" name="like" />
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    );
  }
=======

    render() {
        const {products, onSelectProduct} = this.props;
        const gridStyle1={
            marginLeft: '5%',
        }
        
        return (
            <Grid>
                <Grid.Row columns={4} style={gridStyle1}>
                    {products.map((product) => {
                        return(
                            <Grid.Column key={product.id}>
                                <Card onClick={()=>onSelectProduct(product.id)}>
                                    <Image src={product.imgUrl} wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header as="h1" textAlign="center">{product.name}</Card.Header>
                                        <Card.Description>
                                            {product.description}
                                        </Card.Description>
                                        <Card.Meta>
                                            <Rating icon='star' defaultRating={3} maxRating={5} />  
                                        </Card.Meta>
                                        <Card.Header as="h1" textAlign='center'>{product.price}원</Card.Header>
                                    </Card.Content>
                                    <Card.Content extra>
                                        
                                        <Icon size="large"name='cart' />
                                            
                                        
                                        <Icon size = "large"name='like'/>
                                            
                                    </Card.Content>
                                    </Card>
                                </Grid.Column>
                        )
                    })}
                </Grid.Row>

            </Grid>
        );
    }
>>>>>>> 72ccbd4052bba605cacfd990a391c665a51b1bfb
}

export default MainProductListView;
