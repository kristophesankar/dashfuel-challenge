import React, { useState } from "react";
import GroupSelect from "./GroupSelect";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/slices/timelineSlice";

export default function ItemForm({  title, type }) {
  const dispatch = useDispatch()
  const {groups} = useSelector((state) => state.timeline)
  const [itemText, setItemText] = useState("");
  const [itemStart, setItemStart] = useState(0);
  const [itemEnd, setItemEnd] = useState(0);
  const [group, setGroup] = useState("");

  /**
   * Handles the addition of a new item to the timeline.
   */
  const onAddItem = (item) => {
    dispatch(addItem(item));
  };

  const onEditItem = (item) => {
    dispatch(addItem(item));
  };

  const onItemTextChange = (e) => {
    setItemText(e.target.value);
  };

  const onItemStartChange = (e) => {
    const startEpoch = +new Date(e.target.value);
    setItemStart(startEpoch);
  };

  const onItemEndChange = (e) => {
    const endEpoch = +new Date(e.target.value);
    setItemEnd(endEpoch);
  };

  const onGroupChange = (e) => {
    setGroup(e.target.value);
  };

  return (
    <div className="form-container">
      <h2>{title}</h2>
      <textarea name="item-text" onChange={onItemTextChange} value={itemText} />
      <GroupSelect groups={groups} onGroupChange={onGroupChange} />
      <input
        type="datetime-local"
        name="start-datetime"
        onChange={onItemStartChange}
      />
      <input
        type="datetime-local"
        name="end-datetime"
        onChange={onItemEndChange}
      />
      <button
        onClick={() =>
          onAddItem({
            title: itemText,
            start: itemStart,
            end: itemEnd,
            group: group,
          })
        }
        className="modal__save-button"
      >
        Save
      </button>
    </div>
  );
}
