import styled from 'styled-components';
import CustomButton from '../custom-button/Custom.button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 340px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;
export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const CartItemContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessageContainer = styled.div`
  font-size: 19px;
  margin: 60px auto;
`;
