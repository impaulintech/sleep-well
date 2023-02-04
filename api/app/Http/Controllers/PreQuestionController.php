<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePreQuestionRequest;
use App\Http\Resources\PreQuestionResource;
use App\Models\PreQuestion;
use Illuminate\Http\Request;

class PreQuestionController extends Controller
{
    public function index()
    {
        return PreQuestionResource::collection(PreQuestion::get());
    }

    public function store(StorePreQuestionRequest $request)
    {
        $pre_question = PreQuestion::create([
            "pre_question" => $request->pre_question
        ]);

        return response()->json([
            'message' => 'Successfully created new Pre Question.',
            'data' => $pre_question->only('pre_question', 'id')
        ]);
    }

    public function show($id)
    {
        return new PreQuestionResource(PreQuestion::findOrFail($id));
    }

    public function update(StorePreQuestionRequest $request, $id)
    {
        $pre_question = PreQuestion::findOrFail($id);
        $pre_question->update($request->only('pre_question'));

        return response()->json([
            'message' => 'Successfully updated Pre Question.',
            'data' => $pre_question->only('pre_question', 'id')
        ]);
    }

    public function destroy($id)
    {
        $preQuestion = PreQuestion::find($id);

        if (!$preQuestion) {
            return response()->json(['message' => 'Pre Question not found.']);
        }

        $preQuestion->delete();
        return response()->json(['message' => 'Successfully deleted Pre Question.']);
    }
}
