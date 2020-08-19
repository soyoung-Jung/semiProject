import { observable, computed,action } from "mobx";
import accs from "../jsonData/Accs";
import beds from "../jsonData/Beds";
import sofas from "../jsonData/Sofas";
import tables from "../jsonData/Tables";

class ProductStore {
  // 화면 전환용 변수 {'home', 'detail', 'cart'}
  @observable
  activeItem = "home";

  //activeItem 전환(화면 전환)
  @action
  switchItem(item) {
    this.activeItem = item;
    console.log(this.activeItem);
  }

  // 상품 전체 목록
  @observable
  products = accs.concat(beds).concat(sofas).concat(tables);

  // -------- 메인 페이지 ---------

  // 메인페이지 상품목록
  @observable
  selectedProduct = tables[0];
  //프로모션에서 보여질 상품 이미지 목록
  @observable
  promotionImgs = [{
    id :0,
    imgUrl : "resrc/kkj/1.jpg"
  },
  {
    id :1,
    imgUrl : "resrc/kkj/2.jpg"
  },
  {
    id :2,
    imgUrl : "resrc/kkj/3.jpg"
  },
  
  ];

  @computed
  get getPromotionImgs(){
  return this.promotionImgs ? this.promotionImgs.slice() : [];
  
  }


  // 프로모션에서 보여질 상품 이미지 목록
  @observable
  promotionImgs = ["resrc/kkj/1.jpg", "resrc/kkj/2.jpg", "resrc/kkj/3.jpg"];

  // 선택된 상품(상품 이미지 클릭 했을때 해당 상품)
  @observable
  selectedProduct = tables[0];

  // 클릭한 상품 정보를 seletedProduct에 입력
  @action
  selectProduct(id) {
    this.selectedProduct = this.products.find((element) => element.id === id);
    console.log(this.selectedProduct);
  }

  // ------- 상품 디테일 페이지 --------

  // 카트에 상품 추가
  @action
  addProductInCart(product, count) {
    this.productsInCart.push({
      product: product,
      count: count,
      check: false,
    });
    console.log(this.productsInCart);
  }

  // ------- 장바구니 페이지 --------

  //카트에 담겨진 상품목록
  //{product: obj, count: int, check: bool}
  @observable
  productsInCart = [];

  // 총 가격
  @observable
  sumPrice = 0;

  // 장바구니에 담긴 상품들의 총 가격을 계산하는 함수
  @action
  calculatePriceInCart() {
    this.sumPrice = 0;
    this.productsInCart.forEach((productInCart) => {
      if (productInCart.check) {
        this.sumPrice +=
          productInCart.product.price * parseInt(productInCart.count);
      }
      console.log(productInCart.check);
    });
    console.log(this.sumPrice);
  }

  // 체크된 상품 카트에서 제거
  @action
  removeProductInCart() {
    this.productsInCart = this.productsInCart.filter(
      (element) => !element.check
    );
  }

  // 카트 속 제품 check바꾸기
  @action
  changeChecked(product) {
    product.check = !product.check;
  }

  // -------- 상품목록 CRUD --------

  // 상품추가
  @action
  addProduct(product) {
    this.products.add(product);
  }

  // 상품제거
  @action
  removeProduct(selectedId) {
    this.products = this.products.filter(
      (product) => product.id !== selectedId
    );
  }

  // 상품리스트에서 선택된 상품의 아이디와 같은 상품객체 수정
  @action
  modifyTodo(selectedProduct) {
    this.products = this.products.map((todo) =>
      todo.id === selectedProduct.id ? selectedProduct : todo
    );
    console.log(this.products);
  }

  // 상품리스트에서 id가 같은 상품 객체 리턴
  @action
  selectTodo(selectedId) {
    this.seletedProduct = this.products.find(
      (product) => product.id === selectedId
    );
    return this.selectedProduct;
  }
}

export default new ProductStore();
