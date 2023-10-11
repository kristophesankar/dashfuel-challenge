import React, {useState} from 'react';
import moment from "moment";
import Timeline from "react-calendar-timeline";
import generateFakeData from "./lib/generate-fake-data";

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
  groupLabelKey: "title"
};

export default function App () {

  const data = generateFakeData();
  const start = moment().startOf("day").toDate();
  const end = moment().startOf("day").add(1, "day") .toDate();

  const [groups, setGroups] = useState(data.groups);
  const [items, setItems] = useState(data.items);
  const [defaultTimeStart, setDefaultTimeStart] = useState(start);
  const [defaultTimeEnd, setDefaultTimeEnd] = useState(end);


  const handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const group = groups[newGroupOrder];
    let newItems = items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: dragTime,
              end: dragTime + (item.end - item.start),
              group: group.id
            })
          : item
      )

    setItems(newItems)
    console.log("Moved", itemId, dragTime, newGroupOrder);
  };

  const handleItemResize = (itemId, time, edge) => {

     let newItems = items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: edge === "left" ? time : item.start,
              end: edge === "left" ? item.end : time
            })
          : item
      )

    setItems(newItems)
    console.log("Resized", itemId, time, edge);
  };

    return (
      <Timeline
        groups={groups}
        items={items}
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
    );
}
