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
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.color.grey1};
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
      max-height: 200px;
      position: absolute;
      top: 50px;
      z-index: 1;
      overflow-y: scroll;
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
    sideModalBox: css`
      display: flex;
      flex-direction: column;
      padding: 40px 25px 25px;
      border-left: solid 1px grey;
      width: 520px;
      height: 100vh;
      position: fixed;
      right: 0;
      top: 0;
      background: white;
      z-index: 2;
      transition: right 1s;
      overflow-y: auto;
    `,
    borderBox: css`
      background-color: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.grey1};
      color: black;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      margin: 5px 0;
      padding: 0 13px;
    `,
    ticketBox: css`
      text-align: center;
      flex: 110;
      &:nth-child(2) {
        flex: 310;
      }
      &:nth-child(3) {
        flex: 115;
      }
      &:nth-child(4) {
        flex: 115;
      }
      &:nth-child(5) {
        flex: 125;
      }
      &:nth-child(6) {
        flex: 56;
      }
    `,
    popupNavBox: css`
      text-align: center;
      flex: 325;
      &:nth-child(2) {
        flex: 109;
      }
      &:nth-child(3) {
        flex: 109;
      }
      &:nth-child(4) {
        flex: 109;
      }
      &:nth-child(5) {
        flex: 80;
      }
      &:nth-child(6) {
        flex: 52;
      }
    `,
    shadowBox: css`
      margin-top: 30px;
      padding: 29px 67px;
      width: 100%;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
    `,
    shortColBox: css`
      height: 70px;
      width: 2px;
      background: ${({ theme }) => theme.color.grey3};
    `,
    searchBox: css`
      border: 1px solid black;
      border-radius: 5px;
      margin-top: 30px;
      width: 100%;
      display: flex;
      padding-left: 16px;
      align-items: center;
    `,
    PopupDataBox: css`
      width: 385px;
      border: 1px solid ${({ theme }) => theme.color.grey2};
    `,
  };
  return styles[$option];
};

const Box = styled.div<BoxProps>`
  border: ${props => props.$border};
  background-color: ${props => props.$backgroundColor};
  ${({ $option = 'none' }) => getOptionStyling($option)};
  top: ${props => props.$top};
  width: ${props => props.$width};
  height: ${props => props.$height};
`;

export { Box };
