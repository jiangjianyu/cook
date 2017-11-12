export class ResponDish{
    status:string;
    msg:string;
    result:Result;
}
export class Result{
    num:string;
    list:Dishes[];

}
export class Dishes{
    id:string;
    classid:string;
    name:string;
    peoplenum:string;
    preparetime:string;
    cookingtime:string;
    content:string;
    pic:string;
    tag:string;
    material:Material[];
    process: Process[];
}
class Material{
    mname:string;
    type: string;
    amount: string;
}
class Process{
    pcontent:string;
    pic: string;
}
export class Food{
    status :string;
    mmsg: string;
    result:Dishes;
}