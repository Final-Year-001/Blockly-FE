const Config = {
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    getConsoleURL: (name: string) => `wss://api-blockly-research-dev.dehemi.com/api/v1/sandbox/${name}/log`
}

export default Config;