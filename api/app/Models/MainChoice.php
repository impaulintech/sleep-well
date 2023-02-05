<?php

namespace App\Models;

use App\Models\MainQuestion;
use App\Models\Recommendation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MainChoice extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $hidden = ['created_at', 'updated_at'];

    public function recommendations()
    {
        return $this->hasMany(Recommendation::class);
    }

    public function mainQuestion()
    {
        return $this->belongsTo(MainQuestion::class);
    }
}
