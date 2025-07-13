export type CpmId = string;

export type SystemView = 'observer' | 'metaCore' | 'archive' | 'workshop';

export type CpmPersona = {
  id: CpmId;
  name: string;
  directive: string;
  exampleWorldState: object;
  exampleResponse: any; // Allow any structure to avoid type errors with mock data.
  isJammed?: boolean;
  version: number;
};

export interface BeliefNode {
  id: string; 
  belief_name: string;
  dependencies: string[]; 
  children: string[];
  epistemic_certainty: { alpha: number; beta: number; };
  trials: number;
  status: 'validated' | 'rejected' | 'uncorroborated' | 'archived' | 'consolidated';
  qualia: QualiaVector;
  created_at: string;
  last_updated_at: string;
  isMetaBelief: boolean;
  parentMetaId?: string;
  cycleId?: string;
}

export interface QualiaVector {
  harmony: number;
  dissonance: number;
  novelty: number;
  elegance: number;
}