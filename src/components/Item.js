import React, { useState, useReducer } from "react";
import IconEdit from "./Icons/IconEdit";
import IconDelete from "./Icons/IconDelete";
import { useDispatch, useSelector } from "react-redux";
import { setIsActive, updateActiveItem } from "../redux/slices/activeItemSlice";
import { deleteItem } from "../redux/slices/timelineSlice";

export default function Item({ item, itemContext, getItemProps, setParentKey}) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0);
  const dispatch = useDispatch();
  const [isOver, setIsOver] = useState(false);
  let itemProps = getItemProps(item.itemProps);
  let style = { ...itemProps.style, borderRadius: "5px" };
  itemProps = { ...itemProps, style };

  const handleMouseEnter = () => {
    setIsOver(true);
  };

  const handleMouseLeave = () => {
    setIsOver(false);
  };

  const handleEditClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(updateActiveItem(item));
    dispatch(setIsActive(true));
    setParentKey(k => k+1)
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation()
    dispatch(deleteItem(item));
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      {...itemProps}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="rct-item-content"
        style={{ maxHeight: `${itemContext.dimensions.height}` }}
      >
        {isOver ? (
          <div className="item__button-container">
            <button onClick={handleEditClick}>
              <IconEdit />
              Edit
            </button>
            <button onClick={handleDeleteClick}>
              <IconDelete />
              Delete
            </button>
          </div>
        ) : (
          itemContext.title
        )}
      </div>
    </div>
  );
}
