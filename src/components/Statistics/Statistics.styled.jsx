import styled from 'styled-components';

export const StaticList = styled.ul`
  padding: 12px;
  max-width: 480px;
  /* max-width: 100%; */
  margin: 0 auto;

  border-radius: 4px;
  box-shadow: -1px -1px 1px #ffffff, 2px 2px 2px #babecc;
  background-color: #d8e0ffc3;
  /* color: green; */
`;

export const DescrStatistics = styled.p`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
/* color: gray; */
  margin: ${p => p.theme.space[3]};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

`;
