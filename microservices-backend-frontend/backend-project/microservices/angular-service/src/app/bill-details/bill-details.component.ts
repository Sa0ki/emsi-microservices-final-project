import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit{
  bill: any
  billId!: number
  constructor(private htttp: HttpClient, private activatedRoute: ActivatedRoute) {
    this.billId = activatedRoute.snapshot.params["billId"];
  }
  ngOnInit(): void {
    this.htttp.get("http://localhost:8080/BILLING-SERVICE/bills/" + this.billId).subscribe({
      next: (data)=> this.bill = data,
      error: (err) => {}
    })
  }
}
