import styled from 'styled-components';

export const FilterContainer = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  background-color: black;
  margin-top: 2%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 70%;
`;

export const CheckboxLabel = styled.label`
  color: white;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Reset = styled.div`
  color: #2be88f;
  cursor: pointer;
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  transition: opacity 0.2s ease-in-out;
  width: 25%;
  text-align: right;
  font-size: 12px;

  &:hover {
    opacity: 0.7;
  }
`;


export const RangeInput = styled.input`
  width: 100%;
  margin-top: 0.5rem;
  appearance: none;
  height: 6px;
  border-radius: 5px;
  background: #2be88f;
  outline: none;
  transition: background 0.3s ease;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }
`;
