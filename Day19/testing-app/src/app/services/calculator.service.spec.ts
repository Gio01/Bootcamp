import { CalculatorService } from "./calculator.service";

describe('Calculator Service', () => {
    let calculatorService: CalculatorService;

    beforeEach(() => {
        //before each test call the Calculator service to get the functions!
        calculatorService = new CalculatorService();
    })

    describe('When adding numbers', () => {
        it('should return the sum of the given numbers', () => {
            //Arrange
            const n1 = 100;
            const n2 = 200;
            const expectedResult = 300;

            //Act
            const actualResult = calculatorService.add(n1, n2)

            //Assert
            expect(actualResult).toBe(expectedResult)
        })
    })

    describe('When dividing numbers', () => {
        it('should return the result if the divisor is a non zero value', () => {
            //Arrange 
            const n1 = 100;
            const n2 = 5;
            const expectedResult = 20;

            //Act
            const actualResult = calculatorService.divide(n1, n2)

            //Assert
            expect(actualResult).toBe(expectedResult)
        })

        it('it should throw an error if the diviser is zero', () => {
            //Arrange 
            const n1 = 100;
            const n2 = 0;

            //Act
            const divideOperation = () => calculatorService.divide(n1, n2)

            //Assert
            expect(divideOperation).toThrowError();
        })
    })
})