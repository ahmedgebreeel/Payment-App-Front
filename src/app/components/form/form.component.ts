import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor(private client : HttpClient) {}
  paymentForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    amount: new FormControl('', [Validators.required]),
  });

  submitForm() {
    if (this.paymentForm.valid) {
      // Send user data to backend server
      const userData = this.paymentForm.value;
      console.log('User data:', userData);
      this.client.post<any>('http://localhost:3000/api/checkout/session', userData).subscribe({
        next: (data)=>{
          console.log(data);
          window.location.href = data.checkoutUrl;
        },
        error: (err)=>{
          console.log(err);
        }
      })

      
    }
  }
}
