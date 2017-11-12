
export class ResponItem{
    status:string;
    msg:string;
    result: Items[];
}
class Items{
    classid: string;
    name:string;
    parentid:string;
    list: Item[];
}
export class Item {
    classid:string;
    name:string;
    parentid:string;
}
