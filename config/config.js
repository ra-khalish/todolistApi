module.exports = {
    //ubah DB yang sudah di bold dengan host mongodb masing-masing
    DB: process.env.HOST ?
        process.env.HOST :
        "mongodb+srv://admin:semogaakudiberikemudahan@sandbox-workshop-9ynur.mongodb.net/learnit-react",
    APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 80
};