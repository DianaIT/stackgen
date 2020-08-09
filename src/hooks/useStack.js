import { useState, useEffect } from "react";

export function useStack({ keyword }) {
  const [stack, setStack] = useState(["angular.png", "js.png"]);

  useEffect(() => {
    const url = `${keyword}.png`;
    const defaultStack = defaultStackComplete();

    // Si tenemos imagen y si no está ya en eñ stack del usuario
    if (defaultStack.includes(url) && !stack.includes(url)) {
      stack.push(url);
      console.log(`stack updated con ${keyword}`, stack);
      setStack(stack);
    }
  }, [stack, keyword]);

  return { stack };
}

export function defaultStackComplete() {
  return [
    "apple.png",
    "bose.png",
    "chrome.png",
    "css.png",
    "gitkraken.png",
    "dolce.png",
    "html.png",
    "msi.png",
    "linux.png",
    "notion.png",
    "vsc.png",
    "js.png",
    "ts.png",
    "next.png",
    "honor.png",
    "node.png",
    "angular.png",
  ];
}
