// Movie Night Planner


// FUNCTION 1
// This function accepts three parameters
// and returns a message.

function createMovieMessage(movie, snack, drink) {

    return `Tonight you are watching <strong>${movie}</strong> with ${snack} and ${drink}.`;

}


// FUNCTION 2
// This function accepts one parameter
// and returns a movie-night recommendation.

function getVibe(movie) {

    if (movie === "Harry Potter") {

        return "Cozy up with a blanket and enjoy a little magic. ✨";

    } else if (movie === "The Princess Diaries") {

        return "Time for a fun, feel-good movie night. 👑";

    } else if (movie === "Jurassic Park") {

        return "Keep the snacks close and prepare for some dinosaur chaos! 🦖";

    } else {

        return "Grab your favorite snacks and settle in for a stylish movie night. 💕";

    }

}


// OBJECT
// This object has multiple properties.

const movieNight = {

    movie: "",
    snack: "",
    drink: "",


    // METHOD
    // This method creates a summary
    // using the object's properties.

    getSummary: function() {

        return `${this.movie} + ${this.snack} + ${this.drink}`;

    }

};


// EVENT
// When the button is clicked,
// this function will run.

document.getElementById("planButton").addEventListener("click", function() {


    // Get the user's selections.

    const movie = document.getElementById("movie").value;

    const snack = document.getElementById("snack").value;

    const drink = document.getElementById("drink").value;


    // Store the selections in our object.

    movieNight.movie = movie;

    movieNight.snack = snack;

    movieNight.drink = drink;


    // Call our first function.

    const message = createMovieMessage(
        movie,
        snack,
        drink
    );


    // Call our second function.

    const vibe = getVibe(movie);


    // Call our object method.

    const summary = movieNight.getSummary();


    // Display the results on the page.

    document.getElementById("result").innerHTML = `

        <div class="ticket">🎬</div>

        <h2>Movie Night Ready!</h2>

        <div class="plan-details">

            <p>
                ${message}
            </p>

            <p>
                <strong>Your vibe:</strong>
                ${vibe}
            </p>

            <p>
                <strong>Your plan:</strong>
                ${summary}
            </p>

        </div>

    `;

});