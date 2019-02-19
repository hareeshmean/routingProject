import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-websettings',
  templateUrl: './websettings.component.html',
  styleUrls: ['./websettings.component.css']
})
export class WebsettingsComponent implements OnInit {

  constructor(private rout:Router) { }

  ngOnInit() {
  }
  clickme(){

this.rout.navigate(["/login"])
  }

}
