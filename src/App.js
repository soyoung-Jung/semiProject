import React from 'react';

import './App.css';//hi
import { Grid, Image } from 'semantic-ui-react'
<<<<<<< HEAD
import HeaderView from './view/HeaderView';
=======
<<<<<<< HEAD
import ProductListView from './view/ProductListView';

=======
import ProductDetail from './view/ProductDetail';
>>>>>>> 96e85bdf53e7808dea87a24328b78492f53cbd61
//수정가능한지 확인중
//푸쉬확인
>>>>>>> f024fbb8077c79899b06bb58f3fd80006531449f

function App() {
  return (
<<<<<<< HEAD
    <Grid divided='vertically'>
      <Grid.Row centered
 columns={1}>
        <HeaderView />
      </Grid.Row>
=======
    <Grid columns={1}>
    <Grid.Row>
      <Grid.Column>

      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>
>>>>>>> 96e85bdf53e7808dea87a24328b78492f53cbd61

      <Grid.Row columns={1}>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
      </Grid.Row>
      
      <Grid.Row columns={1}>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={1}>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
      </Grid.Row>
      
    </Grid>
  );
}

export default App;
