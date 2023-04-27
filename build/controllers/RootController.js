"use strict";
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoute = function (req, res) {
        if (req.session && req.session.loggedIn) {
            res.send("\n          <div>\n          <div>You are loggedin </div>\n          <a href=\"logout\">Logout</a>\n          <div>");
        }
        else {
            res.send("\n          <div>\n          <div>You are not logged in </div>\n          <a href=\"/login\">Login</a>\n          ");
        }
    };
    return RootController;
}());
