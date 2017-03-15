/**
 * Created by User on 12/03/2017.
 */
var pageHome = require('./pages/withpageobj.page.js');
var testString = 'test'
    describe('test with page objects',function () {
        it('Should get the name used with hello',function () {
            var page = new pageHome();
            page.get();
            page.setName(testString);
            expect(page.getGreeting()).toEqual('Hello '+testString+'!');
        })
    });
