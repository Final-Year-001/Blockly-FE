(function () {
  function sendToParent(event) {
    const callbacks = window.parent?.["global"];

    if (callbacks) {
      for (const callback of Object.values(callbacks)) {
        callback?.(event);
      }
    }
  }

  const oldLog = console.log;
  const oldWarn = console.warn;
  const oldError = console.error;

  console.log = function (...message) {
    try {
      const m = `${message}`;
      sendToParent({ type: "console.log", message: message, string: m });
    } catch (e) {
      oldError(e);
    }

    oldLog.apply(console, arguments);
  };

  console.warn = function (...message) {
    try {
      const m = `${message}`;
      sendToParent({ type: "console.warn", message: message, string: m });
    } catch (e) {
      oldError(e);
    }

    oldWarn.apply(console, arguments);
  };

  console.error = function (...message) {
    try {
      const m = `${message}`;
      sendToParent({ type: "console.error", message: message, string: m });
    } catch (e) {
      oldError(e);
    }

    oldError.apply(console, arguments);
  };
})();
