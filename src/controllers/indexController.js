const {validationResult} = require("express-validator");

let colores = ["rojo","azul","verde","blanco","negro"];



module.exports = {
    index: (req,res) => {
        res.render("index", {
            colores
        })
    },
    stored: (req,res) => {
        let {name,color,email,age} = req.body

        let errors = validationResult(req)

        

        if(errors.isEmpty()){
            req.session.user = {
                name,
                color
            }
            return res.render("index", {
                name,color,email,age,colores
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
        
        let user = req.session.user

        res.render("welcome",{
            user
        })
        
    }
}