/**
 * Holds the users data
 *
 * @param data Data retrieved from the API
 * @constructor
 */
let UsersData = function (data) {
    this.data = data;
};

/**
 * Returns the data field
 * @returns {*}
 */
UsersData.prototype.get = function () {
    return this.data;
};

/**
 * Holds the items data
 *
 * @param data Data retrieved from the API
 * @constructor
 */
let ItemsData = function (data) {
    this.data = data;
};

/**
 * Returns the data field
 * @returns {*}
 */
ItemsData.prototype.get = function () {
    return this.data;
};