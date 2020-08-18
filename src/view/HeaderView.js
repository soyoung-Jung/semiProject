import React from 'react';
import 'semantic-ui-css/semantic.min.css';
// import "./HeaderView.css";
import { Button, Form, Modal, Icon, Menu, Input , Grid } from "semantic-ui-react";


const menuStyle={
    display:'flex',
    justifyContent:'center',

}

function HeaderView() {
    const [open, setOpen] = React.useState(false)
    // const [visible, setVisible] = React.useState(false)

    return (
       <div >
            <Menu fixed="top" style={menuStyle}>
                <div >
                {/* div로묶어야 안깨짐 */}
                <Icon size="huge" name="bath"/>
                <Input size='huge' icon='search' placeholder='Search...' />
                </div>
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
             
       </div>
    )
  }
export default HeaderView;


