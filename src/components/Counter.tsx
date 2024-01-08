"use client";
import { createSignal } from "solid-js";
import "./Counter.css";

const secretSymbol = Symbol();

export const Counter = /*@__PURE__*/ (() => {
  (ActualCounter as typeof ActualCounter & { [key: symbol]: string })[
    secretSymbol
  ] = "ActualCounter";
  return ActualCounter;
})();

function ActualCounter() {
  const [count, setCount] = createSignal(0);
  return (
    <button class="increment" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
  );
}
