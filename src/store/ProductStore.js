import { observable, computed, action } from "mobx";
import Accs from "../jsonData/Accs";
import Beds from "../jsonData/Beds";

class ProductStore {
  @observable
  activeItem = "home";

  // 상품목록
  @observable
  products = Accs.concat(Beds);

  @observable
  AccsProducts = Accs;

  @observable
  BedsProducts = Beds;
  //메인페이지 상품목록
  @observable
  mainProducts = [this.AccsProducts[0], this.AccsProducts[1], Beds[0], Beds[1]];

  //선택된 상품
  @observable
  selectedProduct = {};
  //프로모션에서 보여질 상품 이미지 목록
  @observable
  promotionImgs = [
    "resrc/kkj/1.jpg",
    "resrc/kkj/2.jpg",
    "resrc/kkj/3.jpg"
  ];

  //카트에 담겨진 상품목록
  @observable
  productsInCart = [
    {
      product: Beds[0],
      count: 1,
      deleteCheck: true, //체크 되었는지 여부
    },
  ];

  //카트에 담긴 상품들의 총 가격
  @computed
  get allProductPriceInCart() {
    let sumPrice = 0;
    this.productsInCart.forEach((productInCart) => {
      if (productInCart.check) {
        sumPrice += productInCart.product.price * productInCart.count;
      }
    });

    return sumPrice;
  }

  //클릭한 상품 정보를 seletedProduct에 입력
  @action
  selectProduct(id) {
    this.selectedProduct = this.products.find((element) => element.id === id);
  }

  //activeItem 전환
  @action
  switchItem(item) {
    this.activeItem = item;
  }
  //카트에 상품 추가

  @action
  addProductInCart(product, count) {
    this.productsInCart.push({
      product: product,
      count: count,
      deleteCheck: false,
    });
  }

  //상품추가
  @action
  addProduct(product) {
    this.products.add(product);
  }

  //상품제거
  @action
  removeProduct(selectedId) {
    this.products = this.products.filter(
      (product) => product.id !== selectedId
    );
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
    this.seletedProduct = this.products.find(
      (product) => product.id === selectedId
    );
    return this.selectedProduct;
  }
}

export default new ProductStore();
