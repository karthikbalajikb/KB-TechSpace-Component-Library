'use strict';
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importDefault(require('react'));
var prop_types_1 = __importDefault(require('prop-types'));
var styled_components_1 = __importDefault(require('styled-components'));
var Text = function(_a) {
  var fontSize = _a.fontSize,
    lineHeight = _a.lineHeight,
    letterSpacing = _a.letterSpacing,
    fontWeight = _a.fontWeight,
    color = _a.color,
    opacity = _a.opacity,
    children = _a.children;
  return react_1.default.createElement(
    StyledText,
    {
      fontSize: fontSize || 14,
      lineHeight: lineHeight || 27,
      letterSpacing: letterSpacing,
      fontWeight: fontWeight,
      color: color,
      opacity: opacity,
    },
    children,
  );
};
Text.propTypes = {
  fontSize: prop_types_1.default.number,
  lineHeight: prop_types_1.default.number,
  letterSpacing: prop_types_1.default.number,
  fontWeight: prop_types_1.default.number,
  color: prop_types_1.default.string,
  opacity: prop_types_1.default.number,
  children: prop_types_1.default.any.isRequired,
};
Text.defaultProps = {
  fontSize: 0,
  lineHeight: 0,
  fontWeight: 400,
  letterSpacing: 0.3,
  color: 'lightgray',
  opacity: 1,
};
exports.default = Text;
var StyledText = styled_components_1.default.span(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  font-size: ',
        ';\n  line-height: ',
        ';\n  letter-spacing: ',
        ';\n  color: ',
        ';\n  opacity: ',
        ';\n',
      ],
      [
        '\n  font-size: ',
        ';\n  line-height: ',
        ';\n  letter-spacing: ',
        ';\n  color: ',
        ';\n  opacity: ',
        ';\n',
      ],
    )),
  function(_a) {
    var fontSize = _a.fontSize;
    return fontSize + 'px';
  },
  function(_a) {
    var lineHeight = _a.lineHeight;
    return lineHeight + 'px';
  },
  function(_a) {
    var letterSpacing = _a.letterSpacing;
    return letterSpacing + 'px';
  },
  function(_a) {
    var color = _a.color;
    return '' + color;
  },
  function(_a) {
    var opacity = _a.opacity;
    return '' + opacity;
  },
);
var templateObject_1;
//# sourceMappingURL=Text.js.map
