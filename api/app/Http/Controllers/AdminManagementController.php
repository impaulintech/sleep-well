<?php

namespace App\Http\Controllers;

use App\Models\PreChoice;
use App\Models\MainChoice;
use App\Models\PreQuestion;
use App\Models\MainQuestion;
use Illuminate\Http\Request;
use App\Models\Recommendation;
use App\Http\Resources\PreQuestionResource;
use App\Models\GivenRecommendation;

class AdminManagementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pre_questions = PreQuestion::with(['preChoices.mainQuestions.mainChoices.recommendations'])->get();

        return response()->json([
            "assessment" => $pre_questions,
            "data" => [
                "total_pre_questions" => count(PreQuestion::get()),
                "total_pre_choices" => count(PreChoice::get()),
                "total_main_questions" => count(MainQuestion::get()),
                "total_recommendations" => count(Recommendation::get()),
            ],
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
