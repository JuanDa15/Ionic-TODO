import { ListItemInter } from "./list-item.interface";

export interface ListInter{
  id:number;
  name: string;
  createdDate: Date;
  endDate: Date;
  ended: boolean;
  items: ListItemInter[];
}