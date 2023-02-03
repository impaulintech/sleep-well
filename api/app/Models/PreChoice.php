<?php

namespace App\Models;

use App\Models\PreQuestion;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PreChoice extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function mainQuestions()
    {
        return $this->hasMany(MainQuestion::class);
    }

    public function preQuestions()
    {
        return $this->belongsTo(PreQuestion::class);
    }
}
