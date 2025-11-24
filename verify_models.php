<?php

use App\Models\User;
use App\Models\Team;
use App\Models\Project;
use App\Models\Task;

// Create a user
$user = User::factory()->create();

// Create a team owned by user
$team = Team::create([
    'name' => 'Test Team',
    'slug' => 'test-team',
    'owner_id' => $user->id,
]);

// Add user to team
$team->members()->attach($user, ['role' => 'owner']);

// Create a project in team
$project = Project::create([
    'name' => 'Test Project',
    'team_id' => $team->id,
]);

// Create a task in project assigned to user
$task = Task::create([
    'name' => 'Test Task',
    'project_id' => $project->id,
    'assigned_to' => $user->id,
]);

echo "User created: " . $user->name . "\n";
echo "Team created: " . $team->name . "\n";
echo "Project created: " . $project->name . "\n";
echo "Task created: " . $task->name . "\n";

echo "User teams count: " . $user->teams->count() . "\n";
echo "Team members count: " . $team->members->count() . "\n";
echo "Team projects count: " . $team->projects->count() . "\n";
echo "Project tasks count: " . $project->tasks->count() . "\n";
echo "Task assignee: " . $task->assignee->name . "\n";
