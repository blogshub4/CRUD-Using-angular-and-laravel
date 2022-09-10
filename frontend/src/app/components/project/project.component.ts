import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  isEdit:boolean=false;
  isID:boolean=false;
  title:string="Add";
  button:string="Submit";
  public form={
    pname:"",
    ptype:"",
    ptechnology:""
  }

  constructor(private backendService:BackendService) { }
  public error:any = [];
  public msg: any = null;
  public updatemsg:any = null;
  public getProjectData:any = [];
  public getProjectRecord:any =[];

  ngOnInit(): void {
    this.fetchAllProjects();
  }

  fetchAllProjects(){
    return this.backendService.fetchAllProjects().subscribe(
       data=>this.getProjectData=data,
       error=>this.error = error.error.errors,
     );
  }

  submitProject(projectSubmitForm:NgForm){
    if(this.isEdit){
      // console.log("Update="+ JSON.stringify(this.form)+this.isID);
       return this.backendService.updateProject(this.isID,this.form).subscribe(
          data=>this.handleUpdateResponse(data,projectSubmitForm),
          error=>this.handleError(error),
        );
     }else{
      return this.backendService.submitProject(this.form).subscribe(
        // data=>console.log(data),
         data=>this.handleResponse(data,projectSubmitForm),
         error=>this.handleError(error),
       );
      }
  }

  handleUpdateResponse(data:any,projectSubmitForm:any){
    if (data.statusCode === 200) {
      this.updatemsg = 'success';
      this.fetchAllProjects();
      }
  }

  handleResponse(data:any,projectSubmitForm:any){
    if (data.statusCode === 200) {
      projectSubmitForm.resetForm();
      this.msg = 'success';
      this.fetchAllProjects();
      }
  }

  handleError(error:any){
    this.error = error.error.errors;
  }

  deleteProject(id:any){
    return this.backendService.deleteProject(id)
        .subscribe(response => {
          alert("Record Delete Successfully");
          this.fetchAllProjects();
        });
  }

  editProject(id:any){
    this.isID=id;
    this.isEdit=true;
    this.title="Edit";
    this.button="Edit";
    return this.backendService.fetchProjectRecord(id).subscribe(
      data=>{
        this.getProjectRecord=data;
        this.form.pname=this.getProjectRecord.pname;
        this.form.ptype=this.getProjectRecord.ptype;
        this.form.ptechnology=this.getProjectRecord.ptechnology;
       // console.log("Fetch" + JSON.stringify(data))
      },
       error=>this.error = error.error.errors,
     );
  }
  // refreshProject(): void {
  //   this.fetchAllProjects();
  // }

}
