const sequelize = require("../models/index");
const init_models = require("../models/init-models");
const model = init_models(sequelize);
const { successCode, failCode, errorCode } = require("../config/reponse");
const getUser = async (req, res) => {
    try {
        let data = await model.node.findAll();
        // res.status(200).send(data);
        // successCode(res,data,"Lấy dữ liệu thành công")
        var dataUsers = data;
        res.render("pages/getUser", {
            dataUsers: dataUsers,
            title: "Get all user",
        });
    } catch (error) {
        res.render("pages/getUser", {
            dataUsers: [],
            title: "Failed",
        });
    }
};
module.exports = { getUser };
