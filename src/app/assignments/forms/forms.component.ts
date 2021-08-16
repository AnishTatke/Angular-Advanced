import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(@Inject(FormBuilder) private fb: FormBuilder) { }


  registrationForm = this.fb.group({
    employeeName: ['', [Validators.required, Validators.minLength(3)]],
    employeeAddress: this.fb.group({
      street: [''],
      locality: ['', Validators.required],
      city: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]], 
    }),
    employeePhoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    employeeDOB: ['', Validators.required],
    employeeEmail: ['', [Validators.required, Validators.email]],
  })

  get employeeName() {
    return this.registrationForm.get('employeeName');
  }
  
  get employeePhoneNumber() {
    return this.registrationForm.get('employeePhoneNumber');
  }
  get employeeEmail() {
    return this.registrationForm.get('employeeEmail');
  }
  get employeeDOB() {
    return this.registrationForm.get('employeeDOB');
  }
  get locality(){
    return this.registrationForm.get('employeeAddress')?.get('locality');
  }
  get city(){
    return this.registrationForm.get('employeeAddress')?.get('city');
  }
  get pinCode(){
    return this.registrationForm.get('employeeAddress')?.get('pinCode');
  }

  onSubmit(){
    console.log(this.registrationForm.value)
  }
  /*
  registrationForm = new FormGroup({
    employeeName: new FormControl(''),
    employeeAddress: new FormGroup({
      street: new FormControl(''),
      locality: new FormControl(''),
      city: new FormControl(''),
      pinCode: new FormControl(''),
    }),
    employeePhoneNumber: new FormControl(''),
    employeeEmail: new FormControl('')
  });

  */

  

  ngOnInit(): void {
  }

}
