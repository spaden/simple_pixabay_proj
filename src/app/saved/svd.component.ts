import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DtServiceService} from '../dataPersists/dt-service.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-svd',
  templateUrl: './svd.component.html',
  styleUrls: ['./svd.component.css']
})
export class SvdComponent implements OnInit {

  constructor(private dt:DtServiceService, private route: ActivatedRoute) { }
  srch=""
  data:any
  ngOnInit(): void {
    this.srch = this.route.snapshot.params['id']
    console.log(this.srch)
    console.log(this.dt.saveSearch[this.srch])
    this.data = this.dt.saveSearch[this.srch]
  }

}
