import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  showDashboard: boolean;
  showProject: boolean;
  showReport: boolean;

  ngOnInit() {
    this.showDashboard = true;
    this.showProject = false;
    this.showReport = false;
  }

  toProject() {
    this.showProject = true;
    this.showDashboard = false;
    this.showReport = false;
  }

  toReport() {
    this.showReport = true;
    this.showDashboard = false;
    this.showProject = false;
  }

  backToDashboard() {
    this.showProject = false;
    this.showDashboard = true;
    this.showReport = false;
  }
}
