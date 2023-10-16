import React from "react";

/**
 * A material-styled button component.
 *
 * @param {object} props - The component's properties.
 * @param {string} props.title - The button's text or title.
 * @param {string} props.classNames - CSS classes to be applied to the button.
 * @param {function} props.handleOpen - A function to be called when the button is clicked.
 * @param {ReactNode} props.children - Optional child elements to be rendered within the button.
 */
export default function MaterialButton({ title, classNames, handleOpen, children }) {
  return (
    <button className={classNames} onClick={handleOpen}>
      {children} {title}
    </button>
  );
}
