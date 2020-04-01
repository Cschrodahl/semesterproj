function importAll(r) {
  return r.keys().map(r);
}

const Tokens = importAll(
  require.context("../img/tokens/", false, /\.(png|jpe?g|svg)$/)
);
export default Tokens;
