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

const getInputSizeStyling = (
  $inputsize: Required<InputProps>['$inputsize']
) => {
  const styles = {
    large: css`
      width: 424px;
    `,
    medium: css`
      width: 363px;
    `,
    small: css`
      width: 218px;
    `,
  };
  return styles[$inputsize];
};

const Input = styled.input<InputProps>`
  width: 100%;
  font-family: 'Pretendard';
  font-weight: 400;
  padding-left: 13px;
  padding-right: 13px;
  height: 50px;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 0.1rem solid ${({ theme }) => theme.color.black}

  margin-left: ${props => props.$marginLeft};
  margin-right: ${props => props.$marginRight};
  margin-bottom: ${props => props.$marginBottom};
  margin-bottom: ${props => props.$marginTop};
  ${({ option = 'default' }) => getOptionStyling(option)};
  ${({ $inputsize = 'large' }) => getInputSizeStyling($inputsize)};
  font-size: ${({ theme }) => theme.fontsize.body2};

  &::placeholder {
    color: ${({ theme }) => theme.color.grey1};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.grey2};
  }

  &:focus {
    border: 0.1rem solid ${({ theme }) => theme.color.grey2};
    outline: 0.2rem solid ${({ theme }) => theme.color.blue};
    padding-left: 13px;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export { Input };
