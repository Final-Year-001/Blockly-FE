class APIError extends Error {
    private status: number;

    constructor(status: number) {
        super("Status code - " + status);
        this.status = status;
    }

    getStatus() {
        return this.status;
    }

    isUnauthorized() {
        return this.status == 401;
    }

    isForbidden() {
        return this.status == 403;
    }
}

export default APIError;