const fs = require("fs");
const path = require("path");

module.exports = {
    readJson: (json) => {
        return JSON.parse(fs.readFileSync((path.join(__dirname,json)),"utf-8"));
    },
}