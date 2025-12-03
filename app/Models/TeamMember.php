<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Project;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class TeamMember extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\TeamMemberFactory> */
    use HasFactory, InteractsWithMedia;

    protected $fillable = ['project_id', 'name', 'role', 'image', 'bio', 'social_links'];

    protected $casts = [
        'social_links' => 'array',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
