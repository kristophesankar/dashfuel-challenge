import React, { useState } from "react";

export default function ModalButton ({title, classNames, handleOpen, children}) {
  return (
      <button className={classNames} onClick={handleOpen}>{children} {title}</button>
  );
}
