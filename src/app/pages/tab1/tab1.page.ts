import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListInter } from 'src/app/interfaces/list.interface';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  list:ListInter[] = [];
  
  
  constructor(private router:Router,
              private wishesService:WishesService,
              public alertController:AlertController) { }

  ngOnInit(): void {
    this.list = this.wishesService.getList;
  }


  async addList(){
    const alert = await this.alertController.create({
      subHeader: 'Add new list name',
      inputs: [
        {
          name: 'listName',
          type: 'text',
          placeholder: 'List Name',
          value: '',
          max: '4'
        }
      ],
      buttons: [
        {
          text: 'Add',
          role: 'Save',
          handler: (data) => {
            if(data.listName.length !== 0){
              let id: number = this.wishesService.createList(data.listName);
              this.router.navigate(['tabs/add/',id]);
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

    // const { data:{listName} } = await alert.onDidDismiss();

    // console.log(listName);
  }
}
