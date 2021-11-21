import { Component, OnInit } from "@angular/core";
import { ASSIGNMENTS_API_URL, CREATE_URL_ADDITION } from "src/app/share/constants";

@Component({
  selector: "app-create-assignment-form",
  templateUrl: "./create-assignment-form.component.html",
  styleUrls: ["./create-assignment-form.component.scss"],
})
export class CreateAssignmentFormComponent implements OnInit {
  assignment: Assignment;
  constructor() {}
  ngOnInit(): void {
    //? Нужно что-то с этим делать
    this.assignment = {
      id: -1,
      subject: "",
      author: {
        id: -1,
        firstname: "",
        surname: "",
        patronymic: "",
        position: "",
      },
      deadline: "",
      controlSign: null,
      operateSign: null,
    };
  }

  onSubmit() {
    let formData = new FormData();
    for (let entry in this.assignment) {
      formData.append(entry, this.assignment[entry]);
      //TODO хорошо бы позаботиться о костыле
      formData.append("authorId", this.assignment.author.id.toString());
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", ASSIGNMENTS_API_URL + CREATE_URL_ADDITION);
    xhr.send(formData);

    xhr.onload = () => alert(xhr.response);
  }
}
