import { Component, OnInit } from '@angular/core';
import { ListInter } from 'src/app/interfaces/list.interface';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  list:ListInter[] = [];

  constructor(private wishesService:WishesService){}

  ngOnInit(): void {
    this.list = this.wishesService.getList;
  }


}
