import styled, { css } from 'styled-components';
import { InputProps } from './Input';

const getOptionStyling = (option: Required<InputProps>['option']) => {
  const styles = {
    default: css`
      background-color: white;
      border: 1px solid black;
    `,
    grey: css`
      background-color: ${({ theme }) => theme.color.grey};
    `,
  };
  return styles[option];
};

const getInputSizeStyling = (inputSize: Required<InputProps>['inputSize']) => {
  const styles = {
    large: css`
      width: 363px;
    `,
    medium: css`
      width: 235px;
    `,
    small: css`
      width: 147px;
    `,
  };
  return styles[inputSize];
};

const Input = styled.input<InputProps>`
  width: 100%;
  padding-left: 13px;
  padding-right: 13px;
  margin: 10px;
  height: 50px;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${({ option = 'default' }) => getOptionStyling(option)};
  ${({ inputSize = 'large' }) => getInputSizeStyling(inputSize)};
  font-size: ${({ theme }) => theme.fontsize.body2};

  $::placeholder {
    color: ${({ theme }) => theme.color.grey2};
  }

  $:focus {
    border: 0.2rem solid ${({ theme }) => theme.color.blue};
    padding-left: 25px;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export { Input };
