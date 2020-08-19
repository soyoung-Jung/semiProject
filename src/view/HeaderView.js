import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import "./HeaderView.css";
import { Button, Form, Modal, Icon, Menu, Input, Dropdown, Image  } from "semantic-ui-react";


const menuStyle={
    display:'flex',
    justifyContent:'space-around',
    background: 'rgba(155, 155, 155, 0.2)',
    padding: 20,
    

}
const inputStyle = {
    marginLeft: '50%',
    width: '20%',

}




function HeaderView() {
    const [open, setOpen] = React.useState(false)
    const options = [
        { key: 'edit', icon: 'edit', text: 'Edit Post', value: 'edit' },
        { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
        { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
      ]
      

    return (
        <div>
            <Menu style={menuStyle}>
                
                <Button.Group  >
                    <Button  color='black'>
                    <Dropdown
                    icon='bars'
                    floating
                    
                    >
                    
                    <Dropdown.Menu>
                        { options.map((option) => (
                        <Dropdown.Item key={option.value} {...option} />
                        ))}
                    </Dropdown.Menu>
                    </Dropdown>
                    </Button>
                </Button.Group>
                
                {/* <Icon name='angellist' size="huge" style={{iconStyle}}></Icon> */}
                <Input  className="inputSearch" size='huge' icon='search' placeholder='Search...' style={inputStyle}/>
                
                <Modal 
                    className="loginModal"
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button icon size='huge' color='black' style={{float:'right'}}><Icon name= 'user circle outline' />LOGIN</Button>}    >
                    <Modal.Header>Login Page</Modal.Header>
                    <Modal.Content form  >
                            <Form className="formModal">
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
                        </Form>
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
            <Image src="resrc/kkj/IIIKEA.png" style={{height:"6rem", position:"absolute", top:"15%", left:"11%"}}></Image>
        </div> 
       
    )
  }
export default HeaderView;


