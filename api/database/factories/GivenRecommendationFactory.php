<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GivenRecommendation>
 */
class GivenRecommendationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $is_liked = fake()->boolean();
        return [
            "is_completed" => fake()->boolean(),
            "like" => $is_liked,
            "dislike" => !$is_liked
        ];
    }
}
