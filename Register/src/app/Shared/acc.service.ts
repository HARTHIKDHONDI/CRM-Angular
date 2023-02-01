import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegModel } from './Acc.model';
import { APImainService } from './apimain.service';
@Injectable({
  providedIn: 'root'
})
export class AccService {
  
   
  constructor(private http:HttpClient,private ApiService:APImainService) { }
  readonly APIUrl=this.ApiService.APIUrlmain;
  
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
