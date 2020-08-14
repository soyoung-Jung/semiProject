import { observable, computed, action } from "mobx";
import generateId from "../IDGenerator";

class UserStore{
    //유저목록
    @observable
    users = [
        {
            id : generateId(5),
            name : "손지훈",
            userID : "",
            userPassword : "",
        }
    ]




}

export default new UserStore();
