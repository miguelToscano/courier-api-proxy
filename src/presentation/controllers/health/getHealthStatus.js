const getHealthStatus = async (req, res, next) => {
    try {
        return res.status(200).send({ message: "Im alive!" });
    } catch (error) {
        next(error);
    }
};

module.exports = getHealthStatus;