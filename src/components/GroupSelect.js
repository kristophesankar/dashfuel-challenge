import React from "react";

export default function GroupSelect({ groups, onGroupChange }) {
  return (
    <select name="group-list" onChange={onGroupChange}>
      { groups.map((group) => {
          const { id, title } = group;
          const optionKey = `${id}_group_item`;
          return (
            <option key={optionKey} value={id}>
              {title}
            </option>
          )
        })
      }
    </select>
  );
}
