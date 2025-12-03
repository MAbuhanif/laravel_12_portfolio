<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ImageUploadTest extends TestCase
{
    use RefreshDatabase;

    public function test_admin_can_upload_project_image(): void
    {
        $admin = User::factory()->create([
            'is_admin' => true,
        ]);

        $file = UploadedFile::fake()->image('project.jpg');

        $response = $this->actingAs($admin)->post(route('projects.store'), [
            'title' => 'Test Project',
            'slug' => 'test-project',
            'image' => $file,
        ]);

        $response->assertRedirect(route('projects.index'));
        
        // Assert media was added to the project
        $project = \App\Models\Project::where('title', 'Test Project')->first();
        $this->assertNotNull($project);
        $this->assertCount(1, $project->getMedia('images'));
        $this->assertEquals('project.jpg', $project->getFirstMedia('images')->file_name);
    }

    public function test_admin_can_upload_team_member_image(): void
    {
        $admin = User::factory()->create([
            'is_admin' => true,
        ]);

        $file = UploadedFile::fake()->image('member.jpg');

        $response = $this->actingAs($admin)->post(route('team-members.store'), [
            'name' => 'John Doe',
            'role' => 'Developer',
            'image' => $file,
        ]);

        $response->assertRedirect(route('team-members.index'));

        // Assert media was added to the team member
        $teamMember = \App\Models\TeamMember::where('name', 'John Doe')->first();
        $this->assertNotNull($teamMember);
        $this->assertCount(1, $teamMember->getMedia('images'));
        $this->assertEquals('member.jpg', $teamMember->getFirstMedia('images')->file_name);
    }
}
