import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-assignment-form",
  templateUrl: "./create-assignment-form.component.html",
  styleUrls: ["./create-assignment-form.component.scss"],
})
//TODO Добавить xhr запросы
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
  onSubmit() {
    let formData = new FormData();
    for (let entry in this.assignment) {
      formData.append(entry, this.assignment[entry]);
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/api/assignments/create");
    xhr.send(formData);

    xhr.onload = () => alert(xhr.response);
  }
}
