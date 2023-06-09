import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  color: ${({theme}) => theme.main};
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: ${({theme}) => theme.main};
  margin-bottom: 20px;
`;

export const Section = styled.section`
    text-align: center;
    padding: 190px 20px;
`;