import { Component, OnInit } from '@angular/core';
import {DtServiceService} from '../dataPersists/dt-service.service';

@Component({
  selector: 'app-save-list',
  templateUrl: './save-list.component.html',
  styleUrls: ['./save-list.component.css']
})
export class SaveListComponent implements OnInit {
  data = this.dt.saveWord
  modData=[]
  constructor(private dt:DtServiceService) { 
    console.log(this.dt.saveWord)
    this.data.forEach(element => {
      this.modData.push("/srch/"+element)
    });
  }

  ngOnInit(): void {
  }


}
