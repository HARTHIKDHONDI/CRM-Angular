import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APImainService } from './apimain.service';

@Injectable({
  providedIn: 'root'
})
export class OppService {
  

  constructor(private http:HttpClient,private ApiService:APImainService) { }
  readonly APIUrl=this.ApiService.APIUrlmain;
  getOppList():Observable<any[]>
  {
      return this.http.get<any>(this.APIUrl+"/Opportunities/GetAlldata")
  }
  addOpportunity(val:any){
    return this.http.post(this.APIUrl+"/Opportunities/Insert",val)
  }

  updateOpportunity(val:any){
    return this.http.put(this.APIUrl+"/Opportunities/Update",val)
  }

  deleteOpportunity(val:any){
    return this.http.delete(this.APIUrl+"/Opportunities/Delete?id="+val)
  }
}
