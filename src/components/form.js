import React, { useState, useRef } from "react";
import { useStack } from "../hooks/useStack";

export default function Form({ onSubmit: handlerSumitFromParent }) {
  // STATES
  const [keyword, setKeyword] = useState(null);

  // REFS
  const inputRef = useRef();

  // HOOKS
  const { stack } = useStack({
    keyword,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setKeyword(evt.target.value);
    inputRef.current.value = "";
    handlerSumitFromParent(stack);
  };

  // HANDLES
  const handleChange = (evt) => {
    inputRef.current.value = evt.target.value;
    setKeyword(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        name="keyword"
        placeholder="🔎 Buscar..."
        onChange={handleChange}
        autoComplete="off"
      />
    </form>
  );
}

//rfc
