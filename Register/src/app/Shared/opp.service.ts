import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OppService {
  readonly APIUrl="https://localhost:7276/api";

  constructor(private http:HttpClient) { }
  getOppList():Observable<any[]>
  {
      return this.http.get<any>(this.APIUrl+"/Opportunities")
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
