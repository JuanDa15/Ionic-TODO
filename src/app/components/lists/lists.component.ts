import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonList } from '@ionic/angular';
import { ListInter } from 'src/app/interfaces/list.interface';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  list:ListInter[] = [];

  @Input() ended!:boolean;
  @ViewChild('listHTML') listHTML:IonList;

  constructor(private wishesService:WishesService,
              public alertController:AlertController) { }


  ngOnInit() {
    this.list = this.wishesService.getList;
  }

  deleteItem( id:number ){
    let index = this.list.findIndex(item => item.id === id);

    this.list.splice(index,1);
    this.wishesService.saveLocalStorage();
  }

  async editItem( list:ListInter ){

    const alert = await this.alertController.create({
      subHeader: 'Write a new name',
      inputs: [
        {
          name: 'listName',
          type: 'text',
          placeholder: 'List Name',
          value: list.name,
          max: '4'
        }
      ],
      buttons: [
        {
          text: 'Save',
          role: 'Save',
          handler: (data) => {
            if(data.listName.length !== 0){
              list.name = data.listName;
              this.wishesService.saveLocalStorage();
              this.listHTML.closeSlidingItems();
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    })
    alert.present();

    
  }
}
