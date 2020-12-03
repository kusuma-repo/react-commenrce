import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 95%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 55px;
  }
`;

// export const CheckoutHeaderContainer = styled.div`
//   width: 100%;
//   padding: 10px 0;
//   display: flex;
//   justify-content: space-between;
//   border-bottom: 1px solid darkgrey;
// `;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  padding-bottom: 25px;
  margin-bottom: 35px;
  border-bottom: 1px solid #eee;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LabelImage = styled.label`
  float: left;
  width: 20%;
`;
export const LabelDetails = styled.label`
  float: left;
  width: 37%;
`;
export const LabelPrice = styled.label`
  float: left;
  width: 12%;
`;
export const LabelQuantity = styled.label`
  float: left;
  width: 10%;
`;
export const LabelRemoval = styled.label`
  float: left;
  width: 9%;
`;
export const LabelTotalPrice = styled.label`
  float: left;
  width: 12%;
  text-align: right;
`;
export const ShopCartHeader = styled.div`
  ::before,
  ::after {
    content: '';
    display: table;
  }
  ::after {
    clear: both;
  }
`;

export const HeaderCart = styled.label`
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid $color-border;
  ::before,
  ::after {
    content: '';
    display: table;
  }
  ::after {
    clear: both;
  }
`;

export const TotalContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
