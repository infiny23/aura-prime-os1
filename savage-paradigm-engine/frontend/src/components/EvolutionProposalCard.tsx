import React from 'react';
import { CpmProposal } from '@/types';

interface EvolutionProposalCardProps {
    proposal: CpmProposal;
    onSelect: (proposalId: string) => void;
}

const EvolutionProposalCard: React.FC<EvolutionProposalCardProps> = ({ proposal, onSelect }) => {
    const handleSelect = () => {
        onSelect(proposal.cpm_id);
    };

    return (
        <div className="border p-4 rounded shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg">{proposal.action}</h3>
            <p className="text-sm text-gray-600">{proposal.justification.predicted_qualia.harmony} Harmony</p>
            <p className="text-sm text-gray-600">{proposal.justification.predicted_success_confidence} Confidence</p>
            <button 
                className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                onClick={handleSelect}
            >
                Select Proposal
            </button>
        </div>
    );
};

export default EvolutionProposalCard;