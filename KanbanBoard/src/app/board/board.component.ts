import { Component, OnInit } from '@angular/core';
import { BoardService } from './board.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private service:BoardService) { }

  ngOnInit() {
    this.service.getCandidate().subscribe((data:any)=>{
      for (var i=0;i<data.length;i++){
        if(data[i]['status']=='Open'){this.open.push(data[i])}
        else if(data[i]['status']=='Contacted'){this.contacted.push(data[i])}
        else if(data[i]['status']=='WrittenTest'){this.writtenTest.push(data[i])}
        else if(data[i]['status']=='CultureFitRound'){this.CultureFit.push(data[i])}
        else if(data[i]['status']=='TechnicalRound'){this.TechRound.push(data[i])}
      }
    })
  }

  open = [];
  contacted = [];
  writtenTest=[];
  TechRound = [];
  CultureFit=[];

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    console.group(this.open, this.contacted,this.writtenTest,this.TechRound,this.CultureFit)
  }

  

}
