import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  login(value: any) {
    throw new Error('Method not implemented.');
  }
  getUsers() {
    throw new Error('Method not implemented.');
  }
  private baseUrl:string = "http://localhost:3000"

  constructor(private http: HttpClient) { }


//------------------------post Data------------------------------
  

    postData(url: string, data: any, queryParams = {}) {
    let fullUrl = this.baseUrl + url
    let options  = {
      headers : {
        "Accept" : "application/json"
      },
     params: queryParams
    }

    return this.http.post(fullUrl,data,options)
  }

//--------------------------get data--------------------------------

  getData(url: string, queryParams = {}){
    let fullUrl = this.baseUrl + url
    let options = { headers: { "Accept" : "application/json"},params: queryParams}

    return this.http.get(fullUrl,options)
  }


}
