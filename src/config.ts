const Config = {
    baseURL: "https://api.blockly.research.dev.dehemi.com/api/v1",
    getConsoleURL: (name: string) => `wss://api.blockly.research.dev.dehemi.com/api/v1/sandbox/${name}/log`
}

export default Config;