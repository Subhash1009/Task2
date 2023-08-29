import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css']
})
export class RFormComponent {
  regForm = new FormGroup({
    uname: new FormControl("Subhash", [Validators.required, Validators.maxLength(8)]),
    email: new FormControl("test@gmail.com", [Validators.required, Validators.email])
  })
  Submit() {
    if (this.regForm.valid) {
      const formData = this.regForm.value;
      console.log(formData);
      console.log(this.regForm);
    } else {
      console.log('Please enter details')
    }
  }
}


