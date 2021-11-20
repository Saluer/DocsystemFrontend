import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-document-view",
  templateUrl: "./document-view.component.html",
  styleUrls: ["./document-view.component.scss"],
})
export class DocumentViewComponent implements OnInit {
  id: number | undefined;
  private subscription: Subscription;
  assignment: Assignment;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.id = params["id"];
      fetch("http://localhost:8080/api/assignments/" + this.id)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          this.assignment = result;
          console.log(this.assignment);
        });
    });
    console.log(this.subscription);
  }
}
