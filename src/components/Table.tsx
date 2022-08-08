import { observer } from "mobx-react-lite";
import tableData from "../store/table";
import { FC, Fragment, useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  ArrowDown,
  Name,
  Category,
  Brand,
  Rating,
  RatingButton,
  Price,
  PriceButton,
  Id,

} from "../styles/global";

export const Table: FC = observer(() => {
  const visibleRows = 8;
  const rowHeight = 25;

  const [start, setStart] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  function getTopHight() {
    return start * rowHeight;
  }

  function getBottomHight() {
    return (
      rowHeight * (tableData.searchTableLenght - (start + visibleRows) - 1)
    );
  }

  function onScroll(e: any) {
    setStart(
      Math.min(
        tableData.searchTableLenght - visibleRows - 1,
        Math.floor(e.target.scrollTop / rowHeight)
      )
    );
  }

  const ratingClick = () => {
    tableData.setSortingRating("up");
  };
  const priceClick = () => {
    tableData.setSortingPrice("up");
  };

  useEffect(() => {
    rootRef.current?.addEventListener("scroll", onScroll);
    return () => {
      rootRef.current?.removeEventListener("scroll", onScroll);
    };
  }, [tableData.searchTableLenght, visibleRows, rowHeight]);

  
  if (tableData.search && tableData.searchTableLenght === 0)
    return <h3> такого нет :(</h3>;
  return (
    <Fragment>
      <div
        style={{
          height: rowHeight * visibleRows + 1,
          overflow: "auto",
        }}
        ref={rootRef}>
        <div style={{ height: getTopHight() }} />
        <table>
          <thead>
            <tr>
              <Id></Id>
              <Name> Name </Name>
              <Category> Category </Category>
              <Brand> Brand </Brand>
              <RatingButton
                onClick={() => {
                  ratingClick();
                }}>
                Rating
                {tableData.sorting.rating === "up" ? (
                  <ArrowUp />
                ) : (
                  <ArrowDown />
                )}
              </RatingButton>
              <PriceButton
                onClick={() => {
                  priceClick();
                }}>
                {" "}
                Price{" "}
                {tableData.sorting.price === "up" ? (
                  <ArrowUp />
                ) : (
                  <ArrowDown />
                )}{" "}
              </PriceButton>
            </tr>
          </thead>
          <tbody>
            {tableData.searchTable
              .slice(start, start + visibleRows + 1)
              .map((el, index) => (
                <tr key={el.id}>
                  <Id>{el.id}</Id>
                  <Name> {el.title} </Name>
                  <Category> {el.category} </Category>
                  <Brand> {el.brand} </Brand>
                  <Rating> {el.rating} </Rating>
                  <Price> {el.price} </Price>
                </tr>
              ))}
          </tbody>
        </table>
        <div style={{ height: getBottomHight() }} />
      </div>
    </Fragment>
  );
});
