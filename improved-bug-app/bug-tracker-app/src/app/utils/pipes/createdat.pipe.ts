import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment';

@Pipe({
    name: 'createdAt'
})
export class CreatedAtPipe implements PipeTransform{

    transform(date: Date) {
        return moment(date).fromNow();
    }
}