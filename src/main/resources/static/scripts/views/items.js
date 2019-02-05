/**
 * Manages all the operations related to the users's items view
 *
 * @param itemsData with all the items we want to show for the user selected
 * @constructor
 */
let ItemsView = function (itemsData, util) {
    this.itemsData = itemsData;
    this.util = util;
};

/**
 * Initializes the items view events
 */
ItemsView.prototype.initEvents = function () {
    const self = this;

    self.util.showItemsSection();
    self.initializeDataTable();
};

/**
 * Initializes the items DataTable and populates it with the
 * user items data
 */
ItemsView.prototype.initializeDataTable = function () {
    const self = this;

    $("#itemsDataTable > tbody").html("");
    const itemsDataTable = $('#itemsDataTable');

    self.itemsData.get().items.forEach(function (item) {
        itemsDataTable.find('tbody:last').append('' +
            '<tr>' +
            '<td>' + item.name + '</td>' +
            '<td>' + item.game + '</td>' +
            '<td>' + item.expirationDate + '</td>' +
            '<td>' + item.quantity + '</td>' +
            '</tr>');
    });

    itemsDataTable.DataTable();
};