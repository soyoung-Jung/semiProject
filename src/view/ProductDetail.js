import React, { Component } from 'react';
import { Grid, Button, Input, Divider, Image } from 'semantic-ui-react';
import bed from '../image/bed.png';

class ProductDetail extends Component {
    render() {
        const {
            product,
            onAddProductInCart
        } = this.props;
        console.log(product)
        return (
            <Grid textAlign='center'>
                <Divider hidden />
                <Grid.Row>
                    <Grid.Column width={7}>
                        <img src={product.imgUrl} />
                        <Image avatar src={bed} size='tiny'/>
                        <Image avatar src={bed} size='tiny'/>
                        <Image avatar src={bed} size='tiny'/>
                        <Image avatar src={bed} size='tiny'/>
                    </Grid.Column>
                    <br />
                    <Grid.Column width={7}>
                        <div>
                            <br/>
                            <br/>
                            <br/>
                            <h1><strong>{product.name}</strong></h1>
                            <h2>{product.price}</h2>
                            <br/>
                            <p>{product.description}</p>
                            <br/>
                        </div>
                        <Divider hidden/>
                        <div>
                            <Input label='수량' type='number' min='0' placeholder='0' />
                        </div>
                        <Divider hidden />
                        <Divider hidden />
                        <Divider hidden />
                        <div>
                            <Button primary>구매하기</Button>
                            <Button secondary onClick={onAddProductInCart}>장바구니</Button>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Divider hidden />
                <Grid.Row>
                    <Grid.Column width={12}>
                        <div>
                            <p>{product.detail}</p>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default ProductDetail;