/**
 * Created by User on 16/03/2017.
 */
module.exports = function () {
    this.name = element(by.model('yourName'));
    this.span = element(by.binding('yourName'));
}