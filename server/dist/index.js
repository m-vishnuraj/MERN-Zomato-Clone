"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const zomato = (0, _express.default)();
const PORT = 4000;
zomato.use(_express.default.json());
zomato.get("/", (req, res) => {
  return res.json({
    message: "Server is running"
  });
});
zomato.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});