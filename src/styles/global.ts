import styled from "styled-components";
import { ReactComponent as Arrow } from "./../arrow.svg";
import { ReactComponent as Search } from "./../search.svg";

// table 
export const ArrowDown = styled(Arrow)({
  display: "inline",
});
export const ArrowUp = styled(Arrow)({
  transform: "rotate(180deg)",
});

export const Id = styled.td({
  width: "40px",
});
export const Name = styled.td({
  width: "310px",
  height: "25px",
});
export const Category = styled.td({
  width: "180px",
});
export const Brand = styled.td({
  width: "150px",
});
export const Rating = styled.td({
  width: "100px",
});
export const RatingButton = styled(Rating)({
  cursor: "pointer",
});
export const Price = styled.td({
  width: "100px",
});
export const PriceButton = styled(Price)({
  cursor: "pointer",
});


// search
export const SearchContainer = styled.div`
  position: relative;
  &:hover Input {
    width: 350px;
    border-radius: 10px;
  }
`;
export const Input = styled.input`
  padding: 10px;
  padding-left: 25px;
  width: ${props => props.value === "" ? "40px" : "350px"};
  height: 40px;
  background: none;
  border: 4px solid lightgray;
  border-radius: 50px;
  box-sizing: border-box;
  font-family: Comic Sans MS;
  font-size: 18px;
  color: black;
  outline: none;
  transition: 0.5s;
`;
export const SearchIcon = styled(Search)`
  position: absolute;
  top: 30%;
  left: 10px;
  transition: 0.2s;
`;


