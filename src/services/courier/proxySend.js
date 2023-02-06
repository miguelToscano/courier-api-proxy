const courier = require("../../infrastructure/courier")

const proxySend = async (headers, body) => {
    try {
        console.log(headers)
        console.log(body)
        await courier.proxySend(headers, body)
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = proxySend