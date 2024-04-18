import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  checkoutUrl: any; 
  constructor(private client: HttpClient){
    this.client.get<any>('http://localhost:3000/api/checkout/session').subscribe({
      next: (data)=>{
        // console.log(data);
        this.checkoutUrl = data.checkoutUrl
        window.location.href = this.checkoutUrl;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}
