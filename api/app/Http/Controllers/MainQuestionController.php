<?php

namespace App\Http\Controllers;

use App\Models\MainQuestion;
use App\Http\Requests\StoreMainQuestionRequest;
use App\Http\Requests\UpdateMainQuestionRequest;
use App\Http\Resources\MainQuestionResource;

class MainQuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return MainQuestionResource::collection(MainQuestion::get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMainQuestionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMainQuestionRequest $request)
    {
        $main_question = MainQuestion::create([
            "pre_choice_id" => $request->pre_choice_id,
            "main_question" => $request->main_question
        ]);

        return response()->json([
            'message' => 'Successfully created new Main Question.',
            'data' => $main_question->only('main_question', 'id')
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MainQuestion  $mainQuestion
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new MainQuestionResource(MainQuestion::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMainQuestionRequest  $request
     * @param  \App\Models\MainQuestion  $mainQuestion
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMainQuestionRequest $request, $id)
    {
        $main_question = MainQuestion::find($id);

        if (!$main_question) {
            return response()->json(['message' => 'Main Question not found.']);
        }

        $main_question->update($request->only('main_question'));
        return response()->json([
            'message' => 'Successfully updated Main question.',
            'data' => $main_question->only('main_question', 'id')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MainQuestion  $mainQuestion
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $mainQuestion = MainQuestion::find($id);

        if (!$mainQuestion) {
            return response()->json(['message' => 'Main Question not found.']);
        }

        $mainQuestion->delete();
        return response()->json(['message' => 'Successfully deleted Main Question.']);
    }
}
