import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {

  buttonClickStatus:boolean = false;
  totalLength:number=100;
  selectedCardId:number=0;
  startNumber:number=0;
  endNumber:number=0;
  nextNumber:number=0;
  nextLastNumber:number=0;
  globalClickCounter:number=0;

  constructor() { }

  ngOnInit(): void {
    if(this.endNumber<=this.totalLength){
      this.startNumber = 0;
      this.endNumber = 6;
    }
  }

  range(start: number, end: number): number[] {
    return Array(end - start + 1).fill(0).map((_, index) => start + index);
  }

  onButtonClick(selectedCardValue:number):void{
    this.selectedCardId = selectedCardValue;
    this.endNumber = selectedCardValue;
    alert("Select Card "+this.selectedCardId);
    this.buttonClickStatus = true;
  }

  onRigthArrowClick():void{
    this.nextNumber = (this.endNumber+1);
    this.nextLastNumber = (this.nextNumber+6);
    if(this.nextLastNumber<=this.totalLength){
      this.startNumber = this.nextNumber;
      this.endNumber = this.nextLastNumber;
    }
  }

  onLeftArrowClick():void{
    this.nextNumber = (this.startNumber-6)-1;
    this.nextLastNumber = this.startNumber-1;
    if(this.nextNumber>=0 && this.nextLastNumber>=0){
      this.startNumber = this.nextNumber;
      this.endNumber = this.nextLastNumber;
    }
  }
  
}
