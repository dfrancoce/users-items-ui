$(document).ready(function() {
    const util = new Util();
    util.hideUsersSection();
    util.hideItemsSection();

    $('#loginForm').submit(function(e) {
        // prevent default functionality
        e.preventDefault();

        $.ajax({
            url: 'http://localhost:9080/user/login',
            type: 'post',
            dataType: 'json',
            data: $("#loginForm").serialize(),
            success: function(data) {
                if (data.length > 0) {
                    util.hideLoginSection();
                    const usersData = new UsersData(data);
                    const usersView = new UsersView(usersData, util);
                    usersView.initEvents();
                }
            }
        });
    });

    $('.backToLoginButton').click(function(e) {
        util.backToLogin();
        location.reload();
    });
});