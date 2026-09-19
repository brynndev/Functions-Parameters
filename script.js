// Movie Night Planner


// FUNCTION 1
// This function accepts three parameters
// and returns a message.

function createMovieMessage(movie, snack, drink) {

    return "Tonight you are watching " + movie +
        " with " + snack + " and " + drink + ".";

}


// FUNCTION 2
// This function uses an IF conditional
// to create a movie-night recommendation.

function getVibe(guests) {

    if (guests >= 5) {

        return "It's going to be a big movie night! 🍿";

    } else {

        return "Sounds like a cozy movie night! ✨";

    }

}


// OBJECT

const movieNight = {

    movie: "",
    snack: "",
    drink: "",
    guests: "",


    // METHOD
    // This method creates a summary
    // using the object's properties.

    getSummary: function() {

        return this.movie + " + " +
            this.snack + " + " +
            this.drink;

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


    // NUMBER METHOD
    // Convert the number input into a number.

    const guests = Number(
        document.getElementById("guests").value
    );


    // NUMBER METHOD
    // Format the number without decimal places.

    const roundedGuests = guests.toFixed(0);


    // STRING METHOD
    // Change the movie title to uppercase.

    const movieTitle = movie.toUpperCase();


    // Store the selections in our object.

    movieNight.movie = movieTitle;
    movieNight.snack = snack;
    movieNight.drink = drink;
    movieNight.guests = roundedGuests;


    // Call our first function.

    const message = createMovieMessage(
        movieTitle,
        snack,
        drink
    );


    // Call our IF function.

    const vibe = getVibe(guests);


    // SWITCH STATEMENT
    // Gives a different message for each movie.

    let movieMessage;

    switch (movie) {

        case "The Phantom of the Opera":

            movieMessage =
                "Dim the lights and enjoy a dramatic night of music, mystery, and romance. 🎭";

            break;


        case "Avengers: Endgame":

            movieMessage =
                "Grab the popcorn because this is going to be an epic Marvel night! 🦸";

            break;


        case "The Notebook":

            movieMessage =
                "Get the tissues ready for a romantic movie night. 💕";

            break;


        default:

            movieMessage =
                "Grab your favorite snacks and settle in for a great movie! 🍿";

    }


    // Call our object method.

    const summary = movieNight.getSummary();


    // CONCATENATED STRING
    // Combines multiple variables into one string.

    const moviePlan =
        "You are watching " + movieTitle +
        " with " + roundedGuests +
        " people. Your snacks are " +
        snack + " and " + drink + ".";


    // Display the results on the page.

    document.getElementById("result").innerHTML = `

        <div class="ticket">🎬</div>

        <h2>Movie Night Ready!</h2>

        <div class="plan-details">

            <p>
                ${message}
            </p>

            <p>
                <strong>Your movie:</strong>
                ${movieTitle}
            </p>

            <p>
                <strong>Number of people:</strong>
                ${roundedGuests}
            </p>

            <p>
                <strong>Your plan:</strong>
                ${moviePlan}
            </p>

            <p>
                <strong>Your vibe:</strong>
                ${vibe}
            </p>

            <p>
                <strong>Movie recommendation:</strong>
                ${movieMessage}
            </p>

            <p>
                <strong>Your selections:</strong>
                ${summary}
            </p>

        </div>

    `;

});