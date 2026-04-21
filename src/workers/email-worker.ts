import { Worker, Job } from "bullmq";
import redisConnection from "../configs/redis";
import { sendActivationMail } from "../services/email-service";

const emailWorker = new Worker('activation-emails',async (job:Job)=>{
    console.log(`[Worker] Picked Up job ${job.id}! Preparing email for ${job.data.email}`);

    const {email, name, token} = job.data;

    //call the dedicated services to handle the actual sending
    await sendActivationMail(email, name, token);
    console.log(`[Worker] Activation email sent successfully to ${email}!`);

},{connection: redisConnection});

emailWorker.on('failed',(job,err)=>{
    console.error(`[Worker] Failed to send mail ${err.message}`)
});

export default emailWorker;