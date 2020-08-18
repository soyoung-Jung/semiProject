import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import "./HeaderView.css";
import { Button, Form, Modal, Icon, Menu, Input } from "semantic-ui-react";

function HeaderView() {
    const [open, setOpen] = React.useState(false)
  
    return (
        <Form classNmae="form">
            <Menu fixed="top">
                <Button icon size='huge'><Icon name='bars' /></Button>
                <Icon size="huge" name="bath"/>
                <Input size='huge' icon='search' placeholder='Search...' />
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button icon size='huge'><Icon name= 'user circle outline'/>LOGIN</Button>}    >
                    <Modal.Header>Login Page</Modal.Header>
                    <Modal.Content form>
                        <Form.Input
                            icon='user'
                            iconPosition='left'
                            label='Username'
                            placeholder='Username'
                        />
                        <Form.Input
                            icon='lock'
                            iconPosition='left'
                            label='Password'
                            type='password'
                            placeholder='Password'
                        />
                        <Button content='Login' primary />
                    </Modal.Content>
                    <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                        Sign Up
                    </Button>
                    <Button
                        content="Login"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => setOpen(false)}
                        positive
                    />
                    </Modal.Actions>
                </Modal>
            </Menu>
        </Form>
    )
  }
export default HeaderView;
