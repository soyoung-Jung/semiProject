import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./HeaderView.css";
import {
  Button,
  Form,
  Modal,
  Icon,
  Menu,
  Input,
  Dropdown,
  Image,
} from "semantic-ui-react";


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
const dropdownStyle = {
    display: 'block',
}

function HeaderView(props) {
    const [open, setOpen] = React.useState(false)
    const options = [
        { key: 'beds', icon: 'bed', text: 'Beds', value: 'edit' },
        { key: 'delete', icon: 'home', text: 'Sofas', value: 'delete' },
        { key: 'hide', icon: 'archive', text: 'Tables', value: 'hide' },
        { key: 'hide', icon: 'coffee', text: 'Accs', value: 'hide' }
      ]

  return (
    <div>
      <Menu style={menuStyle}>
        <Button.Group>
          <Button color="black">
            <Dropdown icon="bars" floating style={dropdownStyle}>
              <Dropdown.Menu>
                {options.map((option) => (
                  <Dropdown.Item key={option.value} {...option} />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Button>
        </Button.Group>

        {/* <Icon name='angellist' size="huge" style={{iconStyle}}></Icon> */}
        <Input
          className="inputSearch"
          size="huge"
          icon="search"
          placeholder="Search..."
          style={inputStyle}
        />

        <Modal
          className="loginModal"
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={
            <Button icon size="huge" color="black" style={{ float: "right" }}>
              <Icon name="user circle outline" />
              LOGIN
            </Button>
          }
        >
          <Modal.Header>Login Page</Modal.Header>
          <Modal.Content form>
            <Form className="formModal">
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                placeholder="Username"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
                placeholder="Password"
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={() => setOpen(false)}>
              Sign Up
            </Button>
            <Button
              content="Login"
              labelPosition="right"
              icon="checkmark"
              onClick={() => setOpen(false)}
              positive
            />
          </Modal.Actions>
        </Modal>
        <Button icon="shopping basket" />
        <Button icon="user circle" />
      </Menu>
      <Image
        src="resrc/kkj/IIIKEA.png"
        // onClick={onSwitchItem}
        style={{
          height: "6rem",
          position: "absolute",
          top: "15%",
          left: "11%",
          cursor: "pointer",
        }}
      ></Image>
    </div>
  );
}
export default HeaderView;
