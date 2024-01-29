import styled, { css } from 'styled-components';
import { TextProps } from './Text';

const getSizeStyling = (size: Required<TextProps>['size'] = 'heading') => {
  const style = {
    heading: css`
      font-size: ${({ theme }) => theme.fontsize.heading};
    `,
    subtitle: css`
      font-size: ${({ theme }) => theme.fontsize.subtitle};
    `,
    body1: css`
      font-size: ${({ theme }) => theme.fontsize.body1};
    `,
    body2: css`
      font-size: ${({ theme }) => theme.fontsize.body2};
    `,
    body3: css`
      font-size: ${({ theme }) => theme.fontsize.body3};
    `,
    body4: css`
      font-size: ${({ theme }) => theme.fontsize.body4};
    `,
    small: css`
      font-size: ${({ theme }) => theme.fontsize.small};
    `,
  };
  return style[size];
};

const getFontWeightStyling = (weight: TextProps['$fontWeight'] = 'regular') => {
  switch (weight) {
    case 'regular':
      return '400';
    case 'bold':
      return '700';
    case 'extraBold':
      return '800';
    case 'heavy':
      return '900';
  }
};

const TextContainer = styled.p<TextProps>`
  margin-left: ${props => props.$marginLeft};
  margin-right: ${props => props.$marginRight};
  margin-bottom: ${props => props.$marginBottom};
  margin-bottom: ${props => props.$marginTop};
  color: ${props => props.$color || 'black1'};
  line-height: ${props => props.$lineHeight};
  font-weight: ${({ $fontWeight = 'regular' }) =>
    getFontWeightStyling($fontWeight)};
  ${({ size = 'heading' }) => getSizeStyling(size)};
`;

export { TextContainer };
