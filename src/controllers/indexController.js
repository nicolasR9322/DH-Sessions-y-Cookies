const {validationResult} = require("express-validator");

let colores = ["rojo","azul","verde","blanco","negro"];



module.exports = {
    index: (req,res) => {
        res.render("index", {
            colores,
            session:req.session
        })
    },
    stored: (req,res) => {
        let errors = validationResult(req)

       

        
        

        if(errors.isEmpty()){
            const {name,color,email,age,checkbox} = req.body
            
            req.session.user = {
                name,
                color,
                email,
                age,
                checkbox
            }
            
            res.locals.user = req.session.user

             if(checkbox){
                res.cookie("color", req.session.user,{
                    maxAge: 1000*60
                })
            }
            
    
            return res.render("index", {
                name,color,email,age,colores,
                session:req.session
            })
        } else {
           return res.render("index",{
                errors :errors.mapped(),
                old: req.body,
                colores
            })
        }
    },
    welcome: (req,res) => {
        if(req.session.user != undefined){
            res.render("welcome",{
                session:req.session
            })

        } else {
            res.send("completa el formulario")
        }
        
        
    },
    login: (req,res) => {
        if(req.session.user != undefined){

            res.render("login",{
                session:req.session
            })
        } else {
            res.send("completa el formulario")
        }

    },
    destroy: (req,res) => {
        req.session.destroy();
        res.cookie("color",null,{maxAge:-1});
        res.redirect("/");
    }
}