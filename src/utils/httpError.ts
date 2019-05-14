class HttpError extends Error {
    public status: number;
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}

function isHttpError(e: any): e is HttpError {
    return typeof e === 'object' && typeof e.status === 'number' && e.message;
}

export { HttpError, isHttpError };
