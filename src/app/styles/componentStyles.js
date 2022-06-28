import styled from "@emotion/styled";
export const Button = styled.button`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 0.388rem double ${(props) => (props.color ? props.color : "#000000")};
  color: #ffffff;
  background-color: ${(props) => (props.color ? props.color : "#454545")};
  font-size: 1rem;
  cursor: pointer;
`;

export const List = styled.div`
  padding: 8rem 0.3rem;
  width: 100%;
`;

export const ListItem = styled.div`
  padding: 1rem 0.3rem;
  border-bottom: 0.063rem solid #414141;
  color: ${(props) => (props.active ? "#747474" : "#ffffff")};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  font-size: 1.4rem;
`;
