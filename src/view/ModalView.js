import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";
//import { render } from '@testing-library/react'

const ModalView = (props) => {
<<<<<<< HEAD
  const [open, setOpen] = React.useState(false)
  const selectedProduct = props.selectedProduct;
const onBuyButton=()=>{
    alert("해당 상품이 구매되었습니다.");
    setOpen(false);
}
=======
  const [open, setOpen] = React.useState(false);
  // const selectedProduct = props.selectedProduct;
>>>>>>> 7c04f95568a48b793d50162c976d34122c2906f4
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button primary> 구매하기 </Button>}
    >
      <Modal.Header>구매확인</Modal.Header>
      <Modal.Content image>
<<<<<<< HEAD
        <Image size="medium" src={props.selectedProduct.imgUrl} wrapped />
=======
        <img
          alt="상품이미지"
          size="small"
          src={props.selectedProduct.imgUrl}
          wrapped
        />
>>>>>>> 7c04f95568a48b793d50162c976d34122c2906f4
        <Modal.Description>
          <Header>{props.selectedProduct.name}</Header>
          <p>해당 상품을 구매하시겠습니다?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
<<<<<<< HEAD
        <Button color='black' onClick={() => setOpen(false)}>
          구매취소
        </Button>
        <Button
          content='구매하기'
          labelPosition='right'
          icon='checkmark'
          onClick={() => onBuyButton()}
=======
        <Button color="black" onClick={() => setOpen(false)}>
          아니요
        </Button>
        <Button
          content="구매하기"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
>>>>>>> 7c04f95568a48b793d50162c976d34122c2906f4
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ModalView;
