/**
 * Created by User on 12/03/2017.
 */
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: './target/screenshots',
    filename: 'test-report.html',
    reportTitle: "Test",
    showSummary: true
});

exports.config={
    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },
    framework: 'jasmine2',
    params:{
        baseURL:'https://angularjs.org/'
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //sauceUser:'debasisjagadev',
    //sauceKey:'c68d4548-a1a1-42cb-a2f1-a68eb27ba837',
    suites:{
        basictest:'testsangular.spec.js',
        othertest:'otherspec.js',
        pagetest:'WithPageObjects.js'
    },

    capabilities: {
        browserName: 'chrome',
        //deviceName:'iPhone 6s Plus Device',
        //platformVersion:'9.3',
        //platformName:'iOS',
        //deviceOrientation:'portrait',
        //name: 'basic tests'
    },
    onPrepare:function () {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(reporter);
    },
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }

};
