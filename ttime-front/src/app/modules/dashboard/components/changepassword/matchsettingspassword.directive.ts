import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';;

@Directive({
  selector: '[matchPassword][formControlName],[matchPassword][formControl],[matchPassword][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => MatchsettingspasswordDirective), multi: true }
  ]
})

export class MatchsettingspasswordDirective {

  constructor(
    @Attribute('matchPassword') public matchPassword: string,
    @Attribute('reverse') public reverse: string) {
  }

  private get isReverse() {
    if (!this.reverse) return false;
    return this.reverse === 'true' ? true: false;
  }

  validate(c: AbstractControl): { [key: string]: any } {
    // self value
    let v = c.value;

    // control vlaue
    let e = c.root.get(this.matchPassword);

    // value not equal
    if (e && v !== e.value && !this.isReverse) {
      return {
        matchPassword: false
      }
    }

    // value equal and reverse
    if (e && v === e.value && this.isReverse) {
      delete e.errors['matchPassword'];
      if (!Object.keys(e.errors).length) e.setErrors(null);
    }

    // value not equal and reverse
    if (e && v !== e.value && this.isReverse) {
      e.setErrors({ matchPassword: false });
    }
    
    return null;
  }

}
