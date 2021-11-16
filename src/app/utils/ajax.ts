export class AjaxService {
  getData(url: string) {
    // create XHR object
    let xml = new XMLHttpRequest();
    // the function with the 3 parameters
    xml.open("GET", url, true);
    // the function called when an xhr transaction is completed
    xml.onload = function () {
      if (this.status == 200) {
        console.log("Успешное обращение на сервер!");
      }
      console.log(this.status)
    };
    // the function that sends the request
    xml.send();
  }
}
