<?php

namespace App\Models;

use App\Models\PreChoice;
use App\Models\MainChoice;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MainQuestion extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function mainChoices()
    {
        return $this->hasMany(MainChoice::class);
    }

    public function preChoices()
    {
        return $this->belongsTo(PreChoice::class);
    }
}
