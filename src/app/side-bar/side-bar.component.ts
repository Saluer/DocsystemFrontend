import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent implements OnInit {
  organization: Organization;
  allEmployees: Employees;
  allAssignments: Assignments;
  assignmentsToMe: Assignments;
  assignmentsFromMe: Assignments;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    fetch("http://localhost:8080/api/organizations/1")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.organization = result;
        console.log(this.organization);
      });

    fetch("http://localhost:8080/api/employees")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.allEmployees = result;
        console.log(this.allEmployees);
      });

    fetch("http://localhost:8080/api/assignments")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.allAssignments = result;
        console.log(this.allAssignments);
      });

    fetch("http://localhost:8080/api/assignments/from/me")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.assignmentsFromMe = result;
        console.log(this.assignmentsFromMe);
      });

    fetch("http://localhost:8080/api/assignments/to/me")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.assignmentsToMe = result;
        console.log(this.assignmentsToMe);
      });
  }
}
