import { ListItem } from "./list-item.model";

export class List{

  id:number;
  name: string;
  createdDate: Date;
  endDate: Date;
  ended: boolean;
  items: ListItem[];

  constructor(name:string){
    this.name = name;
    this.createdDate = new Date();
    this.ended = false;
    this.items = [];
    this.id = new Date().getTime();
  }
}