<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Project extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory, InteractsWithMedia;

    protected $fillable = ['user_id', 'title', 'slug', 'description', 'tech_stack', 'image', 'url', 'featured'];

    protected $casts = [
        'featured' => 'boolean',
    ];

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        return $this->getFirstMediaUrl('projects');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function teamMembers()
    {
        return $this->hasMany(TeamMember::class);
    }

}
