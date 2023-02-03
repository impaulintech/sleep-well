<?php

namespace App\Models;

use App\Models\User;
use App\Models\MainChoice;
use App\Models\MainQuestion;
use App\Models\Recommendation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GivenRecommendation extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function mainQuestions()
    {
        return $this->belongsTo(MainQuestion::class);
    }

    public function mainChoices()
    {
        return $this->belongsTo(MainChoice::class);
    }

    public function recommendations()
    {
        return $this->belongsTo(Recommendation::class);
    }
}
