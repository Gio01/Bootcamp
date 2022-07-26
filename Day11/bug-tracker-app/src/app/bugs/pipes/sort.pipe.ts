import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sort'
})
export class SortPipe<T, K extends keyof T> implements PipeTransform{
 /**
     * This comparer is needed within the service since this is non UI!!
     * this means that it should not be within the component!! 
     *  
     * Again we are using the Key extends so that we can generically 
     * access the different attributes from the objects and with TS we 
     * need this because otherwise we will get an error saying that 
     * sortby has type any and we only want to sortBy attributes that exist 
     * within the attributes of the bugs! Otherwise TS will throw an error
     * since we might be indexing with some attribute that does not exist
     * within the Bug objects!! (type safety!)
     * 
     * The inside the normal requirement for using the built in Array sort
     * method!
     * We compare two of the elements a and b and then we return a number
     * to indicate which is the greater one, sort() uses that info to then
     * compare n and n+1 and then after that it will compare n+1 and n+2 , etc..
     * if the next is smaller then it will move it to n and move the larger one
     * to n+1 and in this manner we will have a sort! 
     */
    
    // comparer<Bug, Key extends keyof Bug>(a:Bug, b:Bug, sortby: Key, dsc: boolean): number {
    //     if(dsc === false){
    //         if(a[sortby] < b[sortby]){
    //             return -1
    //         }
    //         if(a[sortby] > b[sortby]){
    //             return 1
    //         }
    //     }
    //     //true means that descending was clicked!
    //     if(dsc === true){
    //         if(a[sortby] > b[sortby]){
    //             return -1
    //         }
    //         if(a[sortby] < b[sortby]){
    //             return 1
    //         }
    //     }
    //     return 0
    // }

    // descending: boolean = false;

    // sort(sortby: string, dsc: boolean = this.descending){
       
    //     const sortBugs = this.bugOperations;//we do this to then have acess to the
    //     //comparer function within the service directory
    //     console.log(this.bugs)
    //     console.log(this.descending)
    //     this.bugs.sort((a, b): any => {
    //         if(sortby === 'bugName'){
    //             console.log(sortBugs.comparer(a,b, 'bugName', dsc))
    //            return sortBugs.comparer(a,b, 'bugName', dsc)
    //         }
    //         else if(sortby === 'bugId'){
    //             return sortBugs.comparer(a,b,'bugId', dsc)
    //         }
    //         else if(sortby === 'isClosed'){
    //             return sortBugs.comparer(a,b,'isClosed', dsc)
    //         }
    //         else if(sortby === 'craetedAt'){
    //             return sortBugs.comparer(a,b,'createdAt', dsc)
    //         }
    //     })
    // }
    //this was my initial try where I had the sort in the component and then the
    //comparere in the bug Operation services


    private getComparer(attrName : K, dsc: boolean){
        return function(item1 : T, item2 : T) : number {

            if(dsc === false) {
                if (item1[attrName] < item2[attrName]) return -1;
                if (item1[attrName] > item2[attrName]) return 1;
                // return 0;
            }
            if (dsc === true){
                if (item1[attrName] > item2[attrName]) return -1;
                if (item1[attrName] < item2[attrName]) return 1;
                // return 0;
            }
            return 0;
        }
    }

    transform(list: Array<T>, attrName : K, dsc: boolean) : Array<T> {
        if (!list || !list.length || !attrName ) return list;
       
        let comparer = this.getComparer(attrName, dsc);
        list.sort(comparer);
        //console.log( list.sort(comparer))
        return list;
    }
    /**
     * We are getting the types from the generics at the top of the Pipe
     * file where we declared the class! In this manner we are ensuring 
     * hat the attrName is only attributes that actually exist within our 
     * Bug Objects
     * 
     * the transform method is getting the args from the html page 
     * by doing sort:attrname:dsc!! 
     * 
     * so we can just create the variables such as 
     * (change)="sortDsc = $any($event.target).checked" in the UI and then 
     * have the sortDsc declared in the component! after that we can simply
     * *ngFor="let el of bugs | sort:sortAttr:sortDsc" pass that variable data 
     * into the sort pipe!!
     * 
     * NOTE: in old Angular, that way things works is that when ever there is
     * some user interaction
     * in the UI, Angular will reload all of the templates such as {{el.bugId}}
     * however that also means that whenever something unrelated to the sort()
     * is happening, Angular will re run everything including sort() and this 
     * means that there are performance issues since an unrelated event will
     * cause for sort() to execute again! With a lot of data being used this can
     * really cause the browser to be slow or even cause for the app to not
     * be responding!!
     * 
     * NOTE: In this new Angular, pipes are not reloaded again and again for 
     * unrelated events! 
     * - now what if you wanted the sort() to be called again and again whenever
     * there was any event happnening? You can add another property called pure
     * and tell it false (now this is the same of how the old angular was working
     * so while this works that is not the correct approach as this now will
     * affect the performance of your app!!) (by default it is true)
     * @Pipe({
        name: 'sort',
        pure: false
        })
     *  Ex: inputting some new bug! On each letter you type in since you have
     * (change) on that input box, the sort() will be ran on each letter you type
     * as that is a new change!!!!! :O
     * 
     * so what is the correct appraoch?
     * - If we have pure to be true,
     * What Angular does is check to see if there is a new change within 
     * the the args that we pass into the transform() and the issue right now 
     * is that while it can easily compare the values of attrName and dsc to see
     * if their values have changed from what they were before, to compare the
     * Array<> it will not see if there is a change that we have made since 
     * it can only get a reference to the Array in mem which means that it will
     * see oh there is an array at address 0xCOFFEE and then after some change
     * happens it will once again say oh there is still an array at address
     * 0xCOFFEE so nothing has changed! It is a comparison by refernce and not 
     * a direct comparison like looking at the value of attrName so what we need 
     * to do instead is if we do care about app performance and hence do not 
     * want sort() to be called on every change, we need to create a new array 
     * each time we are adding a new bug into our storage with all of the previously
     * added bugs! In this manner when transform is reevaluated, it will see 
     * that there was a change as there is a new array and not the old one!
     * So it will be like comparing array at 0xCOFFEE and now the new array we 
     * created on each add new bug which is at address 0XBEEF which are not the 
     * same reference location so angular can now see that there are different
     * and now run sort() again as there is a change!
     * Now the downside of this is that while we are able to have better app
     * performance we are needing to use more memory in the browser as we 
     * need to create a new array just to then be able to compare against the 
     * old one! A new array created on each adding of a new bug!
     * 
     * 
     * So now whenever we add a new bug into the list what happens is that 
     * it will automatically call sort() as there is a change in the array!
     */




}