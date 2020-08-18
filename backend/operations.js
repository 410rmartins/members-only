app.post('/login', (req, res) => {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        })
}
);

app.post("/log-out", (req, res) => {
    req.logout();
    res.redirect("/");
});