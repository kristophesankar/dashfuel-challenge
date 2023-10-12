import React, { useState, useEffect } from "react";
import moment from "moment";
import Timeline from "react-calendar-timeline";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./redux/slices/timelineSlice";

var keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
  groupLabelKey: "title",
};

/**
 * The main application component.
 */
export default function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.timeline);
  const [groups, setGroups] = useState(data.groups);
  const [items, setItems] = useState(data.items);
  const [defaultTimeStart, setDefaultTimeStart] = useState(
    moment().startOf("day").toDate()
  );
  const [defaultTimeEnd, setDefaultTimeEnd] = useState(
    moment().startOf("day").add(1, "day").toDate()
  );

  /**
   * Handles the movement of an item within the timeline.
   * @param {string} itemId - The ID of the item being moved.
   * @param {Date} dragTime - The new time the item is dragged to.
   * @param {number} newGroupOrder - The new order of the group.
   */
  const handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const group = groups[newGroupOrder];
    let newItems = items.map((item) =>
      item.id === itemId
        ? Object.assign({}, item, {
            start: dragTime,
            end: dragTime + (item.end - item.start),
            group: group.id,
          })
        : item
    );
    setItems(newItems);
    console.log("Moved", itemId, dragTime, newGroupOrder);
  };

  /**
   * Handles the resizing of an item within the timeline.
   * @param {string} itemId - The ID of the item being resized.
   * @param {Date} time - The new time after resizing.
   * @param {string} edge - Indicates whether the left or right edge is being resized.
   */
  const handleItemResize = (itemId, time, edge) => {
    let newItems = items.map((item) =>
      item.id === itemId
        ? Object.assign({}, item, {
            start: edge === "left" ? time : item.start,
            end: edge === "left" ? item.end : time,
          })
        : item
    );
    setItems(newItems);
    console.log("Resized", itemId, time, edge);
  };

  /**
   * Handles the addition of a new item to the timeline.
   */
  const handleAddItem = () => {
    dispatch(addItem());
  };

  useEffect(() => {
    console.log("page rendered");
    console.log(data);
  }, [data]);

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      <Timeline
        groups={data.groups}
        items={data.items}
        keys={keys}
        fullUpdate
        itemTouchSendsClick={false}
        stackItems
        itemHeightRatio={0.75}
        canMove={true}
        canResize={"both"}
        defaultTimeStart={defaultTimeStart}
        defaultTimeEnd={defaultTimeEnd}
        onItemMove={handleItemMove}
        onItemResize={handleItemResize}
      />
    </div>
  );
}
