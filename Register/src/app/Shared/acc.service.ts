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
  
  getmethod():Observable<any>{
    return this.http.get(this.APIUrl+"/Account")
  }
  updateaccount(val:any){
return this.http.put(this.APIUrl+"/Account/Update",val)
  }
  insert(val:any){
    return this.http.post(this.APIUrl+"/Account/Insert",val)
  }
}
