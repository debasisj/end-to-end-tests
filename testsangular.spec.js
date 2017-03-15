var page = require('./pages/testangular.page.js');
describe('This is a test',function () {
    var testAngPage = new page();
    beforeEach(function(){
        browser.get(browser.params.baseURL);

    });
    it('Title test',function () {
       expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
    });
    it('Second test',function () {
        //element(by.model('yourName')).sendKeys('Deb');
        testAngPage.name.sendKeys('Deb');
        var span2 = element(by.binding('yourName'));
        expect(testAngPage.span.getText()).toEqual('Hello Deb!');

    });
    it('Enter A Task and Validate',function () {
            element(by.model('todoList.todoText')).sendKeys('This is Deb third test');
            element(by.css('[value="add"]')).click();
            var getTheAddedTaskList = element.all(by.repeater('todo in todoList.todos'));
            var newTask = getTheAddedTaskList.get(2);
            expect(newTask.getText()).toEqual('This is Deb third test');
        }
        
        
    );
    });