import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrls: ['./servicedetails.component.css']
})
export class ServicedetailsComponent implements OnInit {


  id;
  service:"";
  discription:"";
  constructor(private rout:ActivatedRoute) { 
   this.id= this.rout.snapshot.params.id;
    this.service=this.rout.snapshot.params.service;
    this.discription=this.rout.snapshot.params.discription;


  }

  ngOnInit() {
  }

}
