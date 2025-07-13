import React from 'react';
import Modal from 'react-modal';

interface BeliefStoryModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    beliefStory: {
        id: string;
        belief_name: string;
        causal_graph_signature: string;
        epistemic_certainty: { alpha: number; beta: number };
        trials: number;
        status: 'validated' | 'rejected' | 'uncorroborated' | 'archived';
        qualia: {
            harmony: number;
            dissonance: number;
            novelty: number;
            elegance: number;
        };
        created_at: string;
        last_updated_at: string;
    };
}

const BeliefStoryModal: React.FC<BeliefStoryModalProps> = ({ isOpen, onRequestClose, beliefStory }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Belief Story">
            <h2>{beliefStory.belief_name}</h2>
            <p><strong>Status:</strong> {beliefStory.status}</p>
            <p><strong>Trials:</strong> {beliefStory.trials}</p>
            <p><strong>Created At:</strong> {beliefStory.created_at}</p>
            <p><strong>Last Updated At:</strong> {beliefStory.last_updated_at}</p>
            <h3>Qualia</h3>
            <ul>
                <li><strong>Harmony:</strong> {beliefStory.qualia.harmony}</li>
                <li><strong>Dissonance:</strong> {beliefStory.qualia.dissonance}</li>
                <li><strong>Novelty:</strong> {beliefStory.qualia.novelty}</li>
                <li><strong>Elegance:</strong> {beliefStory.qualia.elegance}</li>
            </ul>
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default BeliefStoryModal;