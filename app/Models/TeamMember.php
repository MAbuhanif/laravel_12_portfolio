<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Project;

class TeamMember extends Model
{
    /** @use HasFactory<\Database\Factories\TeamMemberFactory> */
    use HasFactory;

    protected $fillable = ['project_id', 'name', 'role', 'image', 'bio', 'social_links'];

    protected $casts = [
        'social_links' => 'array',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
