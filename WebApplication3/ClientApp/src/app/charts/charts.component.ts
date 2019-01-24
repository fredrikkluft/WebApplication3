import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
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
