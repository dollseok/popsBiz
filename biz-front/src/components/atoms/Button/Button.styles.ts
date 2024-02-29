import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const getOptionStyling = (option: Required<ButtonProps>['option']) => {
  const styles = {
    none: css`
      background-color: ${({ theme }) => theme.color.transparent};
    `,
    activated: css`
      background-color: ${({ theme }) => theme.color.blue};
    `,
    deactivated: css`
      background-color: ${({ theme }) => theme.color.grey1};
      pointer-events: none;
      opacity: 0.5;
    `,
    danger: css`
      color: ${({ theme }) => theme.color.danger};
    `,
    border: css`
      background-color: ${({ theme }) => theme.color.white};
      border: 1px solid black;
      color: black;
    `,
    textButton: css`
      background-color: ${({ theme }) => theme.color.transparent};
      color: ${({ theme }) => theme.color.grey1};
    `,
    SideNavMainButton: css`
      background-color: ${({ theme }) => theme.color.transparent};
      color: ${({ theme }) => theme.color.black1};
      display: flex;
      justify-content: flex-start;
      align-items: none;
      margin-top: 10px;
      margin-bottom: 10px;
      height: 30px;
    `,
    SideNavButton: css`
      background-color: ${({ theme }) => theme.color.transparent};
      color: ${({ theme }) => theme.color.black1};
      display: flex;
      justify-content: flex-start;
      align-items: none;
      padding-left: 21px;
      margin-top: 10px;
      margin-bottom: 10px;
      height: 30px;
    `,
  };

  return styles[option] || styles.activated;
};

const getSizeStyling = (size: Required<ButtonProps>['size']) => {
  const styles = {
    none: css``,
    large: css`
      width: 363px;
      height: 50px;
    `,
    medium: css`
      width: 235px;
    `,
    small: css`
      width: 147px;
      height: 50px;
    `,
    extraSmall: css`
      width: 102px;
      height: 45px;
    `,
    textSize: css`
      width: 100px;
      height: 20px;
    `,
  };

  return styles[size] || styles.large;
};

const Button = styled.button<ButtonProps>`
  white-space: pre;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: 'Pretendard';
  font-weight: ${props => props.$fontWeight || '400'};
  padding: 0px;
  color: ${props => props.$color || 'white'};
  ${({ size = 'large' }) => getSizeStyling(size)};
  ${({ option = 'activated' }) => getOptionStyling(option)};
  font-size: ${props => props.$fontSize || '16px'};
  background-color: ${props =>
    props.$backgroundColor ? props.theme.color[props.$backgroundColor] : ''};
  margin-left: ${props => props.$marginLeft};
  margin-right: ${props => props.$marginRight};
  margin-bottom: ${props => props.$marginBottom};
  margin-top: ${props => props.$marginTop};
`;

export { Button };
