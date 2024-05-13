import styled from 'styled-components';
import { TextareaProps } from './Textarea';

const TextareaContainer = styled.textarea<TextareaProps>`
  width: ${props => props.$width};
  height: ${props => props.$height};
  resize: none;
  font-size: 14px;
  border-radius: 5px;
  padding: 16px 16px 13px 13px;
  font-family: 'Pretendard';
`;

export { TextareaContainer };
