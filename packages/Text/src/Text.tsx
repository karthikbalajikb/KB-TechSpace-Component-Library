import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface Props {
  fontSize?: number;
  lineHeight?: number;
  letterSpacing?: number;
  fontWeight?: number;
  color?: string;
  opacity?: number;
  children?: any;
}

const Text: React.FC<Props> = ({
  fontSize,
  lineHeight,
  letterSpacing,
  fontWeight,
  color,
  opacity,
  children,
}) => (
  <StyledText
    fontSize={fontSize || 14}
    lineHeight={lineHeight || 27}
    letterSpacing={letterSpacing}
    fontWeight={fontWeight}
    color={color}
    opacity={opacity}
  >
    {children}
  </StyledText>
);

Text.propTypes = {
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  letterSpacing: PropTypes.number,
  fontWeight: PropTypes.number,
  color: PropTypes.string,
  opacity: PropTypes.number,
  children: PropTypes.any.isRequired,
};

Text.defaultProps = {
  fontSize: 0,
  lineHeight: 0,
  fontWeight: 400,
  letterSpacing: 0.3,
  color: 'lightgray',
  opacity: 1,
};

export default Text;

const StyledText = styled.span<Props>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  letter-spacing: ${({ letterSpacing }) => `${letterSpacing}px`};
  color: ${({ color }) => `${color}`};
  opacity: ${({ opacity }) => `${opacity}`};
`;
