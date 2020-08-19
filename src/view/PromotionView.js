import React from "react";
import {
  Grid,
  Image,
  Header,
  Button,
  Icon,
  Menu,
  Sidebar
} from "semantic-ui-react";

function PromotionView() {
  const [visible, setVisible] = React.useState(false);
  return (
      <div>
        <Grid>      
            <Grid.Column width={1}>
            {/* <Button
                icon
                size="huge"
                onClick={() => {
                setVisible(true);
                }}
            >
            <Icon name="bars" />
            </Button> */}
            </Grid.Column>
            <Grid.Column width={9}>
                <Sidebar.Pushable as={Grid}>
                <Sidebar
                    as={Menu}
                    animation="overlay"
                    icon="labeled"
                    inverted
                    onHide={() => setVisible(false)}
                    vertical
                    visible={visible}
                    width="thin"
                >
                    <Menu.Item as="a">
                    <Icon name="home" />
                    Home
                    </Menu.Item>
                    <Menu.Item as="a">
                    <Icon name="bath" />
                    Bathroom
                    </Menu.Item>
                    <Menu.Item as="a">
                    <Icon name="camera" />
                    Channels
                    </Menu.Item>
                </Sidebar>
      
        
            
                <Sidebar.Pusher dimmed={visible}>
                    <Image src="resrc/kkj/kelvv.jpg" />
                </Sidebar.Pusher>
                
                </Sidebar.Pushable>
            </Grid.Column>

            <Grid.Column width={6} className="description">
                <Header as="h1">Designed to your dream standards</Header>
                <p>불 좀 꺼줄래...? 내 램 좀 보게 </p>
                <p>불 좀 꺼줄래...? 내 램 좀 보게 </p>
                <p>불 좀 꺼줄래...? 내 램 좀 보게 </p>
                <p>불 좀 꺼줄래...? 내 램 좀 보게 </p>
                <p>오늘 내 기분? 컬러로 말할게 </p>
                <p>오늘 내 기분? 컬러로 말할게 </p>
                <p>오늘 내 기분? 컬러로 말할게 </p>
                <p>오늘 내 기분? 컬러로 말할게 </p>
                <p>오늘 내 기분? 컬러로 말할게 </p>
                <p>오늘 내 기분? 컬러로 말할게 </p>
                <p>오늘 내 기분? 컬러로 말할게 </p>
                <p>오늘 내 기분? 컬러로 말할게 </p>
                <Button circular="true">Shop now</Button>
            </Grid.Column>
        </Grid>
    </div>
  );
}

export default PromotionView;