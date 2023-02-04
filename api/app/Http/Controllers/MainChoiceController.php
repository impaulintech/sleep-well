<?php

namespace App\Http\Controllers;

use App\Models\MainChoice;
use App\Http\Requests\StoreMainChoiceRequest;
use App\Http\Requests\UpdateMainChoiceRequest;
use App\Http\Resources\MainChoiceResource;

class MainChoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return MainChoiceResource::collection(MainChoice::get());
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
     * @param  \App\Http\Requests\StoreMainChoiceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMainChoiceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MainChoice  $mainChoice
     * @return \Illuminate\Http\Response
     */
    public function show(MainChoice $mainChoice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MainChoice  $mainChoice
     * @return \Illuminate\Http\Response
     */
    public function edit(MainChoice $mainChoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMainChoiceRequest  $request
     * @param  \App\Models\MainChoice  $mainChoice
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMainChoiceRequest $request, MainChoice $mainChoice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MainChoice  $mainChoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(MainChoice $mainChoice)
    {
        //
    }
}
