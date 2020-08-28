// const movieSchema = new mongoose.Schema({
// name: String,
// });
// const Movie = mongoose.model('Movie', movieSchema);

const newMovie = async (_, args, context) => {
  const avengers = new Movie({ name: 'The Avengers  ' });
  avengers.save((err) => {
    if (err) return console.error(err);
  });
  return avengers;
};

module.exports = { newMovie };