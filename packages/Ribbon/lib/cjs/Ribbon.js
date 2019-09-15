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
var Ribbon = function(_a) {
  var title = _a.title;
  return react_1.default.createElement(
    Container,
    null,
    react_1.default.createElement(RibbonText, null, title),
  );
};
exports.default = Ribbon;
var Container = styled_components_1.default.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  background-color: #8acb82;\n  display: inline-block;\n  color: white;\n  padding: 0em 0.25em 0.25em 0.25em;\n  margin: 27px;\n  position: relative;\n  top: 0.85em;\n  margin-bottom: 20px;\n  margin-top: 20px;\n\n  &:before {\n    content: '';\n    background-color: #8acb82;\n    padding: 0em 0.5em;\n    left: -0.75em;\n    top: -0.2em;\n    bottom: auto;\n    height: 1.35em;\n    position: absolute;\n  }\n\n  &:after {\n    content: '';\n    background-color: #8acb82;\n    padding: 0em 0.5em;\n    left: auto;\n    top: 0.3em;\n    bottom: auto;\n    height: 1.35em;\n    position: absolute;\n  }\n",
      ],
      [
        "\n  background-color: #8acb82;\n  display: inline-block;\n  color: white;\n  padding: 0em 0.25em 0.25em 0.25em;\n  margin: 27px;\n  position: relative;\n  top: 0.85em;\n  margin-bottom: 20px;\n  margin-top: 20px;\n\n  &:before {\n    content: '';\n    background-color: #8acb82;\n    padding: 0em 0.5em;\n    left: -0.75em;\n    top: -0.2em;\n    bottom: auto;\n    height: 1.35em;\n    position: absolute;\n  }\n\n  &:after {\n    content: '';\n    background-color: #8acb82;\n    padding: 0em 0.5em;\n    left: auto;\n    top: 0.3em;\n    bottom: auto;\n    height: 1.35em;\n    position: absolute;\n  }\n",
      ],
    )),
);
var RibbonText = styled_components_1.default.i(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  padding: 0em 3em;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  display: inline-block;\n  font-weight: normal;\n  letter-spacing: 0.2em;\n  white-space: nowrap;\n  text-align: center;\n\n  &:before {\n    content: '';\n    position: absolute;\n    bottom: auto;\n    top: -0.8em;\n    border-bottom: 0.5em solid #080b0c;\n    border-bottom: 0.5em solid rgba(8, 11, 12, 0.2);\n    border-left: 0.5em solid transparent;\n    left: -0.55em;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: auto;\n    z-index: 1;\n    top: 1.5em;\n    left: auto;\n    right: -0.5em;\n    pointer-events: none;\n    -webkit-mask: none;\n    border-top: 0.5em solid rgba(8, 11, 12, 0.2);\n    border-right: 0.5em solid transparent;\n  }\n",
      ],
      [
        "\n  padding: 0em 3em;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  display: inline-block;\n  font-weight: normal;\n  letter-spacing: 0.2em;\n  white-space: nowrap;\n  text-align: center;\n\n  &:before {\n    content: '';\n    position: absolute;\n    bottom: auto;\n    top: -0.8em;\n    border-bottom: 0.5em solid #080b0c;\n    border-bottom: 0.5em solid rgba(8, 11, 12, 0.2);\n    border-left: 0.5em solid transparent;\n    left: -0.55em;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: auto;\n    z-index: 1;\n    top: 1.5em;\n    left: auto;\n    right: -0.5em;\n    pointer-events: none;\n    -webkit-mask: none;\n    border-top: 0.5em solid rgba(8, 11, 12, 0.2);\n    border-right: 0.5em solid transparent;\n  }\n",
      ],
    )),
);
var templateObject_1, templateObject_2;
//# sourceMappingURL=Ribbon.js.map
