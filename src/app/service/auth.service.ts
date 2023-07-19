import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // apiurl='http://localhost:3000/user';

  // UpdateUser(id:any, inputdata: any){
  //   return this.http.put(this.apiurl+'/'+id, inputdata);
  // }


}
