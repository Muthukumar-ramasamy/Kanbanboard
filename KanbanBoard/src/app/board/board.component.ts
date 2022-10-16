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
      this.Data=data;
      for (const element of data){
        if(element['status']=='Open'){this.open.push(element)}
        else if(element['status']=='Contacted'){this.contacted.push(element)}
        else if(element['status']=='WrittenTest'){this.writtenTest.push(element)}
        else if(element['status']=='CultureFitRound'){this.CultureFit.push(element)}
        else if(element['status']=='TechnicalRound'){this.TechRound.push(element)}
      }
    })
  }

  filter(){
    if(this.input.length>0){
      this.filtered= this.Data.filter((item:any)=>{
        let inp=this.input[0].toUpperCase()+this.input.slice(1);
        return item.first_name.includes(inp)?1:0
      })
      console.log(this.input,this.filtered)
    }

  }

  open = [];
  contacted = [];
  writtenTest=[];
  TechRound = [];
  CultureFit=[];
  input: any;
  Data:any;
  filtered:any;

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
