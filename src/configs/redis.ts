import IORedis from "ioredis";

//establish single shared connection
const redisConnection = new IORedis({
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: null,
});

//log if it connects successfully  or fails
redisConnection.on("connect", () =>
  console.log("Redis connected successfully!"),
);
redisConnection.on("error", (err) =>
  console.error("Redis connection error:", err),
);

export default redisConnection;
