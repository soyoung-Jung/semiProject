import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import FooterView from "./view/FooterView";
import PromotionView from "./view/PromotionView";
import { observer, inject } from "mobx-react";
import MainProductListContainer from "./container/mainpage/MainProductListContainer";
import ProductDetailContainer from "./container/productdetailpage/ProductDetailContainer";
import HeaderContainer from "./container/mainpage/HeaderContainer";
import ProductListContainer from "./container/productlistpage/ProductListContainer";

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
<<<<<<< HEAD
          {/* <CartListContainer /> */}
          <HeaderView />
=======
          <HeaderContainer />
>>>>>>> 3d4e34a8bed54e0b224e11f422ffc05c098d9f07
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
              <CartListContainer />
            </Grid.Row>
          </>
        )}
        {activeItem === "list" && (
          <>
            <Grid.Row centered columns={1}>
              <ProductListContainer />
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
