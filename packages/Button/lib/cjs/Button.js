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
var styled_components_1 = __importDefault(require('styled-components'));
var text_1 = __importDefault(require('@kb-techspace-org/text'));
var Button = function(_a) {
  var label = _a.label;
  return react_1.default.createElement(
    Container,
    null,
    react_1.default.createElement(text_1.default, null, label),
  );
};
exports.default = Button;
var Container = styled_components_1.default.button(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  background-color: rgb(255, 51, 101);\n  color: #fff;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 300;\n  padding: 9px 36px;\n',
      ],
      [
        '\n  background-color: rgb(255, 51, 101);\n  color: #fff;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 300;\n  padding: 9px 36px;\n',
      ],
    )),
);
var templateObject_1;
//# sourceMappingURL=Button.js.map
