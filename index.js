"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SimpleImageGridItem = _interopRequireDefault(require("./SimpleImageGridItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SimpleImageGrid = function SimpleImageGrid(_ref) {
  var items = _ref.items,
      header = _ref.header;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "-ml-4 -mr-4 -mb-4 p-4 bg-gray-500 border-t "
  }, header.isEnabled && /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-black "
  }, header.title), /*#__PURE__*/_react["default"].createElement("a", {
    href: header.link.url,
    className: " text-sm mt-2 text-black hover:text-white hover:no-underline"
  }, header.link.text)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mx-auto px-4 pb-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "no-flex flex justify-center flex-wrap"
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_SimpleImageGridItem["default"], {
      item: item,
      key: index
    });
  }))));
};

SimpleImageGrid.propTypes = {
  items: _propTypes["default"].array.isRequired,
  header: _propTypes["default"].shape({
    isEnabled: _propTypes["default"].bool.isRequired,
    title: _propTypes["default"].string,
    link: _propTypes["default"].shape({
      url: _propTypes["default"].string,
      text: _propTypes["default"].string
    })
  }).isRequired
};
var _default = SimpleImageGrid;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SimpleImageGridItem = function SimpleImageGridItem(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-screen md:w-auto md:flex-none w-auto sm:w-1/6 md:w-1/6 p-4 pt-0 mb-2 "
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: " shadow p-2 bg-gray-900 rounded-lg hover:bg-pink-600"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: item.link.url,
    title: item.link.title,
    target: item.link.target
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "m-auto w-screen md:w-auto",
    src: item.image.url,
    alt: item.image.alt
  }))));
};

SimpleImageGridItem.propTypes = {
  item: _propTypes["default"].shape({
    link: _propTypes["default"].shape({
      title: _propTypes["default"].string.isRequired,
      target: _propTypes["default"].string,
      url: _propTypes["default"].string.isRequired
    }).isRequired,
    image: _propTypes["default"].shape({
      title: _propTypes["default"].string.isRequired,
      alt: _propTypes["default"].string,
      url: _propTypes["default"].string.isRequired
    }).isRequired
  }).isRequired
};
var _default = SimpleImageGridItem;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SimpleImageGridItem", {
  enumerable: true,
  get: function get() {
    return _SimpleImageGridItem["default"];
  }
});
Object.defineProperty(exports, "SimpleImageGrid", {
  enumerable: true,
  get: function get() {
    return _SimpleImageGrid["default"];
  }
});

var _SimpleImageGridItem = _interopRequireDefault(require("./Components/SimpleImageGridItem"));

var _SimpleImageGrid = _interopRequireDefault(require("./Components/SimpleImageGrid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
