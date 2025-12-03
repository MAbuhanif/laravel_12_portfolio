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
        return \Inertia\Inertia::render('Admin/Projects/Index', [
            'projects' => Project::with('user', 'teamMembers')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Projects/Create');
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
            'image' => 'nullable|image|max:2048',
            'url' => 'nullable|url',
            'featured' => 'boolean',
        ]);

        // Remove image from validated data since it will be handled by Media Library
        unset($validated['image']);

        $project = $request->user()->projects()->create($validated);

        // Handle image upload using Media Library
        if ($request->hasFile('image')) {
            $project->addMediaFromRequest('image')
                ->toMediaCollection('images');
        }

        return redirect()->route('projects.index')->with('success', 'Project created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return $project->load('user', 'teamMembers');
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
            'image' => 'nullable|image|max:2048',
            'url' => 'nullable|url',
            'featured' => 'boolean',
        ]);

        // Remove image from validated data since it will be handled by Media Library
        unset($validated['image']);

        $project->update($validated);

        // Handle image upload using Media Library
        if ($request->hasFile('image')) {
            // Clear old images and add new one
            $project->clearMediaCollection('images');
            $project->addMediaFromRequest('image')
                ->toMediaCollection('images');
        }

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
