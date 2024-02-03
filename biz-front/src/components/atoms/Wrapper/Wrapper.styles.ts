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
      height: 100%;
    `,
    Nav: css`
      width: 100%;
    `,
    Login: css`
      width: 50%;
      height: 100vh;
    `,
    Signup: css`
      height: 100%;
    `,
  };
  return styles[$size];
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  
  $backgroundColor=
    ${props =>
      props.$backgroundColor
        ? props.theme.color[props.$backgroundColor]
        : props.theme.color.white}
    ${({ option = 'Default' }) => getOptionStyling(option)};
  ${({ $size = 'Default' }) => getSizeStyling($size)};
  width: ${props => props.$width}; 
  margin-left: ${props => props.$marginLeft};
  margin-right: ${props => props.$marginRight};
  margin-bottom: ${props => props.$marginBottom};
  margin-top: ${props => props.$marginTop};
`;

export { Wrapper };
