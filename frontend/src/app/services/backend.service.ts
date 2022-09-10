import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }

  signUp(data:any){
    return this.http.post('http://127.0.0.1:8000/api/signup',data);
  }

  login(data:any){
    return this.http.post('http://127.0.0.1:8000/api/login',data);
  }

  /////////////projects
  submitProject(data:any){
    return this.http.post('http://127.0.0.1:8000/api/projects',data);
  }

  updateProject(id:any,data:any){
    return this.http.put('http://127.0.0.1:8000/api/projects/'+id,data);
  }
  
  fetchAllProjects(){
    return this.http.get('http://127.0.0.1:8000/api/projects');
  }

  deleteProject(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/projects/'+id);
  }

  fetchProjectRecord(id:any){
    return this.http.get('http://127.0.0.1:8000/api/projects/'+id);
  }
}
