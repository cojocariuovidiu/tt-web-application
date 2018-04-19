import { AuthorizationService } from '../../services/authorization.service';
import { AsyncValidatorFn, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

export function existingMobileNumberValidator(userService: AuthorizationService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return userService.checkMobile(control.value).map(
        data => {
          return (data.mobile && data.mobile.length > 0) ? {"mobNumExists": true} : null;
        }
      );
    };
} 