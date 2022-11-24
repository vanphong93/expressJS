const sequelize = require("../models/index");
const init_models = require("../models/init-models");
const model = init_models(sequelize);
const { successCode, failCode, errorCode } = require("../config/reponse");
const postLike = async (req, res) => {
    try {
        let { user_id, res_id, date_like } = req.body;

        let checkData = await model.like_res.findOne({
            where: { user_id, res_id },
        });
        if (checkData) {
            failCode(res, "", "Bạn đã like rồi");
        } else {
            let data = await model.like_res.create({
                user_id,
                res_id,
                date_like,
            });
            successCode(res, data, "Nhà hàng đã nhận được like");
        }
    } catch (error) {
        errorCode(res, error);
    }
};
const unLike = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;
        let checkData = await model.like_res.findOne({
            where: { user_id, res_id },
        });
        if (checkData) {
            let data = await model.like_res.destroy({
                where: { user_id, res_id },
            });
            successCode(res, data, "UnLike thành công");
        } else {
            failCode(res, "", "người dùng chưa like nhà hàng");
        }
    } catch (error) {
        errorCode(res, error);
    }
};
const listLikeRes = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await model.restaurant.findAll({
            where: { res_id: id },
            include: ["user_id_users"],
        });
        if (data.length > 0) {
            successCode(res, data, "Lấy dữ liệu thành công");
        } else {
            failCode(res, "", "Không có dữ liệu");
        }
    } catch (error) {
        errorCode(res, error);
    }
};
const listLikeUser = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await model.user.findAll({
            where: { user_id: id },
            include: ["res_id_restaurants"],
            attributes: ["full_name", "email"],
        });
        if (data[0].res_id_restaurants.length > 0) {
            successCode(res, data, "Lấy dữ liệu thành công");
        } else {
            failCode(res, "", "Không có dữ liệu");
        }
    } catch (error) {
        errorCode(res, error);
    }
};
const postRate = async (req, res) => {
    try {
        let { user_id, res_id, date_rate, amount } = req.body;

        let checkData = await model.rate_res.findOne({
            where: { user_id, res_id },
        });
        if (checkData) {
            failCode(res, "", "Bạn đã rate rồi");
        } else {
            let data = await model.rate_res.create({
                user_id,
                res_id,
                date_rate,
                amount,
            });
            successCode(res, data, "Nhà hàng đã nhận được rate");
        }
    } catch (error) {
        errorCode(res, error);
    }
};
const deleteRate = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;
        let checkData = await model.rate_res.findOne({
            where: { user_id, res_id },
        });
        if (checkData) {
            let data = await model.rate_res.destroy({
                where: { user_id, res_id },
            });
            successCode(res, data, "Xóa thành công");
        } else {
            failCode(res, "", "người dùng chưa đánh giá nhà hàng");
        }
    } catch (error) {
        errorCode(res, error);
    }
};
const listRateRes = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await model.restaurant.findAll({
            where: { res_id: id },
            include: ["user_id_user_rate_res"],
        });
        if (data[0].user_id_user_rate_res.length > 0) {
            successCode(res, data, "Lấy dữ liệu thành công");
        } else {
            failCode(res, "", "Nhà hàng chưa được đánh giá");
        }
    } catch (error) {
        errorCode(res, "Không có dữ liệu");
    }
};
const listRateUser = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await model.user.findAll({
            where: { user_id: id },
            include: ["res_id_restaurant_rate_res"],
        });
        if (data[0].res_id_restaurant_rate_res.length > 0) {
            successCode(res, data, "Lấy dữ liệu thànhc công");
        } else {
            failCode(res, "", "người dùng chưa có đánh giá nào");
        }
    } catch (error) {
        errorCode(res, "Không có dữ liệu");
    }
};
const editRate = async (req, res) => {
    try {
        let { user_id, res_id, date_rate, amount } = req.body;

        let checkData = await model.rate_res.findOne({
            where: { user_id, res_id },
        });
        if (checkData) {
            let data = await model.rate_res.update(
                {
                    user_id,
                    res_id,
                    date_rate,
                    amount,
                },
                { where: { user_id, res_id } }
            );
            successCode(res, data, "Nhà hàng đã nhận được rate");
        } else {
            failCode(res, "", "Không tìm thấy dữ liệu");
        }
    } catch (error) {
        errorCode(res, error);
    }
};
const newOrder = async (req, res) => {
    try {
        let { user_id, food_id, code, arr_sub_id, amount } = req.body;
        let checkData = await model.order.findOne({
            where: { user_id, food_id },
        });
        if (checkData) {
            failCode(res, "", "Đơn hàng cũ đang được xử lí");
        } else {
            let data = await model.order.create({
                user_id,
                food_id,
                code,
                amount,
                arr_sub_id,
            });
            successCode(res, data, "Nhà hàng đã nhận được order");
        }
    } catch (error) {
        errorCode(res, error);
    }
};
const editOrder = async (req, res) => {
    try {
        let { user_id, food_id, code, arr_sub_id, amount } = req.body;
        let checkData = await model.order.findOne({
            where: { user_id, food_id },
        });
        if (checkData) {
            let data = await model.order.update(
                {
                    user_id,
                    food_id,
                    code,
                    amount,
                    arr_sub_id,
                },
                { where: { user_id, food_id } }
            );
            successCode(res, data, "Nhà hàng đã sửa lại order");
        } else {
            failCode(res, "", "Không tìm thấy dữ liệu");
        }
    } catch (error) {
        errorCode(res, error);
    }
};
const deleteOrder = async (req, res) => {
    try {
        let { user_id, food_id } = req.body;
        let checkData = await model.order.findOne({
            where: { user_id, food_id },
        });
        if (checkData) {
            let data = await model.order.destroy({
                where: { user_id, food_id },
            });
            successCode(res, data, "Xóa thành công");
        } else {
            failCode(res, "", "Không tìm thấy dữ liệu");
        }
    } catch (error) {
        errorCode(res, error);
    }
};
module.exports = {
    postLike,
    unLike,
    listLikeRes,
    listLikeUser,
    deleteRate,
    postRate,
    listRateRes,
    listRateUser,
    editRate,
    newOrder,
    editOrder,
    deleteOrder,
};
