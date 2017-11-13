import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidateService } from './validate.service';

@Directive({
  selector: '[appControlValidate]'
})
export class ControlValidateDirective {
  @Input('appControlValidate') control: any;

  constructor(
    private validateService: ValidateService,
    private element: ElementRef
  ) {
    debugger;
  }

}
