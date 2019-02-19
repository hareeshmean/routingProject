import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {


  details=[{
    id:1,
    service:"service1",
    discription:"Java DEveloper"
  },
{
  id:2,
    service:"service2",
    discription:"Ui Developer" 
},
  {
    id:3,
    service:"service3",
    discription:"Tester"
  }]
  constructor(private rout:Router) { }

  ngOnInit() {
  }
  chiledone(items){

   this.rout.navigate(["/services",items.id,items.service,items.discription]);
  }
}
