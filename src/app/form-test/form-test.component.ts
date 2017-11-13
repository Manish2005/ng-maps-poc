import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit {

  form: FormGroup;
  errorMessages: any;
  constructor(
    private formBuilder: FormBuilder,
    private utilService: UtilService
  ) {
    this.errorMessages = {
      firstName: {
        required: 'First name is required',
        minlength: 'Minimum length for first name is 5'
      },
      lastName: {
        required: 'Last name is required',
        minlength: 'Minimum length for last name is 5'
      }
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['sd', [Validators.required, Validators.minLength(5)]],
      middleName: [''],
      lastName: ['', Validators.required],
      phone: [''],
      email: ['', Validators.email],
      address: [''],
      age: [null]
    });
  }

  submitForm() {
    if (this.form.valid) {
      alert("Form submitted succesfully");
    } else {
      // this.utilService.markAsTouched(this.form);
      this.utilService.markAsTouched(this.form);
    }
  }

  resetForm() {
    this.form.reset();
  }

}
