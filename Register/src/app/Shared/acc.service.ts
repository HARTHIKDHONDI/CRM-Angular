import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegModel } from './Acc.model';
@Injectable({
  providedIn: 'root'
})
export class AccService {
  readonly APIUrl="https://localhost:44300/api";
   
  constructor(private http:HttpClient) { }
  
  getRegList():Observable<any>{
    return this.http.get(this.APIUrl+"/Registration/GetAlldata");
  }
  addReg(val:any){
    return this.http.post(this.APIUrl+'/Registration/Insert',val);
  }
  updateReg(val:any){
    return this.http.put(this.APIUrl+'/Registration/upadte',val);
  }

  deleteReg(val:any){
    return this.http.delete(this.APIUrl+'/Registration/Delete/'+val);
  }
}
