<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Project;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class TeamMember extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\TeamMemberFactory> */
    use HasFactory, InteractsWithMedia;

    protected $with = ['media'];

    protected $fillable = ['project_id', 'name', 'role', 'image', 'bio', 'social_links'];

    protected $casts = [
        'social_links' => 'array',
    ];

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        return $this->getFirstMediaUrl('images');
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * Register the media conversions.
     * This is where you define different sizes/formats for your images.
     */
    public function registerMediaConversions(Media $media = null): void
    {
        // Convert all images to webp format for better performance
        $this->addMediaConversion('webp')
             ->format('webp')
             ->nonQueued(); // Use nonQueued for smaller apps, or queued for larger ones

        // Create a thumbnail version (optional but very useful!)
        $this->addMediaConversion('thumb')
            ->format('webp') // Also make the thumbnail webp
            ->width(300)
            ->height(200)
            ->sharpen(10) // Make it a bit sharper
            ->nonQueued();
    }
}
