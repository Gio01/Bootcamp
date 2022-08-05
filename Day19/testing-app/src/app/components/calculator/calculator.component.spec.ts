import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { CalculatorComponent } from "./calculator.component"

describe('CalculatorComponent', () => {
    let component: CalculatorComponent;
    let fixture: ComponentFixture<CalculatorComponent>;

    beforeEach(async ()=> {
        await TestBed.configureTestingModule({
            declarations: [ CalculatorComponent ],
            imports: [
                FormsModule
            ]
        }) 
        .compileComponents();//compileComponents tells Angular to compile the declared components.

        fixture = TestBed.createComponent(CalculatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        /**
         * Wrapping the callback function of a test or the first argument of beforeEach
         * with async allows Angular to perform asynchronous compilation and wait until
         * the content inside of the async block to be ready before continuing.
         */
    })

    it('should create the component instance', () => {
        expect(component).toBeTruthy();
    })

    it('should ad the given numbers and display the result', () => {
        const nativeElement = fixture.nativeElement;

        //locate the txtN1 textbox in the UI
        const txtN1 = nativeElement.querySelector('#txtN1')

        
        //assign the value to the txtN1 textbox
        txtN1.value = 100
        txtN1.dispatchEvent(new Event('input')); //we need to create an event to 
        //simualte that the user has made in input in to the textbox
        
        //expect(component.n1).toBe(100);

        //locate the txtN2 textbox
        const txtN2 = nativeElement.querySelector('#txtN2')


        //assign the value to the txtN2 textbox
        txtN2.value = 200
        txtN2.dispatchEvent(new Event('input'));//we need to create an event to 
        //simualte that the user has made in input in to the textbox

        //expect(component.n2).toBe(200);

        //locate the button btnAdd
        const btnAdd = nativeElement.querySelector('#btnAdd');
        btnAdd.dispatchEvent(new Event('click'));

        //expect(component.result).toBe(300)

        fixture.detectChanges();//this will tell angular to look at all of the changes
        //that have been done within the fixture! 

        const divResult = nativeElement.querySelector('#divResult')
        expect(divResult.textContent).toBe('300')
    
    })
})