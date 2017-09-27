import { Component, OnInit } from '@angular/core';
import { quickSort } from './algos/quicksort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  lines: number[] = [];

  constructor() {}

  ngOnInit() {
  
    for (let i = 0; i < 600; i++) {
      this.lines[i] = i;
    }
    
    this.lines = this.shuffle(this.lines);

    // this.lines = [6, 7, 1, 5, 0, 3, 9, 8, 2, 4];
    
  }
  
  toggleSimu():void {
    // javascript array.sort
    // let sortedArray: number[] = this.lines.sort((n1,n2) => n1 - n2);

    // Breaks reference for the array so that changes are registered
    console.log(this.lines);
    this.lines = quickSort(this.lines, [], []).map(function(num) {
      return num;
    });

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

}
