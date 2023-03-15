const {check} = require("express-validator")

module.exports = [
    check("name")
        .notEmpty().withMessage("debe ingresar un nombre"),

    check("color")
    .notEmpty().withMessage("debe ingresar color"),

    check("email")
        .notEmpty().withMessage("debe ingresar un email"),

    check("color")
        .notEmpty().withMessage("debes seleccionar una categoria"),
    

    check("age")
     .notEmpty().withMessage("debe ingresar una edad").bail()
     .isInt().withMessage("debe ingresar un numero")
        
]
