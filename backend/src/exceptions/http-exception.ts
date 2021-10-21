export default class HttpException extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export class BadRequest extends HttpException {

  constructor(message: string) {
    super(400, message)
  }
}

export class Unauthorized extends HttpException {

  constructor(message: string) {
    super(401, message)
  }
}

export class Forbidden extends HttpException {

  constructor(message: string) {
    super(403, message)
  }
}

export class NotFound extends HttpException {

  constructor(message: string) {
    super(404, message)
  }
}

export class NotAcceptable extends HttpException {

  constructor(message: string) {
    super(406, message)
  }
}

export class RequestTimeout extends HttpException {

  constructor(message: string) {
    super(408, message)
  }
}

export class ImATeapot extends HttpException {

  constructor(message: string) {
    super(418, message)
  }
}

export class InternalServerError extends HttpException {

  constructor(message: string) {
    super(500, message)
  }
}

export class NotImplemented extends HttpException {

  constructor(message: string) {
    super(501, message)
  }
}

export class ServiceUnavailable extends HttpException {

  constructor(message: string) {
    super(503, message)
  }
}

export class badRequestError extends HttpException {

  constructor(message: string) {
    super(400, message)
  }
}
