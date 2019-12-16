const express = require('express')
const expressSession = require('express-session')
const passport = require('passport')
const app = express() 

app.use(express.json())
app.use('/', express.static('public'))
app.use(expressSession({secret : 'PI 2019'}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(serializeUser)
passport.deserializeUser(deserializeUser)

app.post('/login', login)
app.post('/logout', logout)
app.use('/auth', checkAuthentication)
app.get('/auth/home', homeAuthenticated)
app.get('/home', homeNotAuthenticated)

app.listen(8080, ()=>console.log('Listening'))

function homeAuthenticated(req, res){
    res.send("Hello " + req.user)
}

function homeNotAuthenticated(req, res){
    res.send("Hello Unknown")
}

function login(req, res){
    console.log(req.body)
    if(validateUser(req.body.user, req.body.password)){
        req.login(req.body.user, (err)=>{
            console.log("login callback")
            res.json({message : "login called"})
        })
        return
    }
    res.json({message : "Not a valid User"})

    function validateUser(){
        return true
    }
}

function logout(req, res){
    console.log("logout called")
    req.logout()
    res.json({message : "Logout called"})
}

function serializeUser(user, done){
    console.log("serializeUser")
    done(null, user)
}

function deserializeUser(user, done){
    console.log("deserializeUser")
    done(null, user)
}

function checkAuthentication(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.status(403).json({message : "Not authenticated"})
}


