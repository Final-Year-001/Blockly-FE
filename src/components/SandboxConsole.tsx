import React, { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Config from "../config";
import { useRecoilValue } from "recoil";
import { sandboxAtom } from "../state/stadbox";

function SandboxConsole() {
    const sandbox = useRecoilValue(sandboxAtom);
    const { lastMessage, readyState, sendJsonMessage } = useWebSocket(Config.getConsoleURL(sandbox.name), {
      shouldReconnect: () => true        
    });
    const [logHistory, setLogHistory] = useState<Array<MessageEvent<any>>>([]);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
      }[readyState];

    useEffect(() => {
      setLogHistory([]);
    }, [sandbox])

    useEffect(() => {
        if(readyState == ReadyState.OPEN) {
            console.log("message")
            sendJsonMessage({lol: "log"})
            if (lastMessage !== null) {
              setLogHistory((prev) => prev.concat(lastMessage));
            }
        }
      }, [lastMessage]);
    
    return (
        <div className="whitespace-pre-line w-full h-full p-2 text-white">
          <div>Connection Status - {connectionStatus}</div>
          <code>{logHistory.map((l,i) => <div key={i}>{l.data || null}</div>)}</code>
        </div>
    )
}

export default SandboxConsole;