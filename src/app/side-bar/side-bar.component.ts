import { Component, OnInit } from '@angular/core';
import {AjaxService} from "../utils/ajax"

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  content;
  ajaxService;
  constructor() {
    this.ajaxService = new AjaxService();
  }

  ngOnInit() {
    this.ajaxService.getData("http://localhost:8080/assignments");
  }

}
