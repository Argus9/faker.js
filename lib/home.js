/**
 * @namespace faker.home
 */
var Home = function (faker) {
    var ibanLib = require("./iban");
    var Helpers = faker.helpers,
        self = this;

    /**
     * type
     *
     * @method faker.home.type
     */
    self.type = function () {

        return Helpers.randomize(faker.definitions.home.type);
    };
};