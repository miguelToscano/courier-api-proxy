const healthControllers = require("../controllers/health")
const courierControllers = require("../controllers/courier")

const bind = (app) => {
    app.get("/health", healthControllers.getHealthStatus)
    app.post("/send", courierControllers.proxySend)
    // app.get("/urls/schema", urlControllers.getUrlSchema);
    // app.post("/urls/schema", urlControllers.setUrlSchema);
    // app.post('/urls/parse', urlControllers.parseUrl);
};

module.exports = {
    bind,
};