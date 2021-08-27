"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var multer_1 = __importDefault(require("multer"));
dotenv_1.default.load;
var app = express_1.default();
console.log("clicked");
app.use(body_parser_1.default.urlencoded({
    extended: false
}));
app.use('/images', express_1.default.static(path_1.default.join(__dirname, 'src', 'images')));
var fileStorage = multer_1.default.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'src/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + new Date().toISOString());
    }
});
var filter = function (req, file, cb) {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
app.use(multer_1.default({
    storage: fileStorage,
    fileFilter: filter
}).single('image'));
app.use(function (error, req, res, next) {
    var status = error.statusCode || 500;
    var meesage = error.message;
    res.status(status).json({
        message: meesage
    });
});
app.use(function (error, req, res, next) {
    var status = error.statusCode || 500;
    var meesage = error.message;
    res.status(status).json({
        message: meesage
    });
});
app.get("/", function (req, res) {
    res.send("Api is connected");
});
app.listen(process.env.PORT, function () {
    // initDb((callback:any) => {
    //     console.log(callback);
    // })
    console.log("Server is connected!!");
});
