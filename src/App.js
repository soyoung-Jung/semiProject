import React from 'react';

import './App.css';//hi
import { Grid, Image } from 'semantic-ui-react'
import HeaderView from './view/HeaderView';
import MainProductListContainer from './container/mainpage/MainProductListContainer';



function App() {
  return (
      <>
    <Grid divided='vertically'>
      <Grid.Row centered
 columns={1}>
        <HeaderView />
      </Grid.Row>

    </Grid>
    <Grid columns={1}>
    <Grid.Row>
      <Grid.Column>
        <MainProductListContainer/>
      </Grid.Column>
      <Grid.Column>

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
    </>
  );
}

export default App;