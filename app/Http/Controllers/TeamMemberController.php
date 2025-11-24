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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'image' => 'nullable|string',
            'bio' => 'nullable|string',
            'social_links' => 'nullable|array',
        ]);

        return TeamMember::create($validated);
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
            'image' => 'nullable|string',
            'bio' => 'nullable|string',
            'social_links' => 'nullable|array',
        ]);

        $teamMember->update($validated);

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
