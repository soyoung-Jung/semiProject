import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import HeaderView from "./view/HeaderView";
import FooterView from "./view/FooterView";
import PromotionView from "./view/PromotionView";
import { observer, inject } from "mobx-react";
import ProductStore from "./store/ProductStore";
import ProductDetail from "./view/ProductDetail";
import ProductDetailContainer from "./container/productdetailpage/ProductDetailContainer";
@observer
@inject("ProductStore")

class App extends Component {
  render() {
    let activeItem = this.props.ProductStore.activeItem;
    // console.log(activeItem);
    // console.log(this.props.ProductStore.mainProducts);
    return (
      <Grid divided="vertically">
        <Grid.Row centered columns={1}>
        </Grid.Row>
        {activeItem === "home" && (
          <>
            <Grid.Row centered columns={1}>
              {/* <PromotionView />
            </Grid.Row>
            <Grid.Row centered columns={1}>
              <LoginView /> */}
              <ProductDetailContainer/>
            </Grid.Row>
          </>
        )}
        {activeItem === "detail" && (
          <>
            <Grid.Row centered columns={1}>
              <productDetailContainer />
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
