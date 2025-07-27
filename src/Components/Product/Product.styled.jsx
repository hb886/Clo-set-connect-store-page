import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

export const Card = styled.div`
  background-color: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
  color: white;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 333px;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;