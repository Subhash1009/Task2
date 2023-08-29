import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', form.value);
      
    }
  
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  @Input() test:any;
}
