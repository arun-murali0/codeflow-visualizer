// custom error handler
export class customError extends Error {
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


