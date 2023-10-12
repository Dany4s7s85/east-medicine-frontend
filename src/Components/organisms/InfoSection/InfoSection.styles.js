// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';

export const Section = styled.div`
  width: 100%;
  padding: 22px 20px;
  margin: 0 0 20px;
  position: relative;
  border: 1px solid #312f62;
  border-radius: 20px;
  filter: drop-shadow(7px 7px 44px rgba(19, 179, 230, 0.15));

  @media (min-width: 992px) {
    padding: 28px;
  }

  .light & {
    border-color: #e2e2e8;
  }
`;
export const InfoColumn = styled.div`
  width: 50%;
`;
