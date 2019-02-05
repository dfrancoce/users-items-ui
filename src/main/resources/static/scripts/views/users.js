/**
 * Manages all the operations related to the Users View
 *
 * @param usersData with all the users we want to show
 * @constructor
 */
let UsersView = function (usersData, util) {
    this.usersData = usersData;
    this.util = util;
};

/**
 * Initializes the users view events
 */
UsersView.prototype.initEvents = function () {
    const self = this;

    self.util.showUsersSection();
    self.initializeDataTable();
    self.onClickInDataTableRow();
};

/**
 * Initializes the users DataTable and populates it with the
 * users data
 */
UsersView.prototype.initializeDataTable = function () {
    const self = this;

    $("#usersDataTable > tbody").html("");
    const usersDataTable = $('#usersDataTable');

    self.usersData.get().forEach(function (user) {
        usersDataTable.find('tbody:last').append('' +
            '<tr>' +
            '<td>' + user.idUser + '</td>' +
            '<td>' + user.username + '</td>' +
            '</tr>');
    });

    usersDataTable.DataTable();
};

/**
 * Handles the actions when the user clicks a row of the DataTable
 */
UsersView.prototype.onClickInDataTableRow = function () {
    const self = this;
    const usersDataTable = $('#usersDataTable');

    $('#usersDataTable tbody').on('click', 'tr', function () {
        // Gets the data correspondent to the selected row
        const data = usersDataTable.DataTable().row(this).data();
        const selectedUserData = self.usersData.get().find(({username}) => username === data[1]);
        self.util.hideUsersSection();

        $.ajax({
            url: 'http://localhost:8080/TestDevWebService/services/user/' + selectedUserData.username,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                const itemsData = new ItemsData(data);
                const itemsView = new ItemsView(itemsData, self.util);
                itemsView.initEvents();
            }
        });
    })
};