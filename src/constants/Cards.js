function importAll(r) {
  return r.keys().map(r);
}

const Cards = importAll(
  require.context("../img/cards/", false, /\.(png|jpe?g|svg)$/)
);
export default Cards;
