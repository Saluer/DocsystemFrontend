import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-assignment-form",
  templateUrl: "./create-assignment-form.component.html",
  styleUrls: ["./create-assignment-form.component.scss"],
})
//TODO Добавить xhr запросы
export class CreateAssignmentFormComponent {
  assignment: {
    subject;
    authorId: number;
    operators;
    deadline;
    controlSign;
    executeSign;
    content;
  };
  constructor() {
    this.assignment = {
      subject: "",
      authorId: -1,
      operators: "",
      deadline: "",
      controlSign: "",
      executeSign: "",
      content: "",
    };
  }

  onSubmit() {
    let formData = new FormData();
    for (let entry in this.assignment) {
      console.log(this.assignment[entry]);
      formData.append(entry, this.assignment[entry]);
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/api/assignments/create");
    xhr.send(formData);

    xhr.onload = () => alert(xhr.response);
  }
}
