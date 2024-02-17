import styled, { css } from 'styled-components';
import { BoxProps } from './Box';

const getOptionStyling = ($option: Required<BoxProps>['$option']) => {
  const styles = {
    none: css``,
    InputBox: css`
      width: 423.99px;
      font-family: 'Pretendard';
      font-weight: 400;
      padding-left: 13px;
      padding-right: 13px;
      height: 50px;
      font-size: 16px;
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: white;
      border: 1px solid black;
      font-size: ${({ theme }) => theme.fontsize.body2};
      color: ${({ theme }) => theme.color.grey1};
    `,
    greyLine: css`
      background-color: ${({ theme }) => theme.color.grey1};
      height: 1px;
      width: 700px;
      margin-bottom: 30px;
    `,
  };
  return styles[$option];
};

const Box = styled.div<BoxProps>`
  width: ${props => props.$width};
  height: ${props => props.$height};
  border: ${props => props.$border};
  background-color: ${props => props.$backgroundColor};
  ${({ $option = 'none' }) => getOptionStyling($option)};
`;

export { Box };
