import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class CustomLabelComponent implements OnInit {
  @Input() control: AbstractControl
  @Input() messages?: any;

  defaultMessages: any = {
    required: 'This field is required',
    email: 'This should be a valid email ID',
    numeric: 'This should be a numeric value',
    default: 'Something wrong with the value entered'
  }
  constructor() { }

  ngOnInit() {

  }

  getMessages() {
    const errorMessages = [];
    for (let key in this.control.errors) {
      if (this.messages && this.messages[key]) {
        errorMessages.push(this.messages[key]);
      } else {
        errorMessages.push(this.getDefaultMessage(key));
      }
    }
    return errorMessages;
  }

  getDefaultMessage(key) {
    return this.defaultMessages[key] || this.defaultMessages['default'];
  }

}
