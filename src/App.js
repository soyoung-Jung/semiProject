import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import HeaderView from "./view/HeaderView";
import FooterView from "./view/FooterView";
import PromotionView from "./view/PromotionView";
import { observer, inject } from "mobx-react";
import MainProductListContainer from "./container/mainpage/MainProductListContainer";
<<<<<<< HEAD
import CartListContainer from "./container/cartPage/CartListContainer";
=======
import productDetailContainer from "./container/productdetailpage/ProductDetailContainer";
import ProductDetailContainer from "./container/productdetailpage/ProductDetailContainer";
>>>>>>> 74ed7b37112f05720a2402a7deed17985ff58ba1

@inject("ProductStore")
@observer
class App extends Component {
  render() {
    let activeItem = this.props.ProductStore.activeItem;
    // console.log(activeItem);
    // console.log(this.props.ProductStore.mainProducts);
    return (
      <Grid divided="vertically">
        <Grid.Row centered columns={1}>
          <CartListContainer/>
        </Grid.Row>
        {activeItem === "home" && (
          <>
            <Grid.Row centered columns={1}>
              <PromotionView />
            </Grid.Row>
            <Grid.Row centered columns={1}>
              <MainProductListContainer />
            </Grid.Row>
          </>
        )}
        {activeItem === "detail" && (
          <>
            <Grid.Row centered columns={1}>
              <ProductDetailContainer />
            </Grid.Row>
          </>
        )}
        {activeItem === "cart" && (
          <>
            <Grid.Row centered columns={1}>
              <PromotionView />
            </Grid.Row>
          </>
        )}
        <Grid.Row centered columns={1}>
          <FooterView />
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
