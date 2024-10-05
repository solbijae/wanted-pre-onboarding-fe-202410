import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 1rem;
  width: 24rem;
  background-color: #ccc;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  animation: ${pulse} 1.5s infinite;
`;

export const ItemName = styled.div`
  background-color: #e9e9e9;
  width: 150px;
  height: 20px;
  border-radius: 12px;
`;

export const ItemPrice = styled.div`
  background-color: #e9e9e9;
  width: 80px;
  height: 16px;
  border-radius: 12px;
`;

export const ItemDate = styled.div`
  background-color: #e9e9e9;
  width: 200px;
  height: 16px;
  border-radius: 12px;
`;