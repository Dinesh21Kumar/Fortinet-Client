import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'containsPipe'
})
export class ContainsPipePipe implements PipeTransform {

  transform(value: any[], term: string): any {
    console.log(term);
    if (term != undefined) {
      //match by exact category
      return value.filter((x: any) => x["Cuisines"].toLowerCase() === (term.toLowerCase()));
    }
    else {
      return value;
    }
  }
}
