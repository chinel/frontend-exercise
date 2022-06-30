import styled from "@emotion/styled";
export const Button = styled.button`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 0.388rem double #000000;
  color: ${(props) => (props.textColor ? props.textColor : "#ffffff")};
  background-color: ${(props) => (props.color ? props.color : "#454545")};
  font-size: 1rem;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: #fd4438;
  color: #ffffff;
  padding: 0.4em 2rem;
  border-radius: 0.375rem;
  font-size: calc(1rem + 0.01vw);
  display: inline-block;
  margin: 1rem auto;
  cursor: pointer;
`;

export const List = styled.div`
  padding: ${(props) => (props.noPad ? "2rem" : "4rem")} 0.3rem;
  width: 100%;
`;

export const Item = styled.div`
  padding: 1rem 0.3rem;
  border-top: 0.063rem solid #414141;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  font-size: 1.4rem;
`;

export const ListItem = styled(Item)`
  color: ${(props) => (props.active ? "#747474" : "#ffffff")};
`;

export const LapItem = styled(Item)`
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  justify-content: space-between;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 0.5rem;
`;

export const Timer = styled.div`
  font-size: calc(6rem + 0.01vw);
  font-weight: 200;
  text-align: center;
  padding: 2rem 0rem;

  @media (max-width: 680px) {
    font-size: calc(3rem + 0.01vw);
  }
`;
