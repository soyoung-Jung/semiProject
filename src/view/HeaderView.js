import React from 'react';
import 'semantic-ui-css/semantic.min.css';
// import "./HeaderView.css";
import { Button, Form, Modal, Icon, Menu, Input, Dropdown  } from "semantic-ui-react";


const menuStyle={
    display:'flex',
    justifyContent:'center',
    background: 'rgba(155, 155, 155, 0.2)',
    padding: 25,

}

const iconStyle={
    marginLeft: 20,
}

function HeaderView() {
    const [open, setOpen] = React.useState(false)
    const options = [
        { key: 'edit', icon: 'edit', text: 'Edit Post', value: 'edit' },
        { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
        { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
      ]
      

    return (
       <div >
            <Menu style={menuStyle}>
                <div >
                {/* div로묶어야 안깨짐 */}
                <Button.Group>
                    <Button>
                    <Icon name="bars" />
                    <Dropdown
                    className='button icon'
                    floating
                    options={options}
                    trigger={<></>}
                    />
                    </Button>
                </Button.Group>
                <Icon size="huge" name="bath" style={iconStyle}/>
                <Input size='huge' icon='search' placeholder='Search...' style={iconStyle}/>
                </div>
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button icon size='huge' style={iconStyle}><Icon name= 'user circle outline' />LOGIN</Button>}    >
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


