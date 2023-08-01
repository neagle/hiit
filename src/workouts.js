const workouts = [
  {
    name: "Adrenaline Rush",
    description:
      "Adrenaline Rush is a fast-paced, High Intensity Interval training Workout that loads the body’s major muscle groups quickly, raises body temperature and pushes your body’s performance to the max. This is a level four workout so you’ll get into the sweat zone pretty much from the first set.  The load to your lungs is going to be significant as the body’s major muscle groups are challenged, but by leaving almost no muscle group untargeted this is the kind of workout you go to when you are looking for something that will seriously challenge your fitness and sculpt your body.  Do everything as fast as possible, trying to up the rep count and focus on the EC for added difficulty.",
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
    name: "Ants in My Pants",
    description:
      "Ants In My Pants lives up to its billing because you literally have zero downtime here. With exercises that flow from standing up to floor and back the workout uses Jumping Jacks to jack-up the pressure pushing not just your calf muscles to the limit but also your VO2 Max. Remember your heels never touch down during Jumping Jacks and your fingertips meet at the apex point over your head. Master it!",
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
    name: "Activator",
    description:
      "Get your body moving and challenge your fascial fitness with an HIIT workout that requires you to move in a truly coordinated, balanced way.  You work everything here and the load piles up as the workout progresses.  Add EC for that extra edge and what you have is a workout that keeps on challenging you with every set you do.",
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
    name: "Action Time",
    description:
      "Action Time Workout is, essentially, a supercharged burpee but with double the pain you get double the benefits. Keep your body straight during planks and don’t drop down during planks and their transitions. Your ultimate goal is to keep the plank throughout never dropping down to your knees... even though you will really, really want to.",
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
    levels: [5],
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
    levels: [7],
    rest: 120,
  },
  {
    name: "Better Tomorrow",
    description:
      "When we do nothing, we only get more of the same. For a better tomorrow, a tomorrow we want to see, we have to apply effort. A better self requires work - through physical work we don’t just chisel our bodies, we strengthen our minds, our willpower and resolve. Give it a shot, what do you have to lose? It can only get better.\n\nFor best results, go flat out (go as fast as you can) when performing jumping lunges, high knees and jump squats. The workout is designed to go through low-to-high and back to low intervals.",
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
    name: "Blaster",
    description:
      "High Intensity Interval Training is not an exercise. It is the furnace where you bake the body you want to have. Sounds like the kind of thing you want to do? Dive into Blaster and be prepared to see some real change, real fast.  (You’ve been warned).",
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
    name: "Blueprint",
    description:
      "The Blueprint is an aerobic-heavy workout that will raise your body temperature from the first round, push your lungs and test your muscles. As you go from one exercise to the next you alter the load applied to the body’s critical muscle groups but you never quite ease it off. The result is a Level 3 workout that will nonetheless push all the right buttons.",
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
    name: "Boiler Room",
    description:
      "Boiler Room lives up to its name by bringing you to the boil in no time at all.  It uses every major muscle group in the body piling on the pressure as you go from one exercise to the next. Aim to get in as many reps as possible and try to maintain your performance output steady or increasing as you go from one set to the next.",
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
    name: "Cardio Mixer",
    description:
      "Before our roaming plane of existence was bounded by the walls of our office space, life was punctuated by short, sharp bursts of activity as we hunted for food and fought for territory. We no longer have to do any of that but a short, sharp burst of intense activity still makes us feel alive.",
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
    name: "Cardio Prime",
    description:
      "You barely need any space for this high intensity, interval training workout.  You could almost perform it standing in a barrel which means you now have no real excuses for not trying this at least once.",
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
    name: "Carpe Diem",
    description:
      "If seizing the day is your thing then Carpe Diem should be your workout.  This is a high-speed, high-intensity, Level IV workout that will put you in the sweatzone from the very first set and keep you there for every set after that.  Get your knees to waist height during High Knees and don’t forget to pump your arms. Everything is time-based which means that reps really matter.  Try to get as many as you can in each exercise and maintain or improve the level in each set. Add EC (you will really know the burn then).",
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
    name: "The Catch",
    description:
      "The Catch is not difficult. In fact as a difficulty Level II workout it will just keep you ticking over on the days when you just cannot get sufficient drive to explore the limits of what you can do. But on those days this is exactly what you need in order to maintain the momentum of your fitness journey.  You know the drill. Be light on your feet when you’re doing Jumping Ts and maintain a straight body during the plank.",
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
    name: "Chisel Express",
    description:
      "When we listen to our body we know when there are days when all we need is a fast, energizing workout that will not take us to the very brink of our resources but will still leave us feeling like we’ve worked out. Chisel is just such a workout. It uses just three basic bodyweight exercises in a combination that is challenging enough to help us shape our body and see results. Being a Level II workout however this is the one you do when you are “building up” to greater things or “powering down” and maintaining your edge on days when you’re not in your top form.",
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
    name: "Chopper",
    description:
      "If someone urges you to get to the chopper you know it ain’t going to be easy. For a start just calling it “chopper” means you’re in a tight spot with time running out and the hordes bearing down upon you. Plus you’re probably out of ammo and have nowhere to hide either. Good thing the Get To The Chopper workout is here to help you get fit enough to make it before they get you. EC is a must here. You never know when you just may need to extra boost.",
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
    name: "Coda",
    description:
      "Take your cardio to the next level with the CODA workout. It has the best of everything and it has the worst of everything - catch your breath and dare it again! Who Dares, Wins.",
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
    name: "Super Burn",
    description:
      "Get your body into the Super Burn zone with this workout for guaranteed super sweat! Go as fast as you can and try to hit the same number of reps every time you complete each exercise. Keep your arms up throughout the second row of exercises for Extra Credit and aim for a minimum of 10 basic burpees (no push-up) per 20 seconds each time to get the most out of this routine. Catch your breath and repeat!",
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
