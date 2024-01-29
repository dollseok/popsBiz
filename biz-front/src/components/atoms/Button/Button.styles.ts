import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const getOptionStyling = (option: Required<ButtonProps>['option']) => {
  const styles = {
    activated: css`
      background: ${({ theme }) => theme.color.blue};
    `,
    deactivated: css`
      background: ${({ theme }) => theme.color.grey1};
    `,
    danger: css`
      color: ${({ theme }) => theme.color.danger};
    `,
    border: css`
      background: ${({ theme }) => theme.color.white};
      border: 1px solid black;
    `,
  };

  return styles[option] || styles.activated;
};

const getSizeStyling = (size: Required<ButtonProps>['size']) => {
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
    extraSmall: css`
      width: 100px;
      height: 45px;
    `,
  };

  return styles[size] || styles.large;
};

const Button = styled.button<ButtonProps>`
  height: 50px;
  width: 100%;
  font-size: 16px;
  text-align: center;
  color: ${props => props.$color || 'white'};
  ${({ size = 'large' }) => getSizeStyling(size)};
  ${({ option = 'activated' }) => getOptionStyling(option)};
  background-color: ${props => props.$backgroundColor};
  margin: ${props => props.$margin || '0'};
`;

export { Button };
