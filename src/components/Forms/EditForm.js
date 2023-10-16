import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editItem } from "../../redux/slices/timelineSlice";
import { setIsActive } from "../../redux/slices/activeItemSlice";

/**
 * A form component for editing an existing item.
 *
 * @param {object} props - The component's properties.
 * @param {string} props.title - The title of the form.
 * @param {object} props.item - The item to be edited.
 * @param {function} props.handleUpdateParentKey - Function to update the parent component's key.
 */
export default function EditForm({ title, item, handleUpdateParentKey }) {
  const dispatch = useDispatch();
  const [itemText, setItemText] = useState("");

  /**
   * Handles the change of the item text in the textarea.
   *
   * @param {object} e - The event object.
   */
  const onItemTextChange = (e) => {
    setItemText(e.target.value);
  };

  /**
   * Handles the edit of the item and dispatches necessary actions.
   *
   * @param {object} item - The item object.
   * @param {number} item.id - The item id.
   * @param {string} item.title - The item title.
   */
  const onEditItem = (item) => {
    dispatch(editItem(item));
    dispatch(setIsActive(false));
    handleUpdateParentKey();
  };

  useEffect(() => {
    // Populate the textarea with the item's title when the item prop changes.
    setItemText(item.title);
  }, [item]);

  return (
    <div className="form-container">
      <div className="form-container__header">
        <h2>{title}</h2>
      </div>
      <textarea
        name="item-text"
        onChange={onItemTextChange}
        value={itemText}
        aria-label="Title text-area"
        rows="6"
        className="form-container__input"
      ></textarea>
      <button
        onClick={() =>
          onEditItem({
            id: item.id,
            title: itemText,
          })
        }
        className="save-item__button"
        aria-label="Edit Item"
      >
        Save
      </button>
    </div>
  );
}
