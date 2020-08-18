import React, { Component } from 'react';
import { Grid, Button, Input, Divider, Image } from 'semantic-ui-react';
import bed from '../image/bed.png';

class ProductDetail extends Component {
    render() {
        return (
            <Grid textAlign='center'>
                <Divider hidden />
                <Grid.Row>
                    <Grid.Column width={7}>
                        <img src={bed} />
                        <br/>
                        <Image avatar src={bed} size='tiny'/>
                        <Image avatar src={bed} size='tiny'/>
                        <Image avatar src={bed} size='tiny'/>
                        <Image avatar src={bed} size='tiny'/>
                    </Grid.Column>
                    <br />
                    <Grid.Column width={7}>
                        <div>
                            <br/>
                            <h1>침대</h1>
                            <h3>가격</h3>
                            <br/>
                            <p>쿠션형 침대프레임, 봄스타드 블랙150x200 cm</p>
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
                            <Button secondary>장바구니</Button>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Divider hidden />
                <Grid.Row>
                    <Grid.Column width={12}>
                        <div>
                            <p>Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!Have a nice day!!!!</p>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default ProductDetail;