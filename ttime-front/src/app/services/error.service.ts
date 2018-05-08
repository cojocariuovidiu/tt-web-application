import { Injectable, ErrorHandler, EventEmitter } from '@angular/core';

@Injectable()
export class ErrorService implements ErrorHandler {

  errorOccurred = new EventEmitter<Error>();
  constructor() { }

  handleError(error) {
    // console.log(error);
    this.errorOccurred.emit(error);
    throw error;
 }

}
