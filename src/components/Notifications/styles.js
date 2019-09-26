import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  margin-top: 10px;
  margin-right: 10px;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: absolute;
  margin-right: 10px;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff992e;
        content: '';
        border-radius: 50%;
      }
    `}
`;
