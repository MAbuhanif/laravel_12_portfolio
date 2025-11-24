<?php

use App\Models\User;
use App\Models\Project;
use App\Models\TeamMember;

// Create a user
$user = User::factory()->create();

// Create a project owned by user
$project = Project::create([
    'title' => 'Test Project',
    'slug' => 'test-project-' . uniqid(),
    'description' => 'This is a test project',
    'tech_stack' => 'PHP, Laravel, MySQL',
    'image' => 'test-image.jpg',
    'url' => 'https://test-project.com',
    'featured' => true,
    'user_id' => $user->id,
]);

// Create a team member for the project
$member = TeamMember::create([
    'project_id' => $project->id,
    'name' => 'John Doe',
    'role' => 'Developer',
    'bio' => 'Full stack developer',
    'social_links' => ['twitter' => '@johndoe', 'github' => 'johndoe'],
]);

echo "User created: " . $user->name . "\n";
echo "Project created: " . $project->title . "\n";
echo "Team Member created: " . $member->name . "\n";

echo "Project team members count: " . $project->teamMembers->count() . "\n";
echo "Team member project: " . $member->project->title . "\n";
