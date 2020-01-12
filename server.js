const bodyParser = require('body-parser'),
    express = require('express')
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    nodemailer = require('nodemailer'),
    mongoose = require('mongoose'),
    ejs = require('ejs'),
    app = express();

const User = require('./models/user');
const Announcement = require('./models/announcement');
const Interviewee = require('./models/interviewee');


const interviewRoutes = require('./routes/interviewRoutes');

// TODO add multipart parser - for posting blog files
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use(require("express-session")({
    secret: "Robo1",
    resave: false,
    saveUninitialized: false,
}));

//app.use('/interview',interviewRoutes);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.set('view engine', 'ejs');


// TODO choose mongo url from config - check if local or online required
mongoose.connect("mongodb://localhost:27017/robo", {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
});


/*mongoose.connect("mongodb+srv://chandan:abcd@nodetest-2hyk0.mongodb.net/test?retryWrites=true&w=majority" , {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
});*/


var transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: 'apikey',
        pass: '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'
    }
});

var db = mongoose.connection;

db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded:server");
})
// For session



app.get('/', function (req, res) {
    res.render('index');
});


app.get('/login', function (req, res) {
    res.render('login');
});
app.post('/login', passport.authenticate("local", { failureRedirect: "/login" }), function (req, res) {
    res.redirect('/dashboard');
});

app.get('/dashboard', isloggedin, function (req, res) {
    res.render('dashboard', { req });
});

app.get('/register', function (req, res) {
    res.render('register');
});
app.post('/register', function (req, res) {

    User.register(new User({ "name": req.body.name, "username": req.body.username, "email": req.body.email }), req.body.password, function (err, user) {
        if (!err) {
            passport.authenticate("local")(req, res, function () {
                res.redirect('/dashboard');
            });
        }
        else {
            res.render('error', { err });
        }
    });
});


app.get('/makeannouncements', isloggedin, function (req, res) {
    res.render('makeannouncements');
});

app.post('/makeannouncement', isloggedin, function (req, res) {

    if (req.body.to) {

        User.find({ year: { $in: req.body.to } }).toArray(users, function (err, users) {

            var mailOptions = {
                from: 'robosocnith@gmail.com',
                to: email,
                html: "<h1>Hiiii</h1>",
                subject: 'Announcement RoboSoc' + req.user.name,
            };
        });
    }
    else {
        var announcement = new Announcement({
            heading: req.body.heading,
            content: req.body.content,
            made_by: req.user.username
        });
        announcement.save(function (err) {
            if (err)
                res.render('error', { err });
            else
                res.render('announcement');
        });
    }
});

app.get('view', function (req, res) {
    res.render('view');
});
//app.post('/view',function(req,res){
//	User.findOne({"email":req.body.email},function(err,user)

app.get('/makeblog', function (req, res) {
    if (!req.user) {
        res.render('unauthorized');
    }
    else
        res.render('makeblog', { req });
});

app.get('/blogs', function (req, res) {
    res.render('blogs');
});

app.get('/current_members', function (req, res) {
    res.render('current_members');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/gallery', function (req, res) {
    res.render('gallery');
});

app.get('/resources', function (req, res) {
    res.render('under_construction');
});

app.get('/sponsors', function (req, res) {
    res.render('under_construction');
});

app.get('/achievements', function (req, res) {
    res.render('achievements');
});

function isloggedin(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        console.log(req.user);
        res.render('unauthorized');
    }
}

app.use('/api', require('./routes/api'));



app.use(function(req, res){
    res.redirect('/notfound.html');
})
app.listen(3000, function (err) {
    if (!err)
        console.log("Serving on port", 3000);
});
