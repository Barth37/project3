module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if(isAuthenticated()) {
            returnnext();
        }
        req.flash('error_msg', 'Please login to view this resource.');
        req.redirect('/users/login');
    }
}