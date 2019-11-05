/**
 * Created by User on 12/03/2017.
 */
describe('cafetownsend  App', function() {
    var name =  element(by.model('user.name'));
    var pwd =  element(by.model('user.password'));
    var loginButton = element(by.cssContainingText('.main-button', 'Login'))
    var loginRes = element(by.id('greetings'));
    
    function login(a,b){
        name.sendKeys(a);
        pwd.sendKeys(b);
        loginButton.click();
    }

    beforeEach(function () {
        browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');
    })
    it('should have a title', function() {
       expect(browser.getTitle()).toEqual('CafeTownsend-AngularJS-Rails');
    });

    it('Login test',function () {
        login('Luke','Skywalker');
        expect(loginRes.getText()).toEqual('Hello Luke');

        //expect(loginRes.getText().toEqual('Hello Luke'))
    });

    it('select each employee test',function () {
        login('Luke','Skywalker');
        expect(loginRes.getText()).toEqual('Hello Luke');
        $$('#employee-list li').each(function(element, index) {
            //console.log(element.getText());
            // Will print 0 First, 1 Second, 2 Third.
            element.getText().then(function (text) {
              console.log(index, text);

            });
          });
    });

    it('select and click employee test',function () {
        login('Luke','Skywalker');
        expect(loginRes.getText()).toEqual('Hello Luke');
        $$('#employee-list li').filter(function(elem, index) {
            return elem.getText().then(function(text) {
              return text === 'edit123 last1';
            });
          }).first().click();
          browser.sleep(5000);
    });

    it('select and edit employee test',function () {
        login('Luke','Skywalker');
        expect(loginRes.getText()).toEqual('Hello Luke');
        $$('#employee-list li').filter(function(elem, index) {
            return elem.getText().then(function(text) {
              return text === 'edit123 last1';
            });
          }).first().click();
          $$('#bEdit').click();
          browser.sleep(5000);
    });
});