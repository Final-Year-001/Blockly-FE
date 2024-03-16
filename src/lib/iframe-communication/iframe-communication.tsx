import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

type StringEventMap<T> = {
  [key: string]: (event: T) => void;
};

declare global {
  interface Window {
    [key: string]: StringEventMap<any>;
  }
}

function useParentEvents<RecieveET, SendET>(
  callback: (event: RecieveET) => void,
  childKey: string = "global"
): (event: SendET) => void {
  useEffect(() => {
    const callbacks = window?.[childKey];
    const u = uuidv4();

    if (!callbacks) {
      window[childKey] = {};
    }

    window[childKey][u] = callback;

    return () => {
      delete window[childKey][u];
    };
  }, []);

  return (event: any) => {
    if (window.parent[childKey]) {
      for (const callback of Object.values(window.parent[childKey])) {
        callback(event);
      }
    }
  };
}

function useChildEvents<SendET, RecieveET>(
  ref: React.MutableRefObject<HTMLIFrameElement | undefined | null>,
  callback: (event: RecieveET) => void,
  parentKey: string = "global"
): (event: SendET) => void {
  useEffect(() => {
    const u = uuidv4();

    if (!window[parentKey]) {
      window[parentKey] = {};
    }

    window[parentKey][u] = callback;

    return () => {
      delete window[parentKey][u];
    };
  }, [ref.current]);

  return (event: any) => {
    if (!ref.current) return;

    const callbacks = ref.current?.contentWindow?.[parentKey];

    if (!callbacks) return;

    for (const callback of Object.values(callbacks)) {
      callback(event);
    }
  };
}

export { useParentEvents, useChildEvents };
