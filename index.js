"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BookCard = function BookCard(_ref) {
  var book = _ref.book;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-screen md:w-auto md:flex-none w-auto sm:w-1/6 md:w-1/6 p-4 pt-0 mb-2 "
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: " shadow p-2 bg-gray-900 rounded-lg hover:bg-pink-600"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: book.attributes.url,
    title: book.attributes.name,
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "m-auto w-screen md:w-auto",
    src: book.attributes.image_path,
    alt: book.attributes.name
  }))));
};

BookCard.propTypes = {
  book: _propTypes["default"].shape({
    attributes: _propTypes["default"].shape({
      url: _propTypes["default"].string.isRequired,
      name: _propTypes["default"].string.isRequired,
      image_path: _propTypes["default"].string
    })
  }).isRequired
};
var _default = BookCard;
exports["default"] = _default;
