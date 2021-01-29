const bcrypt = require('bcrypt');

class Router{

    constructor(app, db){
        this.login(app, db);
        this.logout(app, db);
        this.isLoggedIn(app, db);
    }

    login(app, db){

        app.post('/login', (req, res)=> {

            let username = req.body.username;
            let password = req.body.password;

            username = username.toLowerCase(); // you have to dicide which type of user name you want capital or small letters

            if(username.length>20 || password.length>20){ //dicide password length for user
                res.json({
                    success: false,
                    msg: 'An error occured, please try again'
                })
                return;
            }

            // pass the query to the database for searching the user

            let cols = [username]; //if you want to use studentid or anything according to the database do change here 
            db.query('SELECT * FROM user WHERE username = ? LIMIT 1', cols, (err, data, fields)=>{
                        // this is the sql qury which will run in db for serching details
                if (err){
                    res.json({
                        success: false,
                        msg: 'An error occured, please try again'
                    })
                    return;
                }

                //find 1 user with this name & password

                if (data && data.length ===1){

                    dcrypt.compare(password, data[0].password, (bcryptErr, verified)=> {

                        if (verified) {

                            req.session.userId = data[0].id;

                            res.jason({
                                success: true,
                                username: data[0].username
                            })

                            return;
                        }

                        else {
                            res.json({
                                success: false,
                                msg: 'Invalid Password'
                            })
                        }
                    });

                }

                else{
                    res.jason({
                        success: false,
                        msg: 'User not found Please try again'
                    })
                }


             });
        });

    }

    logout(app, db){ // logout icon at the end 

        app.post('/logout', (req, res)=>{

            if (req.session.userId){

                req.session.destroy();
                res.jason({
                    success: true
                })

                return true;
            }

            else{
                res.jason({
                    success: false
                })

                return false;
            }
        })

    }

    isLoggedIn(app, db){

        app.post('/logout', (req, res)=>{

            if (req.session.userId){

                let cols = [res.session.userId];
                db.query('SELECT * FROM user WHERE id =? LIMIT 1', cols,(err, data, fields)=>{

                    if (data && data.length === 1){

                        res.jason({

                            success: true,
                            username: data[0].username
                        })

                        return true;
                    }

                    else {
                        res.jason({
                            success: false
                        })
                    }
                })

            }

            else{
                res.jason({
                    success: false
                })
            }
        });

    }

}

module.exports = Router;