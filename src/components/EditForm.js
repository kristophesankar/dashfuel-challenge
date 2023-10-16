import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editItem } from "../redux/slices/timelineSlice";
import { setIsActive } from "../redux/slices/activeItemSlice";

export default function EditForm({ title, item }) {
  const dispatch = useDispatch()
  const [itemText, setItemText] = useState('');

  /**
   * Handles the addition of a new item to the timeline.
   */

  const onItemTextChange = (e) => {
    setItemText(e.target.value);
  };

  const onEditItem = (item) => {
    dispatch(editItem(item));
    dispatch(setIsActive(false))
  };

  useEffect(() => {
    setItemText(item.title)
  }, [item])

  return (
    <div className="form-container">
      <h2>{title}</h2>
      <textarea name="item-text" onChange={onItemTextChange} value={itemText} ></textarea>
      <button
        onClick={() =>
          onEditItem({
            id: item.id,
            title: itemText,
          })
        }
        className="modal__save-button"
      >
        Edit
      </button>
    </div>
  );
}
