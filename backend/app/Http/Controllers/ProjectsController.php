<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Project= Project::all();
        return response()->json($Project);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Project = new Project;
        $Project->pname       = $request->pname;
        $Project->ptype      = $request->ptype;
        $Project->ptechnology      = $request->ptechnology;
       
        $Project->save();
        return response()->json(['message'=>"Project Add Successfully...", 'Project'=>$Project,"statusCode"=>200]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        return response()->json($project);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $Project)
    {
        // $Project = Project::find($id);
        // $Project->pname = $request->get('pname');
        // $Project->ptype = $request->get('ptype');
        // $Project->ptechnology = $request->get('ptechnology');
        // $Project->update();

       $Project->update($request->all());
        return response()->json(['message'=>"Project Update Successfully...", 'Project'=>$Project,"statusCode"=>200]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        $project->delete();
    }
}
