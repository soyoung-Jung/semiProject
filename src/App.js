import React from 'react';
import { Grid } from 'semantic-ui-react'
import HeaderView from './view/HeaderView';
import FooterView from './view/FooterView';
import PromotionView from './view/PromotionView';
import LoginView from './view/LoginView';


function App() {
  return (
    <Grid divided='vertically'>
      <Grid.Row centered
      columns={1}>
        <HeaderView />
      </Grid.Row>
   
      <Grid.Row centered
      columns={1}>
        <PromotionView />
      </Grid.Row>

      <Grid.Row centered
      columns={1}>
        <LoginView />
      </Grid.Row>

      

      <Grid.Row centered
      columns={1}>
        <FooterView />
      </Grid.Row>
      
    </Grid>
  );
}

export default App;
