import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-document-view",
  templateUrl: "./document-view.component.html",
  styleUrls: ["./document-view.component.scss"],
})
//TODO подумать, нужно ли тут разделение и как справляться с контекстным меню
export class DocumentViewComponent implements OnInit {
  id: number | undefined;
  // private subscription: Subscription;
  assignments: Assignments;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      this.assignments = [];
      let url = "http://localhost:8080/api/assignments/";
      if (this.id) url = url + this.id;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          if (Array.isArray(result)) {
            this.assignments = result;
          } else {
            this.assignments.push(result);
          }
        });
    });
  }
}
