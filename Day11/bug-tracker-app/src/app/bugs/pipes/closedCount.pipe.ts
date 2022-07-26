import { Pipe, PipeTransform } from "@angular/core";
import { Bug } from "../models/bug-type-object";

@Pipe({
    name: 'closedCount',

})
export class ClosedCountPipe implements PipeTransform{

    transform(bugs: Array<Bug>): number {
        console.log('closedCount Pipe called with array: ', bugs)
        return bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
    }
    
    /**
     * The reason why we are using a pipe here is that what we are doing
     * is changing some transformation of data simply for presentation purposes!!
     * the reason we use pipes in general is to do some logic for the purposes
     * of transforming data in some manner and present it.
     * 
     * So here we are transformig the existing data of bugs and then using that 
     * to get some data that we want to then be able to present that 
     * transformation! ANYTHING that is data transformation is that of the
     * pipe! 
     */
}