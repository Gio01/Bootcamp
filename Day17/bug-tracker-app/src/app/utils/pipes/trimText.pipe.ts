// this is a pipe to truncate large text sizes for each of the bug names!
//so that there is not a huge textbox for the bug name and we only get the 
//first 40 characters of that full bug name in case it is very long
//since this is a data transformation for presentation purposes we use a pipe here!

import { Pipe, PipeTransform } from "@angular/core";
import { max } from "rxjs";


@Pipe({
    name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
    transform(value: string, maxLength: number = 40) : string {
        return value.length <= 40 ? value : value.substring(0, maxLength) + '...';
    }
}
/**
 * Here we use a @Pipe decorator to tell Angular that this is going to be 
 * a pipe class! In this manner we can then call the pipe to do the 
 * transformation for us
 * 
 * Now here within Angular what we need to do is implement the PipeTransform
 * interface within the angular core and then we give the type a name
 * by which we can call it within the html file in this manner: | trimText
 * 
 * NOTE: Angular will not be able to know any other method other than the 
 * built in transform() method from the PipeTransform method! Hence we 
 * need to use this template transform() method and use that to write 
 * the logic that we need to get the transformation of the data ready for 
 * presentation on the UI!
 * 
 * Here we also are passing another arg so that we can dynamically change 
 * the truncate character length we want to display in the front end! here
 * = 40 creates a default value if a value is not sent from the UI!
 * 
 * Now in the UI how can we pass another arg to then get it within this pipe?
 *  {{name | trimText:30 :_ :_}}
 * the first arg is before the | and then any other argument is passed after the
 * pipename: !! so here the 30 will be the second arg for the maxLength!!
 * Every other arg then also passed with another : and the arg _ you want
 * 
 */