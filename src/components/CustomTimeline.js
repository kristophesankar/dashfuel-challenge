import React, { useState, useEffect } from "react";
import moment from "moment";
import Timeline from "react-calendar-timeline";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import Modal from "./Modal/Modal";
import EditForm from "./EditForm";
import { setIsActive } from "../redux/slices/activeItemSlice";

export default function CustomTimeline() {
  const dispatch = useDispatch()
  const { keys, groups, items } = useSelector((state) => state.timeline);
  const { isActive, itemObj } = useSelector((state) => state.activeItem);
  const [defaultTimeStart, setDefaultTimeStart] = useState(
    moment().startOf("day").toDate()
  );
  const [defaultTimeEnd, setDefaultTimeEnd] = useState(
    moment().startOf("day").add(1, "day").toDate()
  );

  const itemRenderer = ({
    item,
    itemContext,
    getItemProps,
    getResizeProps,
  }) => {
    return (
      <Item
        item={item}
        itemContext={itemContext}
        getItemProps={getItemProps}
        getResizeProps={getResizeProps}
      />
    );
  };

  return (
    <div>
      <Modal hasCloseBtn={true} isOpen={isActive} onClose={() => dispatch(setIsActive(false)) }>
        <EditForm title="Edit Item" item={itemObj} />
      </Modal>
      <Timeline
        groups={groups}
        items={items}
        keys={keys}
        itemRenderer={itemRenderer}
        itemTouchSendsClick={false}
        stackItems
        lineHeight={50}
        itemHeightRatio={0.75}
        defaultTimeStart={defaultTimeStart}
        defaultTimeEnd={defaultTimeEnd}
      />
    </div>
  );
}
