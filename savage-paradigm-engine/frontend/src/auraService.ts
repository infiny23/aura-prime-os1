// This file simulates the backend service in the browser, handling the AI lifecycle.

import { BeliefNode, AAL_Job } from './types';

const mockBackendService = {
    jobs: [] as AAL_Job[],
    logs: [] as string[],
    beliefNodes: [] as BeliefNode[],

    startAALCycle(initialState: any) {
        const cycleId = `cycle-${Date.now()}`;
        const initialJob: AAL_Job = {
            cycleId,
            stage: 'HYPOTHESIZE',
            payload: { worldState: initialState.worldState }
        };
        this.jobs.push(initialJob);
        this.logs.push(`Started AAL Cycle: ${cycleId}`);
        return { success: true, cycleId };
    },

    getSystemState() {
        return {
            jobs: this.jobs,
            logs: this.logs,
            beliefNodes: this.beliefNodes
        };
    },

    processJob() {
        if (this.jobs.length === 0) {
            this.logs.push('No jobs to process.');
            return;
        }
        const job = this.jobs.shift();
        if (job) {
            this.logs.push(`Processing job: ${job.cycleId}`);
            // Simulate job processing logic here
            this.logs.push(`Completed job: ${job.cycleId}`);
        }
    },

    addBeliefNode(node: BeliefNode) {
        this.beliefNodes.push(node);
        this.logs.push(`Added belief node: ${node.belief_name}`);
    }
};

export default mockBackendService;