import styled, { css } from 'styled-components';
import { WrapperProps } from './Wrapper';

const getOptionStyling = (option: Required<WrapperProps>['option']) => {
  const styles = {
    Column: css`
      display: flex;
      flex-direction: column;
    `,
    Row: css`
      display: flex;
      align-items: center;
    `,
    RowSideEnd: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `,
    Center: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `,
    Default: css``,
  };
  return styles[option];
};

const getSizeStyling = ($size: Required<WrapperProps>['$size']) => {
  const styles = {
    Default: css``,
    SideNav: css`
      width: 220px;
      height: 100vh;
      border-right: 1px solid rgba(0, 0, 0, 0.2);
    `,
    Nav: css`
      width: 100%;
      height: 80px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    `,
    Footer: css`
      width: 100%;
      height: 200px;
      position: absolute;
      bottom: 0px;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
    `,
    Login: css`
      width: 50%;
      height: 100vh;
    `,
    Signup: css`
      width: 100%;
      height: 100%;
    `,
  };
  return styles[$size];
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  background-color: ${props =>
    props.$backgroundColor
      ? props.theme.color[props.$backgroundColor]
      : props.theme.color.white};
  ${({ option = 'Default' }) => getOptionStyling(option)};
  ${({ $size = 'Default' }) => getSizeStyling($size)};
  width: ${props => props.$width};
  margin-left: ${props => props.$marginLeft};
  margin-right: ${props => props.$marginRight};
  margin-bottom: ${props => props.$marginBottom};
  margin-top: ${props => props.$marginTop};
`;

export { Wrapper };
