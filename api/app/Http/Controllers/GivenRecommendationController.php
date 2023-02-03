<?php

namespace App\Http\Controllers;

use App\Models\GivenRecommendation;
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
        //
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
     * @param  \App\Http\Requests\StoreGivenRecommendationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGivenRecommendationRequest $request)
    {
        //
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
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GivenRecommendation  $givenRecommendation
     * @return \Illuminate\Http\Response
     */
    public function edit(GivenRecommendation $givenRecommendation)
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
