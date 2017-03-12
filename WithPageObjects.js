/**
 * Created by User on 12/03/2017.
 */
var HomePageObjects = function () {
    var inputName =  element(by.model('yourName'));
    var greetingsName =  element(by.binding('yourName'));

    this.get = function () {
        browser.get("https://angularjs.org/");
    };

    this.setName = function (name) {
        inputName.sendKeys('world')
    };
    
    this.getGreeting = function () {
        return greetingsName.getText();
    }

    describe('test with page objects',function () {
        it('Should get the name used with hello',function () {
            var page = new HomePageObjects();
            page.get();
            page.setName('test');
            expect(page.getGreeting()).toEqual('Hello test!');
        })


    });
}