type LogEvent = {
  type: "console.log" | "console.warn" | "console.error";
  message: any[];
  string: string;
};

interface ConsoleLoggerProps {
    readonly logs: LogEvent[]
    readonly containerProps?: any
}

function ConsoleLogger({ containerProps = {}, logs }: ConsoleLoggerProps) {
    return (
        <div className="w-full h-full p-4 gap-1 flex flex-col" {...containerProps}>
            {logs?.map((line, key) => <LogLine key={key} line={line}/>)}
        </div>
    )
}

interface  LogLineProps {
    readonly line: LogEvent
}

function LogLine({ line }: LogLineProps) {
    const getColor = () => {
        switch(line.type) {
            case "console.error":
                return "red";
            case "console.warn":
                return "yellow"
            case "console.log":
                return "white"
        }
    }
    return (
        <div className="w-full min-h-[20px] p-1 bg-black border-b-[2px] border-[#353535]" style={{ color: getColor() }}>{line.string}</div>
    )
}

export { ConsoleLogger };
export type { LogEvent };
