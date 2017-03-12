/**
 * Created by User on 12/03/2017.
 */
describe('Protractor Demo App', function() {
    var firstNumber =  element(by.model('first'));
    var secondNumber =  element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var result = element(by.binding('latest'));
    function add(a,b){
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    beforeEach(function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
    })
    it('should have a title', function() {
       expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('Add test',function () {
        add(1,2);
        expect(result.getText()).toEqual('3')
    });
});