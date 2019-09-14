import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface Props {
  /**
   * text to be displaced in the ribbon
   */
  title: string;
}

const Ribbon: React.FC<Props> = ({ title }) => (
  <Container>
    <RibbonText>{title}</RibbonText>
  </Container>
);

Ribbon.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Ribbon;

const Container = styled.div`
  background-color: #8acb82;
  display: inline-block;
  color: white;
  padding: 0em 0.25em 0.25em 0.25em;
  margin: 27px;
  position: relative;
  top: 0.85em;
  margin-bottom: 20px;
  margin-top: 20px;

  &:before {
    content: '';
    background-color: #8acb82;
    padding: 0em 0.5em;
    left: -0.75em;
    top: -0.2em;
    bottom: auto;
    height: 1.35em;
    position: absolute;
  }

  &:after {
    content: '';
    background-color: #8acb82;
    padding: 0em 0.5em;
    left: auto;
    top: 0.3em;
    bottom: auto;
    height: 1.35em;
    position: absolute;
  }
`;

const RibbonText = styled.i`
  padding: 0em 3em;
  font-size: 11px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  font-weight: normal;
  letter-spacing: 0.2em;
  white-space: nowrap;
  text-align: center;

  &:before {
    content: '';
    position: absolute;
    bottom: auto;
    top: -0.8em;
    border-bottom: 0.5em solid #080b0c;
    border-bottom: 0.5em solid rgba(8, 11, 12, 0.2);
    border-left: 0.5em solid transparent;
    left: -0.55em;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: auto;
    z-index: 1;
    top: 1.5em;
    left: auto;
    right: -0.5em;
    pointer-events: none;
    -webkit-mask: none;
    border-top: 0.5em solid rgba(8, 11, 12, 0.2);
    border-right: 0.5em solid transparent;
  }
`;
