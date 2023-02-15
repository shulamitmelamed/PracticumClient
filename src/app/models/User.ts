import Child from "./Child";

export default class User{
    constructor(public firstName:string,public lastName:string,public idNumber:string,public birthDate:Date,public gender:string,public HMO:string,public childrens:Child[] ){}
}