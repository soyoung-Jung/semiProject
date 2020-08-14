import React from 'react';

import './App.css';
import { Grid, Image } from 'semantic-ui-react'
import ProductDetail from './view/ProductDetail';
//수정가능한지 확인중
//푸쉬확인

function App() {
  return (
    <Grid divided='vertically'>
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
