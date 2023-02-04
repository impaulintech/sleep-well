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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMainQuestionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMainQuestionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MainQuestion  $mainQuestion
     * @return \Illuminate\Http\Response
     */
    public function show(MainQuestion $mainQuestion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MainQuestion  $mainQuestion
     * @return \Illuminate\Http\Response
     */
    public function edit(MainQuestion $mainQuestion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMainQuestionRequest  $request
     * @param  \App\Models\MainQuestion  $mainQuestion
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMainQuestionRequest $request, MainQuestion $mainQuestion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MainQuestion  $mainQuestion
     * @return \Illuminate\Http\Response
     */
    public function destroy(MainQuestion $mainQuestion)
    {
        //
    }
}
