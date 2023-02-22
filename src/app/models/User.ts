import Child from "./Child";
import { Gender } from "./Gender";
import { HMO } from "./HMO";

export default class User{

    constructor(
        public Id:number,
        public FirstName:string,
        public LastName:string,
        public IdNumber:string,
        public DateOfBirth:Date,
        public Gender:Gender,
        public HMO:HMO,
        public Childrens:Child[] ){}
}