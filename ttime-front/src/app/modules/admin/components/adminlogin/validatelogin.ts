import { AdminService } from '../../services/admin.service';
import { AsyncValidatorFn, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


   export function existingEmailValidator(userService: AdminService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return userService.checkAdminEmail(control.value).map(
        data => {
          return (!data.email) ? {"emailAddExists": true} : null;
        }
      );
    };
  } 

