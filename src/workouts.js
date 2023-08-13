const workouts = [
  {
    name: "Max Power",
    description: "Maximize your power output.",
    extraCredit: "Hit the same number of push-ups every time.",
    difficulty: 4,
    levels: [3, 5, 7],
    rest: 120,
    exercises: [
      {
        name: "jumping jacks",
        duration: 15,
      },
      {
        name: "push-ups",
        duration: 15,
      },
      {
        name: "basic burpees",
        duration: 15,
      },
      {
        name: "jumping jacks",
        duration: 15,
      },
      {
        name: "punches",
        duration: 15,
      },
      {
        name: "basic burpees",
        duration: 15,
      },
      {
        name: "jumping jacks",
        duration: 15,
      },
      {
        name: "push-ups",
        duration: 15,
      },
      {
        name: "basic burpees",
        duration: 15,
      },
    ],
  },
  {
    name: "To the Moon",
    description: "To the moon and back.",
    extraCredit: "Hit the same number of burpees each time.",
    difficulty: 4,
    levels: [3, 5, 7],
    rest: 120,
    exercises: [
      {
        name: "jumping jacks",
        duration: 20,
      },
      {
        name: "burpees",
        duration: 20,
      },
      {
        name: "jumping jacks",
        duration: 20,
      },
      {
        name: "wide plank hold",
        duration: 20,
      },
      {
        name: "jumpking jacks",
        duration: 20,
      },
      {
        name: "wide plank hold",
        duration: 20,
      },
      {
        name: "jumping jacks",
        duration: 20,
      },
      {
        name: "burpees",
        duration: 20,
      },
      {
        name: "jumping jacks",
        duration: 20,
      },
    ],
  },
  {
    name: "Universal Soldier",
    description: "Move your entire body to become a true universal soldier.",
    extraCredit: "1 minute rest between sets.",
    difficulty: 3,
    levels: [3, 5, 7],
    rest: 120,
    exercises: [
      {
        name: "squat hops",
        duration: 15,
      },
      {
        name: "bounce + squat",
        duration: 15,
      },
      {
        name: "high knees",
        duration: 15,
      },
      {
        name: "shoulder taps",
        duration: 15,
      },
      {
        name: "punches",
        duration: 15,
      },
      {
        name: "high knees",
        duration: 15,
      },
      {
        name: "climbers",
        duration: 15,
      },
      {
        name: "sprinter lunges",
        duration: 15,
      },
      {
        name: "high knees",
        duration: 15,
      },
    ],
  },
  {
    name: "Last Action Hero",
    description: "Don't let Arnold down.",
    extraCredit: "Keep the plank throughout the set.",
    difficulty: 4,
    levels: [3, 5, 7],
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
    name: "Starter Pistol",
    description: "Everyone needs to start somewhere!",
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
    levels: [5],
    rest: 120,
  },
  {
    name: "Trogdor the Burninator",
    description: "Burninate the countryside!",
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
    levels: [7],
    rest: 120,
  },
  {
    name: "Don't Skip Leg Day",
    description: "DON'T SKIP LEG DAY.",
    extraCredit: "1 minute rest between sets.",
    difficulty: 2,
    levels: [3, 5, 7],
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
  {
    name: "Buzz Lightyear",
    description:
      "To infinity and beyond! But only if you can pass Star Command's fitness requirements.",
    extraCredit: "30 seconds rest between sets.",
    difficulty: 2,
    levels: [3, 5, 7],
    rest: 120,
    exercises: [
      {
        name: "jumping jacks",
        duration: 20,
      },
      {
        name: "side leg raises",
        duration: 10,
      },
      {
        name: "high knees",
        duration: 20,
      },
      {
        name: "climbers",
        duration: 10,
      },
    ],
  },
  {
    name: "Foundation",
    description: "A house is only as strong as its foundation.",
    extraCredit: "Hit the same number of push-ups and squats every time.",
    difficulty: 3,
    levels: [3, 5, 7],
    rest: 120,
    exercises: [
      {
        name: "high knees",
        duration: 30,
      },
      {
        name: "push-ups",
        duration: 10,
      },
      {
        name: "high knees",
        duration: 30,
      },
      {
        name: "punches",
        duration: 30,
      },
      {
        name: "push-ups",
        duration: 10,
      },
      {
        name: "punches",
        duration: 30,
      },
      {
        name: "squats",
        duration: 30,
      },
      {
        name: "push-ups",
        duration: 10,
      },
      {
        name: "squats",
        duration: 30,
      },
    ],
  },
  {
    name: "Fuel the Beast",
    description:
      "You are what you eat. So eat like a beast and become a beast.",
    extraCredit: "Hit the same number of burpees every time.",
    difficulty: 3,
    levels: [3, 5, 7],
    rest: 120,
    exercises: [
      {
        name: "basic burpees",
        duration: 10,
      },
      {
        name: "push-ups",
        duration: 20,
      },
      {
        name: "jab + cross",
        duration: 30,
      },
      {
        name: "basic burpees",
        duration: 10,
      },
      {
        name: "push-ups",
        duration: 20,
      },
      {
        name: "squat + jab",
        duration: 30,
      },
      {
        name: "basic burpees",
        duration: 10,
      },
      {
        name: "push-ups",
        duration: 20,
      },
      {
        name: "jab + cross",
        duration: 30,
      },
    ],
  },
  {
    name: "Heart of the Tiger",
    description: "The tiger's heart fears nothing. Become the tiger.",
    difficulty: 2,
    levels: [3, 5, 7],
    rest: 120,
    exercises: [
      {
        name: "half jacks",
        duration: 20,
      },
      {
        name: "squats",
        duration: 20,
      },
      {
        name: "step back + knee ups",
        duration: 20,
      },
    ],
  },
  {
    name: "Samurai Jack",
    description:
      "All the way from the past to the future, Samurai Jack is here to help you get fit.",
    levels: [3, 5, 7],
    difficulty: 2,
    rest: 120,
    exercises: [
      {
        name: "half jacks",
        duration: 10,
      },
      {
        name: "jumping jacks",
        duration: 10,
      },
      {
        name: "half jacks",
        duration: 10,
      },
      {
        name: "jumping jacks",
        duration: 10,
      },
      {
        name: "half jacks",
        duration: 10,
      },
      {
        name: "jumping jacks",
        duration: 10,
      },
    ],
  },
  {
    name: "Heat",
    description:
      "The heart of the sun is a cold, dark place. But you can still feel the heat.",
    extraCredit: "1 minute rest between sets.",
    difficulty: 4,
    levels: [3, 5, 7],
    rest: 120,
    exercises: [
      {
        name: "high knees",
        duration: 20,
      },
      {
        name: "climbers",
        duration: 20,
      },
      {
        name: "high knees",
        duration: 20,
      },
      {
        name: "overhead punches",
        duration: 20,
      },
      {
        name: "push-ups",
        duration: 20,
      },
      {
        name: "punches",
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
    name: "Form follows Function",
    description:
      "Form follows function. Function follows form. Get your form right and the function will follow.",
    extraCredit: "1 minute rest between sets.",
    difficulty: 2,
    levels: [3, 5, 7],
    rest: 120,
    exercises: [
      {
        name: "jumping Ts",
        duration: 30,
      },
      {
        name: "plank",
        duration: 30,
      },
      {
        name: "jumping Ts",
        duration: 30,
      },
      {
        name: "alt arm/leg plank",
        duration: 30,
      },
      {
        name: "jumping Ts",
        duration: 30,
      },
      {
        name: "one-arm side plank",
        duration: 30,
      },
    ],
  },
  {
    name: "Year of the Ox",
    description: "The ox is a symbol of strength and endurance. Become the ox.",
    extraCredit: "1 minute rest between sets.",
    difficulty: 2,
    levels: [3, 5, 7],
    rest: 120,
    exercises: [
      {
        name: "high knees",
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
        name: "basic burpees",
        duration: 10,
      },
      {
        name: "high knees",
        duration: 20,
      },
      {
        name: "basic burpees",
        duration: 20,
      },
      {
        name: "elbow plank",
        duration: 30,
      },
    ],
  },
  {
    name: "Darkness Falls",
    description:
      "The darkness falls. But you can still see the light. And the light is you.",
    extraCredit: "1 minute rest between sets.",
    difficulty: 3,
    levels: [3, 5, 7],
    rest: 120,
    exercises: [
      {
        name: "high knees",
        duration: 20,
      },
      {
        name: "butt kicks",
        duration: 20,
      },
      {
        name: "high knees",
        duration: 20,
      },
      {
        name: "one-arm plank",
        duration: 20,
      },
      {
        name: "high knees",
        duration: 20,
      },
      {
        name: "one-arm plank",
        duration: 20,
      },
      {
        name: "high knees",
        duration: 20,
      },
      {
        name: "butt kicks",
        duration: 20,
      },
      {
        name: "high knees",
        duration: 20,
      },
    ],
  },
  {
    name: "Caesura",
    description:
      "A pause in the middle of a line of poetry. A pause in the middle of your workout.",
    extraCredit: "Keep the plank throughout the second row.",
    difficulty: 3,
    levels: [3, 5, 7],
    rest: 120,
    exercises: [
      {
        name: "jumping jacks",
        duration: 20,
      },
      {
        name: "plank hold",
        duration: 20,
      },
      {
        name: "jumping jacks",
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
        name: "jumping jacks",
        duration: 20,
      },
      {
        name: "plank hold",
        duration: 20,
      },
      {
        name: "jumping jacks",
        duration: 20,
      },
    ],
  },
  {
    name: "The Last Starfighter",
    description: "The last starfighter is the last hope for the galaxy.",
    extraCredit:
      "Keep arms up at #3, #4 & #5 and do a minimum of 10 basic burpees each time.",
    difficulty: 3,
    levels: [3, 5, 7],
    rest: 120,
    exercises: [
      {
        name: "jumping jacks",
        duration: 20,
      },
      {
        name: "split jacks",
        duration: 20,
      },
      {
        name: "jumping jacks",
        duration: 20,
      },
      {
        name: "arm circles",
        duration: 20,
      },
      {
        name: "scissor chops",
        duration: 20,
      },
      {
        name: "arm circles",
        duration: 20,
      },
      {
        name: "basic burpees",
        duration: 20,
      },
      {
        name: "shoulder taps",
        duration: 20,
      },
      {
        name: "basic burpees",
        duration: 20,
      },
    ],
  },
];

export default workouts;
