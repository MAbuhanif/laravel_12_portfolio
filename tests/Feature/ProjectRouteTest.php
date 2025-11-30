<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProjectRouteTest extends TestCase
{
    use RefreshDatabase;

    public function test_admin_can_access_projects_index(): void
    {
        $admin = User::factory()->create([
            'is_admin' => true,
        ]);

        $response = $this->actingAs($admin)->get(route('projects.index'));

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('Admin/Projects/Index')
            ->has('projects')
        );
    }
}
