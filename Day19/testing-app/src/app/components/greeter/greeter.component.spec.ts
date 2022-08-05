import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { DatetimeService } from "src/app/services/datetime.service";
import { GreeterService } from "src/app/services/greeter.service";
import { GreeterComponent } from "./greeter.component"


describe('GreeterComponent', () => {
    let component: GreeterComponent;
    let fixture: ComponentFixture<GreeterComponent>;
    let greeterService: GreeterService; //needs the datetimeService.getCurrent()
    let datetimeService: DatetimeService;

    beforeEach(async ()=> {
        await TestBed.configureTestingModule({
            declarations: [ GreeterComponent ],
            imports: [
                FormsModule
            ],
            providers: [
                GreeterService,
                DatetimeService,
                FormsModule
            ]
        }) 
        .compileComponents();//compileComponents tells Angular to compile the declared components.

        greeterService = TestBed.inject(GreeterService)//creates the instance of the greeter service
        datetimeService = TestBed.inject(DatetimeService) //here in the constructure the 
        //datetimservice has the greeterservice within the constructor so the dependency is made there

        //greertercomponent -> calls gretterService -> calls datetimeService

        fixture = TestBed.createComponent(GreeterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        /**
         * Wrapping the callback function of a test or the first argument of beforeEach
         * with async allows Angular to perform asynchronous compilation and wait until
         * the content inside of the async block to be ready before continuing.
         */
    })

    it('should create the Greeter Component instance', () => {
        expect(component).toBeTruthy();
    })

    it('should greet the user in the UI', () => {
        const afternoonDate = new Date(2022, 2, 27, 9, 0, 0);
        spyOn(datetimeService, 'getCurrent').and.returnValue(afternoonDate)

        //expectedResult = 'Hi Gio, Good Afternoon!' need to test this in the UI
        const nativeElement = fixture.nativeElement;


        const username = nativeElement.querySelector('#username')
        username.value = 'Gio'
        username.dispatchEvent(new Event('input'));


        const btnAdd = nativeElement.querySelector('#clickButton');
        btnAdd.dispatchEvent(new Event('click'));
       

        fixture.detectChanges();

        const messageDiv = nativeElement.querySelector('#message')
        expect(messageDiv.textContent).toBe('Hi Gio, Good Morning!')

    })
})