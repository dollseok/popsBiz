import styled, { css } from 'styled-components';
import { InputProps } from './Input';

const getOptionStyling = (option: Required<InputProps>['option']) => {
  const styles = {
    default: css`
      background-color: white;
      border: 0.1rem solid ${({ theme }) => theme.color.grey1};
    `,
    grey: css`
      background-color: ${({ theme }) => theme.color.grey};
    `,
    transparent: css`
      border: border: 0.1rem solid ${({ theme }) => theme.color.transparent};
      background-color: ${({ theme }) => theme.color.transparent};
      &:focus {
        border: 0.1rem solid ${({ theme }) => theme.color.transparent};
        outline: 0.2rem solid ${({ theme }) => theme.color.transparent};
      }
    `,
  };
  return styles[option];
};

const getInputSizeStyling = (
  $inputsize: Required<InputProps>['$inputsize']
) => {
  const styles = {
    fullSize: css`
      width: 100%;
    `,
    large: css`
      width: 424px;
    `,
    medium: css`
      width: 363px;
    `,
    small: css`
      width: 218px;
    `,
    dateInput: css`
      width: 175px;
    `,
    timeInput: css`
      width: 115px;
    `,
    siteInput: css`
      width: 100%;
    `,
    phoneNumberInput: css`
      width: 120px;
    `,

    ticketDataInput: css`
      width: 90px;
    `,
    ticketTimeInput: css`
      height: 25px;
      width: 70px;
      margin-bottom: 5px;
    `,
    ticketDateInput: css`
      width: 150px;
      height: 25px;
      margin-right: 3px;
      margin-bottom: 5px;
    `,
    hashtagInput: css`
      height: 30px;
      padding-left: 0px;
      padding-right: 0px;
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
  border-radius: 5px;
  margin-left: ${props => props.$marginLeft};
  margin-right: ${props => props.$marginRight};
  margin-bottom: ${props => props.$marginBottom};
  margin-top: ${props => props.$marginTop};
  font-size: ${({ theme }) => theme.fontsize.body3};

  &::placeholder {
    color: ${({ theme }) => theme.color.grey1};
    font-size: 14px;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.grey2};
    color: ${({ theme }) => theme.color.grey1};
  }

  &:focus {
    border: 0.1rem solid ${({ theme }) => theme.color.grey2};
    outline: 0.2rem solid ${({ theme }) => theme.color.blue};
    padding-left: 13px;
  }

  &:focus::placeholder {
    color: transparent;
  }
  ${({ option = 'default' }) => getOptionStyling(option)};
  ${({ $inputsize = 'large' }) => getInputSizeStyling($inputsize)};
`;

export { Input };
