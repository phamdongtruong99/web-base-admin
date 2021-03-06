import styled from 'styled-components';
import theme from 'configs/theme';

export default styled.div`
  margin-top: 20px;
  position: relative;

  label {
    position: absolute !important;
    left: ${props => (props.isPrefix ? '30px' : '11px')};
    right: ${props => (props.isSuffix ? '30px' : '11px')};
    line-height: 1.5;
    top: 4px;
    transition: 300ms ease all;
    color: rgba(0, 0, 0, 0.45);
    pointer-events: none;
  }

  input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    display: block;
    padding-left: ${props => (props.isPrefix ? '30px' : '11px')};
    padding-right: ${props => (props.isSuffix ? '30px' : '11px')};

    &:focus {
      outline: none;
      box-shadow: none !important;
    }

    &:focus,
    &:not([value='']),
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      & ~ label {
        top: -20px;
        left: 11px;
        font-size: 90%;
        color: ${theme.palette.primaryColor};
      }
    }

    &:focus ~ .bar:before {
      width: 100%;
    }
  }
  .bar {
    position: relative;
    display: block;
    width: 100%;
    &:before {
      content: '';
      height: 2px;
      width: 0;
      bottom: 0px;
      position: absolute;
      background: ${theme.palette.primaryColor};
      transition: 300ms ease all;
      left: 0%;
    }
  }

  .prefix {
    position: absolute;
    top: 8px;
    left: 11px;
    pointer-events: none;
  }

  .suffix {
    position: absolute;
    top: 8px;
    right: 11px;
    color: rgba(0, 0, 0, 0.45);

    &:focus,
    &:hover {
      color: #333;
    }
  }
`;
