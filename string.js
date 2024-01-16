const client = require("./client");

async function init() {
  await client.set("user:4", "jason");
  // await client.expire('user:4', 10);
  const res = await client.get("user:4");
  console.log(res);
}

init();
