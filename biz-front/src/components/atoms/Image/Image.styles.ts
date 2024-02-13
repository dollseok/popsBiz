import styled from 'styled-components';
import { ImageProps } from './Image';

const ImageContainer = styled.img<ImageProps>`
  width: ${props => `${props.width}${props.$unit}`};
  height: ${props => `${props.height}${props.$unit}`};
  margin: ${props => props.$margin || '0px'};
  border-radius: ${props => `${props.$borderRadius}${props.$unit}`};
  object-fit: cover;

  &.invert {
    filter: invert(1);
  }
`;

export { ImageContainer };
