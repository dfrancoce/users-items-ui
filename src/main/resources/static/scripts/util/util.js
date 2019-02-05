/**
 * Utility class
 *
 * @constructor
 */
let Util = function () {};

/**
 * Hides the login section
 */
Util.prototype.hideLoginSection = function () {
    const loginSection = $('section.loginSection');
    loginSection.hide();
};

/**
 * Hides the user section
 */
Util.prototype.hideUsersSection = function () {
    const usersSection = $('section.usersSection');
    usersSection.hide();
};

/**
 * Hides the items section
 */
Util.prototype.hideItemsSection = function () {
    const itemsSection = $('section.itemsSection');
    itemsSection.hide();
};

/**
 * Shows the login section
 */
Util.prototype.showLoginSection = function () {
    const loginSection = $('section.loginSection');
    loginSection.show();
};

/**
 * Shows the user section
 */
Util.prototype.showUsersSection = function () {
    const usersSection = $('section.usersSection');
    usersSection.show();
};

/**
 * Shows the items section
 */
Util.prototype.showItemsSection = function () {
    const itemsSection = $('section.itemsSection');
    itemsSection.show();
};

/**
 * Returns to the login view
 */
Util.prototype.backToLogin = function () {
    const itemsSection = $('section.itemsSection');
    itemsSection.hide();

    const usersSection = $('section.usersSection');
    usersSection.hide();

    const loginSection = $('section.loginSection');
    loginSection.show();
};