import React, { useState, useEffect } from "react";
import GroupSelect from "../Forms/GroupSelect";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/timelineSlice";

/**
 * React component form for adding an item to the timeline
 *
 * @param {string} title - The title of the form.
 */
export default function AddItemForm({ title }) {
  const dispatch = useDispatch();
  const { groups } = useSelector((state) => state.timeline);
  const [itemText, setItemText] = useState("");
  const [itemStart, setItemStart] = useState(0);
  const [itemEnd, setItemEnd] = useState(0);
  const [group, setGroup] = useState(0);
  const [error, setError] = useState(true);

  /**
   * Handles the addition of a new item to the timeline.
   *
   * @param {object} item - The item to be added to the timeline.
   * @param {string} item.title - The title of the item.
   * @param {number} item.start - The start time of the item (in epoch format).
   * @param {number} item.end - The end time of the item (in epoch format).
   * @param {number} item.group - The group ID to which the item belongs.
   */
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  /**
   * Handles the change of the item title text.
   *
   * @param {object} e - The event object.
   */
  const handleItemTextChange = (e) => {
    setItemText(e.target.value);
  };

  /**
   * Handles the change of the item start time.
   *
   * @param {object} e - The event object.
   */
  const handleItemStartChange = (e) => {
    const startEpoch = +new Date(e.target.value);
    setItemStart(startEpoch);
  };

  /**
   * Handles the change of the item end time.
   *
   * @param {object} e - The event object.
   */
  const handleItemEndChange = (e) => {
    const endEpoch = +new Date(e.target.value);
    setItemEnd(endEpoch);
  };

  /**
   * Handles the change of the selected group.
   *
   * @param {object} e - The event object.
   */
  const onGroupChange = (e) => {
    setGroup(e.target.value);
  };

  useEffect(() => {
    // Basic validation to check if all fields are entered.
    if (itemText === "" || itemStart === 0 || itemEnd === 0 || group === 0) {
      setError(true);
    } else {
      setError(false);
    }
  }, [itemText, itemEnd, itemStart, group]);

  return (
    <div className="form-container">
      <h2>{title}</h2>
      <textarea
        name="item-text"
        onChange={handleItemTextChange}
        value={itemText}
        placeholder="Enter a title here..."
        aria-label="Title text-area"
      />
      <GroupSelect groups={groups} onGroupChange={onGroupChange} />
      <input
        type="datetime-local"
        name="start-datetime"
        onChange={handleItemStartChange}
        aria-label="Start Date and Time"
      />
      <input
        type="datetime-local"
        name="end-datetime"
        onChange={handleItemEndChange}
        aria-label="End Date and Time"
      />
      <button
        disabled={error}
        onClick={() =>
          handleAddItem({
            title: itemText,
            start: itemStart,
            end: itemEnd,
            group: group,
          })
        }
        className="modal__save-button"
        aria-label="Save Item"
      >
        Save
      </button>
      <div className="errors">{error ? "Please enter all fields!" : ""}</div>
    </div>
  );
}
