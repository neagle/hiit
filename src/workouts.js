const workouts = [
  {
    name: "Action Time",
    description:
      "Action Time Workout is, essentially, a supercharged burpee but with double the pain you get double the benefits. Keep your body straight during planks and don’t drop down during planks and their transitions. Your ultimate goal is to keep the plank throughout never dropping down to your knees... even though you will really, really want to.",
    extraCredit: "Keep the plank throughout the set.",
    difficulty: 4,
    // sets: [3, 5, 7],
    sets: 3,
    rest: 120,
    exercises: [
      {
        name: "basic burpees",
        duration: 20,
      },
      {
        name: "plank hold",
        duration: 20,
      },
      {
        name: "basic burpees",
        duration: 20,
      },
      {
        name: "plank hold",
        duration: 20,
      },
      {
        name: "elbow plank hold",
        duration: 20,
      },
      {
        name: "plank hold",
        duration: 20,
      },
      {
        name: "basic burpees",
        duration: 20,
      },
      {
        name: "plank hold",
        duration: 20,
      },
      {
        name: "basic burpees",
        duration: 20,
      },
    ],
  },
  {
    name: "Beginner HIIT",
    description:
      "The Beginner HIIT Workout is perfect if you are running low on energy, short on time or if you are just starting out with HIIT. It’s not hard yet it is demanding enough to give you a good burn. Try to go flat out each time - after all, it’s only 15 seconds. You can do anything for 15 seconds!",
    extraCredit: "1 minute rest between sets.",
    exercises: [
      {
        name: "march steps",
        duration: 15,
      },
      {
        name: "high knees",
        duration: 15,
      },
      {
        name: "arm circles",
        duration: 15,
      },
      {
        name: "high knees",
        duration: 15,
      },
      {
        name: "bicep extensions",
        duration: 15,
      },
    ],
    difficulty: 2,
    sets: 5,
    rest: 120,
  },
  {
    name: "Belly Burner",
    description:
      "For those looking for a workout that can help shift those extra few pounds Belly Burner does the trick. Get those knees past your waist each time you do High Knees and make sure you always land on the ball of the foot when you bring your foot down. Go high and fast on the burpees, working your legs to cram in as many reps each time as possible. Recover on the go in- between with elbow plank. Add EC just so you can load your lungs and test your VO2 Max capacity.",
    extraCredit: "1 minute rest between sets.",
    exercises: [
      {
        name: "high knees",
        duration: 20,
        chosen: false,
      },
      {
        name: "elbow plank",
        duration: 20,
      },
      {
        name: "basic burpees",
        duration: 10,
      },
      {
        name: "high knees",
        duration: 20,
      },
      {
        name: "elbow plank",
        duration: 20,
      },
      {
        name: "basic burpees",
        duration: 10,
      },
      {
        name: "high knees",
        duration: 20,
      },
      {
        name: "elbow plank",
        duration: 20,
      },
    ],

    difficulty: 3,
    sets: 7,
    rest: 120,
  },
  {
    name: "Better Tomorrow",
    description:
      "When we do nothing, we only get more of the same. For a better tomorrow, a tomorrow we want to see, we have to apply effort. A better self requires work - through physical work we don’t just chisel our bodies, we strengthen our minds, our willpower and resolve. Give it a shot, what do you have to lose? It can only get better.\n\nFor best results, go flat out (go as fast as you can) when performing jumping lunges, high knees and jump squats. The workout is designed to go through low-to-high and back to low intervals.",
    extraCredit: "1 minute rest between sets.",
    difficulty: 2,
    sets: 5,
    rest: 120,
    exercises: [
      {
        name: "half jacks",
        duration: 30,
      },
      {
        name: "jumping lunges",
        duration: 10,
      },
      {
        name: "half jacks",
        duration: 30,
      },
      {
        name: "march steps",
        duration: 30,
      },
      {
        name: "high knees",
        duration: 10,
      },
      {
        name: "march steps",
        duration: 30,
      },
      {
        name: "calf raises",
        duration: 10,
      },
      {
        name: "jump squats",
        duration: 10,
      },
    ],
  },
];

export default workouts;
