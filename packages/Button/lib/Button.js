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
import React from 'react';
import styled from 'styled-components';
import Text from '@kb-techspace-org/text';
var Button = function(_a) {
  var label = _a.label;
  return React.createElement(
    Container,
    null,
    React.createElement(Text, null, label),
  );
};
export default Button;
var Container = styled.button(
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
