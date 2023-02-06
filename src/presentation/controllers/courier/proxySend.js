const proxyService = require("../../../services/courier")

const proxySend = async (req, res, next) => {
    try {
        await proxyService.proxySend(req.headers, req.body)
        return res.status(200).send({ message: "Im alive!" });
    } catch (error) {
        next(error);
    }
};

module.exports = proxySend;