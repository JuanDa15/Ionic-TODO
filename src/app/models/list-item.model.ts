export class ListItem{

  id:number;
  description: string;
  ended: boolean;

  constructor(description:string){
    this.description = description;
    this.ended = false;
    this.id = new Date().getTime();
  }
}