/**
 * Created by User on 16/03/2017.
 */
module.exports  = function () {
    var inputName = element(by.model('yourName'));
    var greetingsName = element(by.binding('yourName'));

    this.get = function () {
        browser.get(browser.params.baseURL);
    };

    this.setName = function (name) {
        inputName.sendKeys(name);
    };

    this.getGreeting = function () {
        return greetingsName.getText();
    }
}