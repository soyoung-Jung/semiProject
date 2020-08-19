import React, { Component } from "react";
import { Button, Table, Icon, Checkbox, Image } from "semantic-ui-react";
// import product1 from '../productImages/product1.png'

class CartListView extends Component {
  constructor(props) {
    super(props);
    this.state = { allChecked: false };
  }
  handleAllClicked = () => {
    this.setState({
      allChecked: !this.state.allChecked,
    });
    this.props.onchangeAllChecked(this.state.allChecked);
  };
  render() {
    const { products, price, onChangedChecked, onRemoveProduct } = this.props;
    const gridStyle = {
      marginLeft: 70,
      marginRight: 45,
    };
    // console.log(`렌더링중~~~~~${products}`)
    return (
      <div style={gridStyle}>
        <h1>Cart</h1>

        <Button
          onClick={() => onRemoveProduct()}
          icon
          floated="right"
          basic
          color="red"
        >
          <Icon name="trash alternate" />
        </Button>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell collapsing>
                <Checkbox
                  checked={this.state.allChecked}
                  onChange={this.handleAllClicked}
                />
              </Table.HeaderCell>
              <Table.HeaderCell>product</Table.HeaderCell>
              <Table.HeaderCell>Qty</Table.HeaderCell>
              <Table.HeaderCell textAlign="right">price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {products.map((product) => {
              return (
                <Table.Row key={product.product.id}>
                  <Table.Cell>
                    <Checkbox
                      onChange={() => onChangedChecked(product)}
                      checked={product.check}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Image
                      style={{ fontSize: 30 }}
                      avatar
                      src={product.product.imgUrl}
                    />
                    {product.product.name}
                  </Table.Cell>
                  <Table.Cell>{product.count}</Table.Cell>
                  <Table.Cell textAlign="right">
                    <h2>{product.product.price}</h2>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell />
              <Table.HeaderCell />
              <Table.HeaderCell textAlign="right">
                total price<h1>{price}</h1>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        <Button floated="right" size="large" primary>
          Continue to checkout
        </Button>
      </div>
    );
  }
}

export default CartListView;
