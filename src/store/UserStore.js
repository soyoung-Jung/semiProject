import { observable, computed, action } from "mobx";
import generateId from "../IDGenerator";

class UserStore{
    //회원목록
    @observable
    users = [
        {
            id : generateId(5),
            name : "손지훈",
            userID : "msaclass",
            userPassword : "12345",
        },
        {
            id : generateId(5),
            name : "김경주",
            userID : "",
            userPassword : "",
        },
        {
            id : generateId(5),
            name : "정소영",
            userID : "",
            userPassword : "",
        },
        {
            id : generateId(5),
            name : "여민호",
            userID : "",
            userPassword : "",
        }
    ]

    @observable
    user = {

    }
    
    //회원추가
    @action
    addProduct(user){
        this.users.add(user);
    }
    
    //회원제거
    @action
    removeProduct(selectedId){
        this.users = this.users.filter((user) => user.id !== selectedId);
    }
    
    @action 
    modifyTodo(selectedProduct) {
        //회원리스트에서 선택된 회원의 아이디와 같은 회원객체 수정
        this.users = this.users.map((todo) =>
        todo.id === selectedProduct.id ? selectedProduct : todo
        );
        console.log(this.users);
    }
    
    @action
    selectTodo(selectedId) {
        //회원리스트에서 id가 같은 회원 객체를 user로 등록
        this.user = this.users.find((user) => user.id === selectedId);
    }

}

export default new UserStore();
