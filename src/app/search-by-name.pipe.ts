import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(value: any[], term: string): any {
    console.log(term);
    if (term != undefined) {
      //match by name
      return value.filter((x: any) => x["Restaurant Name"].toLowerCase().includes(term.toLowerCase()));
    }
    else {
      return value;
    }
  }

}
