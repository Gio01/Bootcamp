import { GreeterService } from "./greeter.service";
import { DatetimeService } from './datetime.service';
import { TestBed } from "@angular/core/testing";

describe('Greeter Service', () => {
  let greeterService : GreeterService;
  let datetimeService : DatetimeService;
  
  
  beforeEach(() => {

    TestBed.configureTestingModule({
        providers: [
            GreeterService,
            DatetimeService
        ]
    })
    datetimeService = TestBed.inject(DatetimeService) //instead of creating a new instance
    //with datetimeService = new DatetimeService(); The inject will create that instance for us
    greeterService = TestBed.inject(GreeterService)

    /**
     * This testBed is like a container where we are going to add in the certain modules
     * that we want to test, or those modules that have dependencies on some others so 
     * that we can have them together and can test using them.
     * 
     * You just need to ensure that in the module that needs the dependency we add that
     * depenency via calling it in the constructor of that module! SO in this ex: we are
     * adding the DatetimeService in the constructor of the GreeterService! 
     * 
     * In doing so we are now able to call the datetimeService from within the 
     * greet() method in the greetService and be able to have jasmine's spyOn() to 
     * hijack that getCurrent method and return our wanted testing value which we pass 
     * in the returnValue() method!!
     * 
     * So here we are combining the TestBed container from Angular with the spyOn() from 
     * jasmine to containerize the testing for those classes that have dependencies!! 
     * In this manner we can isolate the Greeter from the rest of the app with the 
     * needed dependency where we hijack the method to test that functionality 
     * of the greet method!! Testing purposes!!
     */
  });

  it('should greet the user with Good Morning when greeted before 12', () => {
    //Arrange
    const morningDate = new Date(2022,7,4,9,0,0);
    spyOn(datetimeService, 'getCurrent').and.returnValue(morningDate)
    
    const userName = 'Magesh',
      expectedResult = 'Hi Magesh, Good Morning!'

    //Act
    const actualResult : string = greeterService.greet(userName);

    //Assert
    expect(actualResult).toBe(expectedResult);
  });

  it('should greet the user with Good Afternoon when greeted after 12', () => {
    //Arrange
    const afternoonDate = new Date(2022,7,4,13,0,0);
    spyOn(datetimeService, 'getCurrent').and.returnValue(afternoonDate)
    /**
     * So here what we are doing is that we are creating a fake method by which 
     * we are going to return a hardcoded afternoonDate! This is because in unit 
     * testing we need to test in isolation so here we are testing the greeterService 
     * in isolation by using jasmines' spyOn which will allow us to redirect the 
     * getCurrent() from the datetimeService to be that of the getCurrent from the 
     * spyOn where the return value we are using is that of afternoonDate!!!
     * So basically we are using fake data in the form of the dependency class that 
     * that the greet service will normally call so that we can test to see if there
     * is an issue within the Greeter service in itself!!! 
     */
    
    const userName = 'Magesh',
      expectedResult = 'Hi Magesh, Good Afternoon!'

    //Act
    const actualResult : string = greeterService.greet(userName);

    //Assert
    expect(actualResult).toBe(expectedResult);
  })
})

//We will see why this below manner is actually also beneficial! 
/* 
import { TestBed } from '@angular/core/testing';
import { GreeterService } from './greeter.service';
describe('GreeterService', () => {
  let service: GreeterService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreeterService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 */