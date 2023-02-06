const axios = require("axios")

const COURIER_API = "https://api.courier.com"

const proxySend = async (headers, body) => {
    try {
        console.log(body)
        await axios({
            method: "POST",
            url: `${COURIER_API}/send`,
            data: {
                ...body
            },
            headers: {
                "Authorization": headers.authorization,
                "Idempotency-key": headers["idempotency-key"]
            }
        })
    } catch(error) {
        console.log(error)
        throw error
    }
}

module.exports = {
    proxySend
}