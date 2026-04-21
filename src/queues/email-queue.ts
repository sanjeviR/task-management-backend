import { Queue } from "bullmq";
import redisConnection from "../configs/redis";

//Export the queue instance so your user-controller can push jobs to it
export const emailQueue = new Queue('activation-emails',{
    connection:redisConnection
});