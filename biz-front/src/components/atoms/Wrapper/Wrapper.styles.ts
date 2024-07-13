import styled, { css } from 'styled-components';
import { WrapperProps } from './Wrapper';
import theme from '@/styles/theme';

const getOptionStyling = (option: Required<WrapperProps>['option']) => {
  const styles = {
    Flex: css`
      display: flex;
    `,
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
    Grid: css`
      display: grid;
    `,
    Scrollx: css`
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
    `,
    WordWrap: css`
      inline-size: 219px;
      overflow-wrap: break-word;
    `,
    TextEllipsis: css`
      width: 265px;
      font-size: 14px;
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,
    LineChangeBox: css`
      display: flex;
      padding: 5px;
      border: 1px solid black;
      padding-left: 13px;
      padding-right: 13px;
      padding-top: 10px;
      padding-bottom: 10px;
      flex-wrap: wrap;
      border-radius: 5px;
      width: 100%;
    `,
    TicketRow: css`
      display: flex;
      align-items: center;
      border-radius: 5px;
      border: 1px ${theme.color.grey1} solid;
      height: 70px;
      margin-bottom: 5px;
    `,
    TicketNavRow: css`
      display: flex;
      align-items: center;
      border-radius: 5px;
      background-color: ${theme.color.grey3};
      height: 50px;
      margin-bottom: 5px;
    `,
    PopupListNavRow: css`
      display: flex;
      align-items: center;
      border-radius: 5px;
      background-color: ${theme.color.grey3};
      height: 50px;
      margin-top: 40px;
      margin-bottom: 5px;
    `,
    PopupListItem: css`
      height: 130px;
      display: flex;
      align-items: center;
      justify-content: center;
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
    TicketListItem: css`
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
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
      padding-top: 20px;
      position: relative;
      display: flex;
      flex-direction: column;
    `,
    Nav: css`
      width: 100%;
      height: 80px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding-left: 80px;
      padding-right: 80px;
    `,
    Footer: css`
      width: 100%;
      height: 200px;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
    `,
    MainContent: css`
      width: 85%;
      padding: 60px;
      padding-left: 130px;
      padding-right: 130px;
      background-color: ${theme.color.grey2};
    `,
    InnerContent: css`
      min-width: 900px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 62px;
      padding-right: 62px;
      padding-top: 45px;
      padding-bottom: 45px;
    `,
    CenterContent: css`
      min-width: 442px;
      width: 900px;
    `,
    Login: css`
      width: 50%;
      height: 100vh;
    `,
    Signup: css`
      width: 100%;
      height: 100%;
    `,
    HomeComp: css`
      width: 900px;
      height: 300px;
      margin-bottom: 40px;
    `,
    PopupDataItem: css`
      width: 100%;
      height: 50px;
      padding: 0 16px;
      border-bottom: 1px solid ${theme.color.grey2};
    `,
  };
  return styles[$size];
};

const Wrapper = styled.div<WrapperProps>`
  width: ${props => props.$width};
  height: ${props => props.$height};
  background-color: ${props =>
    props.$backgroundColor
      ? props.theme.color[props.$backgroundColor]
      : props.theme.color.white};
  ${({ option = 'Default' }) => getOptionStyling(option)};
  ${({ $size = 'Default' }) => getSizeStyling($size)};
  margin-left: ${props => props.$marginLeft};
  margin-right: ${props => props.$marginRight};
  margin-bottom: ${props => props.$marginBottom};
  margin-top: ${props => props.$marginTop};
  padding-left: ${props => props.$paddingLeft};
  padding-right: ${props => props.$paddingRight};
  padding-bottom: ${props => props.$paddingBottom};
  padding-top: ${props => props.$paddingTop};
  padding: ${props => props.$padding};
  gap: ${props => props.$gap};
  grid-template-columns: ${props => props.$gridColumns};
  position: relative;
`;

export { Wrapper };
