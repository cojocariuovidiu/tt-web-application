import { AsyncValidatorFn, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { DashboardService } from '../../services/dashboard.service';


export function existingMobileNumberValidator(userService: DashboardService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return userService.checkMobile(control.value).map(
        data => {
          return (data.mobile && data.mobile.length > 0) ? {"mobNumExists": true} : null;
        }
      );
    };
} 