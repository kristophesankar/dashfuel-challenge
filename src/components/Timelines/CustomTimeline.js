import React, { useState } from "react";
import moment from "moment";
import Timeline from "react-calendar-timeline";
import { useDispatch, useSelector } from "react-redux";
import Item from "../Items/Item";
import Modal from "../Modals/Modal";
import EditForm from "../Forms/EditForm";
import { setIsActive } from "../../redux/slices/activeItemSlice";

/**
 * A custom timeline component for displaying events and items.
 *
 * Contains a modal for showing the current item the user is editing
 */
export default function CustomTimeline() {
  const dispatch = useDispatch();
  const { keys, groups, items } = useSelector((state) => state.timeline);
  const { isActive, itemObj } = useSelector((state) => state.activeItem);
  const [defaultTimeStart, setDefaultTimeStart] = useState(
    moment().startOf("day").toDate()
  );
  const [defaultTimeEnd, setDefaultTimeEnd] = useState(
    moment().startOf("day").add(1, "day").toDate()
  );

  // this key is useful to force the item to update after an edit was made
  const [parentKey, setParentKey] = useState(0);

  /**
   * Custom item renderer for rendering individual items on the timeline.
   *
   * @param {object} param0 - Item rendering properties.
   * @param {object} param0.item - The item to be rendered.
   * @param {object} param0.itemContext - The item context.
   * @param {function} param0.getItemProps - Function to get item properties.
   * @param {function} param0.getResizeProps - Function to get resize properties.
   * @returns {JSX.Element} - The rendered item component.
   */
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
        setParentKey={setParentKey}
      />
    );
  };

  /**
   * Callback function to update the UI when an item is edited.
   */
  const handleUpdateParentKey = () => {
    setParentKey((k) => k + 1);
  };

  return (
    <div key={parentKey}>
      <Modal
        hasCloseBtn={true}
        isOpen={isActive}
        onClose={() => dispatch(setIsActive(false))}
      >
        <EditForm
          title="Edit Item"
          item={itemObj}
          handleUpdateParentKey={handleUpdateParentKey}
        />
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
