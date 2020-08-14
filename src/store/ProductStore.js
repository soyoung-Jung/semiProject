import { observable, computed, action } from "mobx";
import generateId from "../IDGenerator";

class ProductStore {

    // 상품목록
    @observable
    products = [{
        id: generateId(5),
        title: "원목 2단 침대",
        price: 350000,
        imgURL: "",
        category: "",
        mainpage: false, //메인페이지 노출 여부
        desc: " ", //상품 설명,
        descImgURL: "" //상품 설명 이미지
    }];

    //선택된 상품
    @observable
    selectedProduct = { 

    }
    //프로모션에서 보여질 상품 이미지 목록
    @observable
    promotionImgs = [
    ];

    //카트에 담겨진 상품목록
    @observable
    productsInCart = [
        {
            product: {},
            count: 0
        }
    ];

    //카트에 담긴 상품들의 총 가격
    @computed  
    get allProductPriceInCart(){
        let sumPrice = 0;
        this.productsInCart.forEach(product => sumPrice += product.price);
        return sumPrice; 
    }

    //상품추가
    @action
    addProduct(product){
        this.products.add(product);
    }
    
    //상품제거
    @action
    removeProduct(selectedId){
        this.products = this.products.filter((product) => product.id !== selectedId);
    }
    
    @action 
    modifyTodo(selectedProduct) {
      //상품리스트에서 선택된 상품의 아이디와 같은 상품객체 수정
      this.products = this.products.map((todo) =>
        todo.id === selectedProduct.id ? selectedProduct : todo
      );
      console.log(this.products);
    }
  
    @action
    selectTodo(selectedId) {
      //상품리스트에서 id가 같은 상품 객체 리턴
      this.product = this.products.find((product) => product.id === selectedId);
    }
    

}

export default new ProductStore();