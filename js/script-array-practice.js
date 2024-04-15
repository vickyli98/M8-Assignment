//STEP 1
/*
let myMovies = ['Cinderella', 'Tangled', 'Mulan', 'The Little Mermaid', 'Frozen'];
console.log(myMovies[1]);
*/

//STEP 2
/*
let movies = new Array(5);
movies[0] = 'Cinderella';
movies[1] = 'Tangled';
movies[2] = 'Mulan';
movies[3] = 'The Little Mermaid';
movies[4] = 'Frozen';
console.log(movies[0]);
*/

//STEP 3
/*
let movies = new Array(5);
movies[0] = 'Cinderella';
movies[1] = 'Tangled';
movies[2] = 'Mulan';
movies[3] = 'The Little Mermaid';
movies[4] = 'Frozen';
movies.splice(2, 0, 'Beauty and the Beast');
console.log(movies.length);
*/

//STEP 4
/*
let movies = ['Cinderella', 'Tangled', 'Mulan', 'The Little Mermaid', 'Frozen'];
delete movies[0];
console.log(movies);
*/

//STEP 5
/*
let movies = ['Cinderella', 'Tangled', 'Mulan', 'The Little Mermaid', 'Frozen', 'Beauty and the Beast', 'Moana'];
for (let movie in movies) {
  console.log(movies[movie]);
}
*/

//STEP 6
/*
let movies = ['Cinderella', 'Tangled', 'Mulan', 'The Little Mermaid', 'Frozen', 'Beauty and the Beast', 'Moana'];
for (let i of movies) {
  console.log(i);
}
*/

//STEP 7
/*
let movies = ['Cinderella', 'Tangled', 'Mulan', 'The Little Mermaid', 'Frozen', 'Beauty and the Beast', 'Moana'];
movies.sort();
for (let i of movies) {
  console.log(i);
}
*/

//STEP 8
/*
let movies = ['Cinderella', 'Tangled', 'Mulan', 'The Little Mermaid', 'Frozen', 'Beauty and the Beast', 'Moana'];
let leastFavMovies = ['Snow White', 'Sleeping Beauty', 'Princess and the Frog'];
console.log('Movies I like:');
console.log('');
for (let i of movies) {
  console.log(i);
}
console.log('');
console.log('Movies I regret watching:');
console.log('');
for (let i of leastFavMovies) {
  console.log(i);
}
*/

//STEP 9
/*
let movies = ['Cinderella', 'Tangled', 'Mulan', 'The Little Mermaid', 'Frozen', 'Beauty and the Beast', 'Moana'];
let leastFavMovies = ['Snow White', 'Sleeping Beauty', 'Princess and the Frog'];
let newMovies = movies.concat(leastFavMovies);
newMovies.sort().reverse();
for (let i of newMovies) {
  console.log(i);
}
*/

//STEP 10
/*
let movies = ['Cinderella', 'Tangled', 'Mulan', 'The Little Mermaid', 'Frozen', 'Beauty and the Beast', 'Moana'];
let leastFavMovies = ['Snow White', 'Sleeping Beauty', 'Princess and the Frog'];
let newMovies = movies.concat(leastFavMovies);
newMovies.sort().reverse();
let lastMovie = newMovies.pop();
console.log(lastMovie);
*/

//STEP 11
/*
let movies = ['Cinderella', 'Tangled', 'Mulan', 'The Little Mermaid', 'Frozen', 'Beauty and the Beast', 'Moana'];
let leastFavMovies = ['Snow White', 'Sleeping Beauty', 'Princess and the Frog'];
let newMovies = movies.concat(leastFavMovies);
newMovies.sort().reverse();
let firstMovie = newMovies.shift();
console.log(firstMovie);
*/

//STEP 12
/*
let movies = ['Cinderella', 'Tangled', 'Mulan', 'The Little Mermaid', 'Frozen', 'Beauty and the Beast', 'Moana'];
let leastFavMovies = ['Snow White', 'Sleeping Beauty', 'Princess and the Frog'];
let newMovies = movies.concat(leastFavMovies);
let leastFav1 = newMovies.indexOf('Snow White');
let leastFav2 = newMovies.indexOf('Sleeping Beauty');
let leastFav3 = newMovies.indexOf('Princess and the Frog');
newMovies.splice(leastFav1, 1, 'Aladdin');
newMovies.splice(leastFav2, 1, 'Brave');
newMovies.splice(leastFav3, 1, 'Pocahontas');
console.log(newMovies);
*/

//STEP 13
/*
let movies = [['Cinderella', 1], ['Tangled', 2], ['Mulan', 3], ['The Little Mermaid', 4], ['Frozen', 5]];
let movieNames = movies.filter((movie) => {
  return typeof movie[0] === 'string';
}).map((movie) => {
  return movie[0];
});
console.log(movieNames);
*/

//STEP 14
/*
let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];
function showEmployee (arr) {
  console.log('Employees:');
  console.log('');
  arr.forEach((employee) => {
    console.log(employee);
  })
};
showEmployee(employees);
*/

//STEP 15
/*
let testData = [58, '', 'abcd', true, null, false, 0];
function filterValues (arr) {
  return arr.filter((value) => {
    return value !== false && value !== null && value !== 0 && value !== '';
  })
}
console.log(filterValues(testData));
*/

//STEP 16
/*
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function randomNum (arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
};
console.log(randomNum(numArr));
*/

//STEP 17
/*
let numArr = [10, 20, 50, 30, 40];
function largestNum(arr) {
  let largeNum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > largeNum) {
      largeNum = arr[i];
    }
  }
  return largeNum;
};
console.log(largestNum(numArr));
*/