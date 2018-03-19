import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  lines: number[] = [];
  @ViewChild('simu') simuRef: ElementRef;

  constructor() {}

  ngOnInit() {
  
    for (let i = 0; i < 600; i++) {
      this.lines[i] = i;
    }
    
    this.lines = this.shuffle(this.lines);
	  this.draw(this.lines);

    // this.lines = [6, 7, 1, 5, 0, 3, 9, 8, 2, 4];
    
  }
  
  toggleSimu():void {
    // let sortedArray: number[] = this.lines.sort((n1,n2) => n1 - n2);
    this.lines = this.quickSort(this.lines, [], []).map((num) => num);
  }

  shuffle(array): number[] {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }

  quickSort(initArray, metaLeft, metaRight) {
    if (initArray.length <= 1) { 
        return initArray;
    } else {
        var left = [];
        var right = [];
        var newArray = [];
        var pivot = initArray.pop();
        var length = initArray.length;

        for (var i = 0; i < length; i++) {
            if (initArray[i] <= pivot) {
                left.push(initArray[i]);
            } else {
                right.push(initArray[i]);
            }
        }
        // console.log([].concat(metaLeft, left, pivot, right, metaRight));
        this.wait();
        this.draw([].concat(metaLeft, left, pivot, right, metaRight));
        var sortedLeft = this.quickSort(left, metaLeft, [pivot].concat(right, metaRight))
        var sortedRight = this.quickSort(right, metaLeft.concat(sortedLeft, pivot), metaRight)
        return newArray.concat(sortedLeft, pivot, sortedRight);
    }
  }

  draw(lines) {
    let ctx: CanvasRenderingContext2D = this.simuRef.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, 600, 600);
    ctx.beginPath();
    ctx.fillStyle = '#DD0031';
    for (let i = 0 ; i < 600 ; i++) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, lines[i]);
      ctx.stroke();
    }
  }

  async wait() {
    await new Promise(res => setTimeout(res, 500));
  }

}
