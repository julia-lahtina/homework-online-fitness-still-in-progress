let exercises = [

    {
        nameOfExercise: "Deadlift",
        approach1: "First approach with 50 kg х 10 repetitions",
        approach2: "Second approach with 40 kg х 15 repetitions",
        approach3: "Third approach with 35 kg х 12 repetitions",
        approach4: "Fourth approach with 35 kg х 12 repetitions",
    },

    {
        nameOfExercise: "Pull-ups & Chin-ups",
        approach1: "First approach 10 repetitions",
        approach2: "Second approach 15 repetitions",
        approach3: "Third approach 12 repetitions",
        approach4: "Fourth approach 12 repetitions",
    },

    {
        nameOfExercise: "Barbell squats",
        approach1: "First approach with 50 kg х 10 repetitions",
        approach2: "Second approach with 40 kg х 15 repetitions",
        approach3: "Third approach with 35 kg х 12 repetitions",
        approach4: "Fourth approach with 35 kg х 12 repetitions",
    },

    {
        nameOfExercise: "Dumbbell lunges",
        approach1: "First approach 8 kg x 10 repetitions",
        approach2: "Second approach 8 kg x 15 repetitions",
        approach3: "Third approach  7 kg x 12 repetitions",
        approach4: "Fourth approach  5 kg x 12 repetitions",
    },

]

document.write('<div>');
document.write("<h5>", "IN-FITNESS", '<img id = "mainImage">', "</h5>");
document.write("<h1>", "Online", "</h1>", "<br>");
document.write('<h1 id = "fitness">', "Fitness", '</h1>');
document.write("<p>", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, ", "<br>", "tempor incididunt ut labore et dolore magna aliqua.", "</p>");
document.write("<button>", "Get Started", "</button>");
document.write("<h2>", "Exercises", "</h2>");


let mondayExercises = [
    exercises[0],
    exercises[1],
]

document.write("<h3>", "Monday", "</h3>");
for (let i = 0; i < mondayExercises.length; i++) {
    let exercise = mondayExercises[i];
    document.write('<div class = "exercises">');
    document.write('<span class = "nameStyle">', exercise.nameOfExercise, '</span>', "<br>");
    document.write('<ol class = "approachStyle">');
    document.write("<li>", exercise.approach1, "</li>");
    document.write("<li>", exercise.approach2, "</li>");
    document.write("<li>", exercise.approach3, "</li>");
    document.write("<li>", exercise.approach4, "</li>");
    document.write('</ol>');


    let exerciseImages = "";
    switch (exercise.nameOfExercise) {
        case "Deadlift":
            exerciseImages = '<img src = "assets/images/image1.svg">, <img src = "assets/images/image2.svg">, <img src = "assets/images/image3.svg">';
            break;
        case "Pull-ups & Chin-ups":
            exerciseImages = '<img src = "assets/images/image4.svg">, <img src = "assets/images/image5.svg">, <img src = "assets/images/image6.svg">';
            break;
    }
    document.write(exerciseImages);
    document.write("</div>");
}


let thuesdayExercises = [
    exercises[2],
    exercises[3],
]

document.write("<h3>", "Thuesday", "</h3>");
for (let i = 0; i < thuesdayExercises.length; i++) {
    let exercise = thuesdayExercises[i];
    document.write('<div class = "exercises">');
    document.write('<span class = "nameStyle">', exercise.nameOfExercise, '</span>', "<br>");

    document.write('<ol class = "approachStyle">');
    document.write("<li>", exercise.approach1, "</li>");
    document.write("<li>", exercise.approach2, "</li>");
    document.write("<li>", exercise.approach3, "</li>");
    document.write("<li>", exercise.approach4, "</li>");
    document.write('</ol>');


    let exerciseImages = "";
    switch (exercise.nameOfExercise) {
        case "Barbell squats":
            exerciseImages = '<img src = "assets/images/image7.svg">, <img src = "assets/images/image8.svg">, <img src = "assets/images/image9.svg">';
            break;
        case "Dumbbell lunges":
            exerciseImages = '<img src = "assets/images/image10.svg">, <img src = "assets/images/image11.svg">, <img src = "assets/images/image12.svg">';
            break;
    }
    document.write(exerciseImages);
    document.write("</div>");
}




document.write('</div>');







