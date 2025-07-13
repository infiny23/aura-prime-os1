'use server';

import { kv } from '@vercel/kv';
import { AAL_Job } from '@/lib/types';
import { revalidatePath } from 'next/cache';
import { ulid } from 'ulid';

export async function startAALCycle(initialState: any) {
    const cycleId = ulid();
    const initialJob: AAL_Job = {
        cycleId,
        stage: 'HYPOTHESIZE',
        payload: { worldState: initialState.worldState }
    };

    await kv.lpush('aal_job_queue', JSON.stringify(initialJob));
    revalidatePath('/');
    return { success: true, cycleId };
}

export async function getSystemState() {
    // This action will be called by the UI to poll for updates
    const [logs, jobs] = await Promise.all([
        kv.lrange('system_logs', 0, 50),
        kv.lrange('aal_job_queue', 0, 5)
    ]);
    return { logs, jobs };
}