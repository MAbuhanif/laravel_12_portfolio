<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Project::with('user', 'teamMembers')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:projects,slug',
            'description' => 'nullable|string',
            'tech_stack' => 'nullable|string',
            'image' => 'nullable|string',
            'url' => 'nullable|url',
            'featured' => 'boolean',
        ]);

        return $request->user()->projects()->create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return $project->load('user', 'teamMembers', 'tasks');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:projects,slug,' . $project->id,
            'description' => 'nullable|string',
            'tech_stack' => 'nullable|string',
            'image' => 'nullable|string',
            'url' => 'nullable|url',
            'featured' => 'boolean',
        ]);

        $project->update($validated);

        return $project;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();

        return response()->noContent();
    }
}
