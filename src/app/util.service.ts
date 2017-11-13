import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Injectable()
export class UtilService {

  constructor() { }

  markAsTouched(control) {
    control.markAsTouched();
    if (control.controls) {
      if (Array.isArray(control.controls)) {
        control.controls.forEach((item) => {
          this.markAsTouched(item);
        });
      } else {
        for (let key in control.controls) {
          this.markAsTouched(control.controls[key]);
        }
      }
    }
  }
}
