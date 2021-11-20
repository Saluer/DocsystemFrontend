import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-assignment-form",
  templateUrl: "./create-assignment-form.component.html",
  styleUrls: ["./create-assignment-form.component.scss"],
})
export class CreateAssignmentFormComponent {
  assignment: assignment;
  constructor() {
    this.assignment = {
      subject: "",
      authorId: -1,
      deadline: null,
      controlSign: false,
      operateSign: false,
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
