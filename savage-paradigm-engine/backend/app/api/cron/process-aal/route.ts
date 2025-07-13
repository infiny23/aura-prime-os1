import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import { AAL_Job } from '@/lib/types';
import { processJob } from '@/lib/jobProcessor'; // Import the job processing logic

export async function GET() {
    const multi = kv.multi();
    multi.lpop('aal_job_queue');
    const [jobJSON] = await multi.exec();

    if (!jobJSON) return NextResponse.json({ message: 'Queue empty' });

    const job = JSON.parse(jobJSON as string);
    
    // Process the job and log the result
    const result = await processJob(job);
    await kv.lpush('system_logs', JSON.stringify({ timestamp: new Date().toISOString(), jobId: job.cycleId, result }));

    return NextResponse.json({ success: true, processedJob: job.cycleId });
}