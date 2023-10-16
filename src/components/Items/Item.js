import React, { useState } from "react";
import IconEdit from "../Icons/IconEdit";
import IconDelete from "../Icons/IconDelete";
import { useDispatch } from "react-redux";
import {
  setIsActive,
  updateActiveItem,
} from "../../redux/slices/activeItemSlice";
import { deleteItem } from "../../redux/slices/timelineSlice";

/**
 * A component to render an individual item on the timeline.
 *
 * @param {object} props - The component's properties.
 * @param {object} props.item - The item to be rendered.
 * @param {object} props.itemContext - The item context.
 * @param {function} props.getItemProps - Function to get item properties.
 * @param {function} props.setParentKey - Function to set the parent key (used for re-rendering).
 */
export default function Item({
  item,
  itemContext,
  getItemProps,
  setParentKey,
}) {
  const dispatch = useDispatch();
  const [isOver, setIsOver] = useState(false);
  let itemProps = getItemProps(item.itemProps);
  let style = { ...itemProps.style, borderRadius: "5px" };
  itemProps = { ...itemProps, style };

  /**
   * Handles mouse enter event to show edit and delete buttons on hover.
   */
  const handleMouseEnter = () => {
    setIsOver(true);
  };

  /**
   * Handles mouse leave event to hide edit and delete buttons.
   */
  const handleMouseLeave = () => {
    setIsOver(false);
  };

  /**
   * Handles click event on the Edit button.
   *
   * Sets the activeItem in redux to populate the modal
   *
   * @param {object} e - The event object.
   */
  const handleEditClick = (e) => {
    e.stopPropagation();
    dispatch(updateActiveItem(item));
    dispatch(setIsActive(true));
    setParentKey((k) => k + 1);
  };

  /**
   * Handles click event on the Delete button.
   *
   * Deletes an item from the redux store
   *
   * @param {object} e - The event object.
   */
  const handleDeleteClick = (e) => {
    e.stopPropagation();
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
