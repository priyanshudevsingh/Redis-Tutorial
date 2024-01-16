const client = require("./client");

async function init() {
  //   await client.lpush("arr", 1);
  //   await client.lpush("arr", 2);
  //   await client.lpush("arr", 3);
  //   await client.lpush("arr", 4);
  //   await client.lpush("arr", 5);
  const res = await client.lpop("arr");
  //   const res = await client.blpop("arr", 30);
  console.log(res);
}
init();
