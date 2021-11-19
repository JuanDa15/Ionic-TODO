import { Injectable } from '@angular/core';
import { ListInter } from '../interfaces/list.interface';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})

export class WishesService {

  list: ListInter[] = [];

  get getList(){
    return this.list;
  }

  constructor(){
    this.loadLocalStorage();
  }

  createList(name:string){
    const newList = new List(name);
    this.list.push(newList);
    this.saveLocalStorage();
    return newList.id;
  }

  loadList(id:number){
    const listItem = this.list.find(listItem => listItem.id == id);
    return listItem;
  }

  saveLocalStorage(){
    localStorage.setItem('lists', JSON.stringify(this.list));
  }

  loadLocalStorage(){
    this.list = JSON.parse(localStorage.getItem('lists')) || [];
  }
}
