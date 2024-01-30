import styled from 'styled-components';

const LoginWrapper = styled.div`
  // 정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // background-color: blue;
  width: 50%;
  height: 100vh;
  margin-left: auto;
`;

const ColumnWrapper = styled.div`
  // 정렬
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 5px;
  width: 380px;
`;

const RowWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

export { LoginWrapper, RowWrapper, ColumnWrapper };
