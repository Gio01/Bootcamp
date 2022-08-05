import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText'
})
export class TrimTextPipe implements PipeTransform {

  transform(value: string, maxLength : number = 30): string {
    return value.length <= maxLength ? value : value.substring(0, maxLength) + '...';
  }
/**
 * here we just check if the length of the string is less than or equal to 30, 
 * and if so then just return the value, otherwise we take a substring of the 
 * value so the length is of size 30 and then add ... to the end of the string
 * 
 * Recall that the pipes are for transforming data for presentational purposes!!
 * 
 * To do this we just create a pipe and modify the built in transform method with 
 * the functionality that we need for our use case! 
 */
}