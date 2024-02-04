class APIError extends Error {
    private status: number;

    constructor(status: number) {
        super("Status code - " + status);
        this.status = status;
    }

    getStatus() {
        return this.status;
    }
}