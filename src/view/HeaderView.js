import React, { Component } from 'react';
import {Form, Button, Icon, Input} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import "./HeaderView.css"
class HeaderView extends Component {    
    
    render() {
        return (
            <Form classNmae="form">
              <Button icon size='huge'><Icon name='bars' /></Button>
              <Icon size="huge" name="bath"/>
              <Input size='huge' icon='search' placeholder='Search...' />
              <Button icon size='huge'><Icon name= 'user circle outline'/></Button>
              <Button icon size='huge'><Icon name ='shopping cart' /></Button>
              
            </Form>
          );
    }
}

export default HeaderView;
