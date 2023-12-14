import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit{
  bills: any;
  customerId!: number
  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    this.customerId = activatedRoute.snapshot.params["customerId"];
  }
  ngOnInit(): void {
    if(this.customerId)
    this.http.get("http://localhost:8080/BILLING-SERVICE/bills/customer/" + this.customerId).subscribe({
      next: (data)=>{this.bills = data;},
      error: (err)=>{}
    })
    else
      this.http.get("http://localhost:8080/BILLING-SERVICE/bills").subscribe({
        next: (data)=>{this.bills = data;},
        error: (err)=>{}
      })
  }
  getBillDetails(bill: any){
    this.router.navigateByUrl("/bills/" + bill.id)
  }
}
