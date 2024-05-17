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
      margin-bottom: 10px;
      font-size: ${({ theme }) => theme.fontsize.body2};
      color: ${({ theme }) => theme.color.grey1};
    `,
    greyLine: css`
      background-color: ${({ theme }) => theme.color.grey1};
      height: 1px;
      width: 700px;
      margin-bottom: 30px;
    `,
    dropdown: css`
      background-color: ${({ theme }) => theme.color.white};
      box-shadow: 0 3px 8px 0 grey;
      height: 200px;
      width: 147px;
      position: absolute;
      top: 50px;
      z-index: 1;
      overflow: scroll;
    `,
    hashtagBox: css`
      display: flex;
      justify-content: center;
      background-color: ${({ theme }) => theme.color.blue};
      height: 30px;
      border-radius: 15px;
      text-align: center;
      color: ${({ theme }) => theme.color.white};
      text-align: center;
      align-items: center;
      padding: 10px;
      margin: 0 5px 10px 0;
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
