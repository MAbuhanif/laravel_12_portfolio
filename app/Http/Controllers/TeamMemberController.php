<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Illuminate\Http\Request;

class TeamMemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/TeamMembers/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'project_id' => 'nullable|exists:projects,id',
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'image' => 'nullable|image|max:2048',
            'bio' => 'nullable|string',
            'social_links' => 'nullable|array',
        ]);

        // Remove image from validated data since it will be handled by Media Library
        unset($validated['image']);

        $teamMember = TeamMember::create($validated);

        // Handle image upload using Media Library
        if ($request->hasFile('image')) {
            $teamMember->addMediaFromRequest('image')
                ->toMediaCollection('images');
        }

        return redirect()->route('team-members.index')->with('success', 'Team member created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(TeamMember $teamMember)
    {
        return $teamMember->load('project');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TeamMember $teamMember)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TeamMember $teamMember)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'image' => 'nullable|image|max:2048',
            'bio' => 'nullable|string',
            'social_links' => 'nullable|array',
        ]);

        // Remove image from validated data since it will be handled by Media Library
        unset($validated['image']);

        $teamMember->update($validated);

        // Handle image upload using Media Library
        if ($request->hasFile('image')) {
            // Clear old images and add new one
            $teamMember->clearMediaCollection('images');
            $teamMember->addMediaFromRequest('image')
                ->toMediaCollection('images');
        }

        return $teamMember;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TeamMember $teamMember)
    {
        $teamMember->delete();

        return response()->noContent();
    }
}
