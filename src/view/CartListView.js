import React, { Component } from 'react';
import {Button, Table, Icon, Checkbox, Image} from 'semantic-ui-react';
// import product1 from '../productImages/product1.png'

class CartListView extends Component {
    render() {
        const{products, price} = this.props;
        return (            
        <div>
            <h1>Cart</h1>

        <Button icon floated='right' basic color='red'>
            <Icon name='trash alternate'/>
        </Button>
      <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell collapsing>
                        <Checkbox/>
                    </Table.HeaderCell>
                    <Table.HeaderCell>product</Table.HeaderCell>
                    <Table.HeaderCell>Qty</Table.HeaderCell>
                    <Table.HeaderCell textAlign='right'>price</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

        <Table.Body>
            {products.map((product) => {
                return(
                <Table.Row key={product.product.id}>
                    <Table.Cell>
                        <Checkbox/>
                    </Table.Cell>
                    <Table.Cell>
                        <Image style={{'fontSize':30}} avatar src={product.product.imgUrl} />
                        {product.product.name}
                    </Table.Cell>
                    <Table.Cell>{product.count}</Table.Cell>
                    <Table.Cell textAlign='right'><h2>{product.product.price}</h2></Table.Cell>
                </Table.Row>
                )
                })}
        </Table.Body>

        <Table.Footer>
            <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell />
                <Table.HeaderCell />
                <Table.HeaderCell textAlign='right'>total price<h1>{price}</h1></Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    </Table>
    <Button floated='right' size='large' primary>Continue to checkout</Button>
</div>
);
}

    }

export default CartListView;