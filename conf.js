/**
 * Created by User on 12/03/2017.
 */
exports.config={
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites:{
    basictest:'spec.js',
    othertest:'otherspec.js'
    },
    //specs: ['spec.js'],
    capabilities: {
        browserName: 'firefox'
    }
};
