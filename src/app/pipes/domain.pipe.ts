import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domain'
})
export class DomainPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    try{
      const domainAndPath : string = value.split('//')[1];
      return domainAndPath.split('/')[0];
      } catch(err){
      console.log("error in domain pipe ", err);
      return null
      }
  }

}
