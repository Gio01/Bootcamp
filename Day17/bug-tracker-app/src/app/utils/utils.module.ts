import { NgModule } from "@angular/core";
import { CreatedAtPipe } from "./pipes/createdat.pipe";
import { SortPipe } from "./pipes/sort.pipe";
import { TrimTextPipe } from "./pipes/trimText.pipe";

@NgModule({
    declarations:[
        CreatedAtPipe,
        SortPipe,
        TrimTextPipe
    ],
    imports: [],
    providers: [],
    bootstrap: [],
    exports: [
        CreatedAtPipe,
        SortPipe,
        TrimTextPipe
    ]
})
export class UtilsModule{

}

/**
 * Here we are creating a utils module to group in the generic pipes that 
 * can take in generic things. Ex: these can take in any object and not 
 * just things that are realated to the Bugs case we are using rn
 * 
 * 
 * Now the reason we also have to include the exports with the same pipes 
 * is that by default the utils will not be accessible within the rest 
 * of the application as they are all considered to be private entities!
 * Hence we need to tell Angular that we want to export these pipes so that 
 * the rest of the app can have access to them!
 * 
 * 
 * Now within the app.module.ts file we need to delete the individual
 * pipe names and just add in UtilsModule as that will contain all of the
 * individual pipes we want!
 * NOTE: modules are added in the imports[] within the app.modile.ts and not
 * in the declarations as we had the individual pipes before! 
 */