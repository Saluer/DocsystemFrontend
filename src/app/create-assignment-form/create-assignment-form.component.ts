import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-assignment-form",
  templateUrl: "./create-assignment-form.component.html",
  styleUrls: ["./create-assignment-form.component.scss"],
})
export class CreateAssignmentFormComponent implements OnInit {
  assignment: {
    subject;
    author;
    operators;
    deadline;
    controlSign;
    executeSign;
    content;
  };
  constructor() {
    this.assignment = {
      subject: "",
      author: "",
      operators: "",
      deadline: "",
      controlSign: "",
      executeSign: "",
      content: "",
    };
  }

  ngOnInit() {}
}
