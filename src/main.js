const getJoke = require("./joke");

async function run() {
  const core = await import("@actions/core");
  const joke = await getJoke();
  console.log(joke);
  core.setOutput("joke", joke);
}

run();