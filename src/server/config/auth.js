module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash('error_msg', 'Please log in to view that resource'); //הודעת פלאש זמינה בין שתי בקשות של אותו הלקוח. הלקוח יקבל את ההודעה רק לאחר שליחת ההודעה הבאה
    res.redirect('/users/login');
  },
  forwardAuthenticated: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect('/dashboard');      
  }
};