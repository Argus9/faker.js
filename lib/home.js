/**
 * @namespace faker.home
 */
var Home = function(faker) {
  var ibanLib = require("./iban");
  var Helpers = faker.helpers,
    self = this;

  /**
   * Home type
   *
   * @method faker.home.type
   */
  self.type = function() {
    return Helpers.randomize(faker.definitions.home.type);
  };

  /**
   * Room
   *
   * @method faker.home.room
   */
  self.room = function() {
    return Helpers.randomize(faker.definitions.home.room);
  };

  /**
   * Storage location
   *
   * @method faker.home.storageLocation
   * @param {string} room
   */
  self.storageLocation = function(room) {
    room = room || "";
    var storageLocations;
    var rooms = faker.definitions.home.storage_location;
    if (room in rooms) {
      storageLocations = rooms[room];
    } else {
      storageLocations = faker.random.arrayElement(rooms);
    }

    return Helpers.randomize(storageLocations);
  };
};
