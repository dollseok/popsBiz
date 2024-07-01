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
    cancel: css`
      background-color: ${({ theme }) => theme.color.grey1};
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
      border: 1px solid ${({ theme }) => theme.color.grey1};
      color: black;
    `,
    textButton: css`
      background-color: ${({ theme }) => theme.color.transparent};
      color: ${({ theme }) => theme.color.grey1};
    `,
    blackButton: css`
      background-color: ${({ theme }) => theme.color.black1};
      color: ${({ theme }) => theme.color.white};
    `,
    blueTextButton: css`
      background-color: ${({ theme }) => theme.color.transparent};
      color: ${({ theme }) => theme.color.blue1};
    `,
    SideNavMainButton: css`
      background-color: ${({ theme }) => theme.color.transparent};
      color: ${({ theme }) => theme.color.black1};
      margin-top: 30px;
      height: 30px;
    `,
    SideNavButton: css`
      background-color: ${({ theme }) => theme.color.transparent};
      color: ${({ theme }) => theme.color.black1};
      padding-left: 21px;
      margin-top: 20px;
      margin-bottom: 10px;
      height: 30px;
    `,

    ImageAddButton: css`
      height: 190px;
      border-radius: 5px;
      background-color: white;
      border: 1px grey solid;
    `,
    ImageDelButton: css`
      width: 33px;
      height: 33px;
      border-radius: 20px;
      position: absolute;
      margin-top: 12px;
      margin-left: 151px;
      box-shadow: 0 2px 5px 0 grey;
    `,
    siteDeleteButton: css`
      background-color: ${({ theme }) => theme.color.transparent};
      position: absolute;
      right: 5px;
    `,
    blueBorderTextButton: css`
      border: 1px ${({ theme }) => theme.color.blue} solid;
      background-color: ${({ theme }) => theme.color.transparent};
      color: ${({ theme }) => theme.color.blue};
      width: 140px;
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
      width: 200px;
      height: 50px;
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
      width: 155px;
      height: 20px;
    `,
    blackButton: css`
      width: 90px;
      height: 30px;
    `,
    iconSize: css``,
  };

  return styles[size] || styles.large;
};

const Button = styled.button<ButtonProps>`
  white-space: pre;
  border-radius: 5px;
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
  width: ${props => props.$width};
`;

export { Button };
