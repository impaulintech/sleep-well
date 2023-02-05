<?php

namespace App\Http\Controllers;

use App\Models\MainChoice;
use App\Models\Recommendation;
use App\Models\GivenRecommendation;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\GivenRecommendationResource;
use App\Http\Requests\StoreGivenRecommendationRequest;
use App\Http\Requests\UpdateGivenRecommendationRequest;

class GivenRecommendationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user_id = Auth::id();
        $given_recommendations = GivenRecommendationResource::collection(GivenRecommendation::where('user_id', $user_id)->get());
        $latest_recommendations = $given_recommendations->where('is_completed', false);
        $completed_recommendations = $given_recommendations->where('is_completed', true);

        return response()->json([
            "latest" => $latest_recommendations,
            "completed" => $completed_recommendations
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreGivenRecommendationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGivenRecommendationRequest $request)
    {
        $user_id = Auth::id();
        foreach ($request->all() as $mainQuestion) {
            $activeMainQuestion = $mainQuestion['main_question_id'];
            $selectedMainChoice = $mainQuestion['main_choice_id'];

            $availableRecommendations = Recommendation::where('main_choice_id', $selectedMainChoice)->get();
            $recommendationLastIndex = $availableRecommendations[count($availableRecommendations) - 1]->id;
            $randomRecommendation = rand($availableRecommendations[0]->id, $recommendationLastIndex);

            $bestRecommendationId = 0;
            $bestRecommendation = 0;

            foreach ($availableRecommendations as $recommendation) {
                $difference = $recommendation['like_counts'] - $recommendation['dislike_counts'];
                if ($difference > $bestRecommendation) {
                    $bestRecommendation = $difference;
                    $bestRecommendationId = $recommendation->id;
                }
            }

            GivenRecommendation::create([
                'user_id' => $user_id,
                'main_question_id' => $activeMainQuestion,
                'main_choice_id' => $selectedMainChoice,
                'recommendation_id' => $bestRecommendationId ?: $randomRecommendation
            ]);
        }

        return response()->json([
            'message' => 'Given Recommendations saved successfully.'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\GivenRecommendation  $givenRecommendation
     * @return \Illuminate\Http\Response
     */
    public function show(GivenRecommendation $givenRecommendation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateGivenRecommendationRequest  $request
     * @param  \App\Models\GivenRecommendation  $givenRecommendation
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateGivenRecommendationRequest $request, GivenRecommendation $givenRecommendation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GivenRecommendation  $givenRecommendation
     * @return \Illuminate\Http\Response
     */
    public function destroy(GivenRecommendation $givenRecommendation)
    {
        //
    }
}
