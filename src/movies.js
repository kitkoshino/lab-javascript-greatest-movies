// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  const directors = movies.map((movie) => movie.director);

  return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)
const directorsFiltered = getAllDirectors(movies).reduce((acc, director) => {
  //verificar se os diretores estao repetidos na array
  if (acc.includes(director)) {
    //nao adicionar no array, retorna a array original
    return acc;
  } else {
    //senao adiciona
    return [...acc, director]; // [...]retorna a array original + novo item
  }
}, []);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const stevenMovies = movies.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );

  return stevenMovies.length; //.length retorna 0 se vazio
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length) {
    const total = movies.reduce((acc, movie) => {
      //adicionar o valor do rate ao acc
      if (typeof movie.rate === 'number') {
        acc += movie.rate;
      }

      return acc;
    }, 0);
    const average = total / movies.length;

    return Number(average.toFixed(2));
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
  const average = ratesAverage(dramaMovies);
  return average;
 /* if (dramaMovies.length) {
    const sumDrama = dramaMovies.reduce((acc, dramaMovie) => {
      acc += dramaMovie.rate;
      return acc;
    }, 0);

    const average = sumDrama / dramaMovies.length;
    return Number(average.toFixed(2));
  } else {
    return 0;
  }*/
}

dramaMoviesRate(movies);
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const moviesByYear = movies.sort((movie1, movie2) => {
    if (movie1.year > movie2.year) {
      return 1;
    } else if (movie1.year < movie2.year) {
      return -1;
    } else {
      return movie1.title.localeCompare(movie2.title); //locale compare retorna 1,-1 ou 0
    }
  });

  return [...moviesByYear];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesOrderedAlphabetically = [...movies];
  moviesOrderedAlphabetically.sort((movie1, movie2) => {
    return movie1.title.localeCompare(movie2.title);
  });
  const onlyTitles = moviesOrderedAlphabetically.map((movie) => movie.title);

  return onlyTitles.slice(0, 20);
}

orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const newMovies = movies.map((movie) => {
    const hoursMinutes = movie.duration.split('h');
    let hours = 0;
    let minutes = 0;

    if (hoursMinutes.length === 2) {
      hours = hoursMinutes[0];
      minutes = hoursMinutes[1].replace('min', '');
    } else if (hoursMinutes[0].includes('min')) {
      minutes = hoursMinutes[0].replace('min', '');
    } else {
      hours = hoursMinutes[0];
    }
    const newDuration = hours * 60 + Number(minutes);

    return {...movie, duration: newDuration};
  });

  return newMovies;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
