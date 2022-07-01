import { keyframes, css } from "@emotion/core";
import styled from "@emotion/styled";

keyframes;
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
  font-size: calc(4rem + 0.01vw);
  font-weight: 200;
  text-align: center;
  padding: 2rem 0rem;
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 1rem;

  span {
    display: inline-block;
    width: 4rem;
  }

  @media (max-width: 680px) {
    font-size: 2rem;
    span {
      column-gap: 0.1rem;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #ffffff;
  background-color: #ff2323;
  border-color: #ff3d3d;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  width: 100%;
`;

export const ProgressMessage = styled.div`
  color: #ffffff;
  background-color: #4dcb63;
  border-color: #56bb68;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  width: 100%;
`;

export const Loader = styled.div`
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-top: 3px solid #000000;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
