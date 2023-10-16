import React from "react";

/**
 * A component for selecting a group from a list of options.
 *
 * @param {object} props - The component's properties.
 * @param {array} props.groups - The list of groups to choose from.
 * @param {function} props.onGroupChange - A callback function to handle group selection changes.
 * @returns {JSX.Element} - The rendered group select component.
 */
export default function GroupSelect({ groups, onGroupChange }) {
  return (
    <select
      name="group-list"
      defaultValue="placeholder"
      className="form-container__input"
      onChange={onGroupChange}
    >
      <option value={"placeholder"} disabled>
        Select a group
      </option>
      {groups.map((group) => {
        const { id, title } = group;
        const optionKey = `${id}_group_item`;
        return (
          <option key={optionKey} value={id}>
            {title}
          </option>
        );
      })}
    </select>
  );
}
