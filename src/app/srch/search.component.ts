import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DtServiceService} from '../dataPersists/dt-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  srch=""
  srchResults=[]

  
  constructor(private http: HttpClient, private dt:DtServiceService){}

  ngOnInit() {
    
  }
  
  search(){
    //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
    var org = this.srch
    var rep = this.srch.replace(" ", "+");
    console.log(rep)
    this.http.get<any>(`https://pixabay.com/api/?key=17235851-fe2385c0b477a0cda544caa62&q=${rep}&image_type=photo`).subscribe(data => {
        console.log(data)
        this.srchResults=[]
        var totl = data.totalHits/3
        console.log(data.totalHits)
        var cnt=0
        for(var i=0;i<data.hits.length;i++){
          var imgs = []
          if(cnt>=data.hits.length){
            break;
          }
          for(var j=0;j<3;j++){
            
            imgs.push(data["hits"][cnt])
            cnt++
            if(cnt>=data.hits.length){
              break;
            }
          }
          this.srchResults.push(imgs)
          
        }
        console.log("array")
        console.log(this.srchResults)
        console.log(this.srchResults.length)
        this.dt.saveSearch[org]=this.srchResults
        this.dt.saveWord.push(org)
        console.log(this.dt.saveWord)
        console.log(this.dt.saveSearch)
        console.log(this.dt.saveSearch[org])

    })
    this.srch=""
    
    
  }

}
