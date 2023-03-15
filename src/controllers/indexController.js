const {validationResult} = require("express-validator");

let colores = ["rojo","azul","verde","blanco","negro"]

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
    }
}