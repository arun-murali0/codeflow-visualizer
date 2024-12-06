// custom error handler
class customError extends Error {
	errorMessage: string;
	errorcode: number;

	constructor(errorMessage: string, errorCode: number = 500) {
		super(errorMessage);
		this.name = 'customError';
		this.errorMessage = errorMessage;
		this.errorcode = errorCode;

		Object.setPrototypeOf(this, new.target.prototype);
	}
}

// validation error
class validationError extends customError {
	constructor(message: string) {
		super(message, 400);
		{
			this.name = 'validation Error';
		}
	}
}

// Not found error
class NotFoundError extends customError {
	constructor(message: string) {
		super(message, 404);
		{
			this.name = 'Not found';
		}
	}
}
