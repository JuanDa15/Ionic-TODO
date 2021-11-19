import { Pipe, PipeTransform } from '@angular/core';
import { ListInter } from '../interfaces/list.interface';

@Pipe({
  name: 'listType',
  pure: false
})
export class ListTypePipe implements PipeTransform {

  transform(value: ListInter[], ended:boolean): ListInter[] {
      return value.filter(item => item.ended === ended);
      
  }

}
