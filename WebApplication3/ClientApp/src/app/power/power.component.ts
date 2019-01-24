import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-component',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  showDashboard: boolean;
  showProject: boolean;

  ngOnInit() {
    this.showDashboard = true;
    this.showProject = false;
  }

  toProject() {
    this.showProject = true;
    this.showDashboard = false;
  }

  backToDashboard() {
    this.showProject = false;
    this.showDashboard = true;
  }
}
