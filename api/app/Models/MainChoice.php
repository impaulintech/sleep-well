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

    public function recommendations()
    {
        return $this->hasMany(Recommendation::class);
    }

    public function mainQuestions()
    {
        return $this->belongsTo(MainQuestion::class);
    }
}
