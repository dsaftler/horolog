import React from 'react';
import useDropdown from 'use-dropdown';

const Select = function () {
  const [containerRef, isOpen, open, close] = useDropdown();

  return (
    <div className="select-container" ref={containerRef}>
      <Input onFocus={open} />

      {isOpen && (
        <SelectOptions>
          <Option>First option</Option>
          <Option>Second option</Option>
          <Option>Third option</Option>
        </SelectOptions>
      )}

      <button onClick={close}>
        Close select
    </button>
    </div>
  );
};