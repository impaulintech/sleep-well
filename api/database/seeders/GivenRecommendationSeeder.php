<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\PreChoice;
use App\Models\MainChoice;
use App\Models\PreQuestion;
use App\Models\MainQuestion;
use App\Models\Recommendation;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\GivenRecommendation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class GivenRecommendationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // foreach (User::all() as $user) {
        //     foreach (PreQuestion::all() as $preQuestion) {
        //         foreach (PreChoice::all() as $preChoice) {
        //             foreach (MainQuestion::all() as $mainQuestion) {
        //                 foreach (MainChoice::all() as $mainChoice) {
        //                     foreach (Recommendation::all() as $recommendation) {
        //                         GivenRecommendation::factory(10)->create([
        //                             "main_question_id" => $mainQuestion->id,
        //                             "main_choice_id" => $mainChoice->id,
        //                             "recommended_id" => $recommendation->id
        //                         ]);
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
    }
}
