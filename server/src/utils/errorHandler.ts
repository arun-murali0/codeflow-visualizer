export class customError extends Error {
	errorMessage: string;
	errorCode: number;

	constructor(errorMessage: string, errorCode: number) {
		super(errorMessage);

		this.name = 'error';
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;

		Object.setPrototypeOf(this, customError.prototype);
	}
}
