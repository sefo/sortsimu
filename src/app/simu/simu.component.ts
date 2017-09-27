import { Component, OnChanges, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-simu',
  templateUrl: './simu.component.html',
  styleUrls: ['./simu.component.scss']
})
export class SimuComponent implements OnChanges {

  @Input() lines: number[];
  @ViewChild('simu') simuRef: ElementRef;

  constructor() { }

  ngOnChanges() {

    let ctx: CanvasRenderingContext2D = this.simuRef.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, 600, 600);

    ctx.beginPath();
    ctx.fillStyle = '#DD0031';
    for (let i = 0 ; i < 600 ; i++) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, this.lines[i]);
      ctx.stroke();
    }

  }

}
