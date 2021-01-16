import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.scss']
})
export class Assignment2Component implements OnInit {
  public rawJSON: string;
  public outputJSON: any
  public isShowViewer: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isShowViewer = false;
   } 

  public onConvert(): void {
    if(this.rawJSON) {

      let parsedJSON = JSON.parse(this.rawJSON)
      let objKeys = Object.keys(parsedJSON)
  
      let tempData = parsedJSON[objKeys[0]]
  
      delete parsedJSON[objKeys[0]]
      const index = objKeys.indexOf(objKeys[0]);
  
      if (index > -1) {
        objKeys.splice(index, 1);
      }
  
      let tempArr = []
      objKeys.forEach((el) => {
        parsedJSON[el].forEach(element => {
          tempArr.push(element)
        });
      })
      tempData[0].children = tempArr

      this.outputJSON = tempData

      this.isShowViewer = true
    }
  }

  public onKeyUp(): void {
    if(!this.rawJSON) {
      this.isShowViewer = false
    }
  }
}
