
const sequelize = require("../models/index");
const init_models=require("../models/init-models");
const model = init_models(sequelize);
const {successCode,failCode,errorCode}=require("../config/reponse");
const getUser =async (req, res) => {
    try {
        let data=await model.user.findAll();
        // res.status(200).send(data);
        successCode(res,data,"Lấy dữ liệu thành công")
    } catch (error) {
        // res.send("error");
        failCode(res,data,"Failed")
    }
};
module.exports = {getUser}