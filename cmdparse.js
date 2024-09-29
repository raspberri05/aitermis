function command() {
  return process.argv.slice(2)[0];
}

module.exports = {
  command,
};
