import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListInter } from 'src/app/interfaces/list.interface';
import { ListItem } from 'src/app/models/list-item.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list:ListInter;
  itemName:string = '';

  constructor(private AR:ActivatedRoute,
              private wishesService:WishesService) { }

  ngOnInit() {
    this.AR.params.subscribe({
      next: ({id}) => this.list = this.wishesService.loadList(id)
    })
    // const listID = this.AR.snapshot.paramMap.get('id');
  }

  addListItem(){
    const pendings = this.list.items
                    .filter(item => item.ended === false)
                    .length;
                    
    if(pendings === 0){
      this.list.endDate = null;
      this.list.ended = false;
    }
    if(this.itemName.trim().length !== 0){
      const newItem = new ListItem(this.itemName);  
      this.list.items.push(newItem);
      this.itemName = '';
      this.wishesService.saveLocalStorage();
    }
  }

  saveCheckBoxChanges(){
    const pendings = this.list.items
                      .filter(item => item.ended === false)
                      .length;


    if(pendings === 0){
      this.list.endDate = new Date();
      this.list.ended = true;
    }else{
      this.list.endDate = null;
      this.list.ended = false;
    }

    this.wishesService.saveLocalStorage();
  }

  deleteListItem( id:number ){
    let index = this.list.items.findIndex( item => item.id === id);
    this.list.items.splice(index,1);

    const pendings = this.list.items
                      .filter(item => item.ended === false)
                      .length;
    
    if(pendings === 0){
      this.list.endDate = new Date();
      this.list.ended = true;
    }
    this.wishesService.saveLocalStorage();


  }

}
