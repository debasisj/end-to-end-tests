/**
 * Created by User on 12/03/2017.
 */
exports.config={
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //sauceUser:'debasisjagadev',
    //sauceKey:'c68d4548-a1a1-42cb-a2f1-a68eb27ba',
    suites:{
    //basictest:'spec.js',
    //othertest:'otherspec.js',
        pagetest:'WithPageObjects.js'
    },

    capabilities: {
        browserName: 'chrome'
    }
    //,
    //{
      //  browserName: 'chrome'
    //}

};
