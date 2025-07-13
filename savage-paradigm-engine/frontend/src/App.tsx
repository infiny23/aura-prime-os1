import React, { useState, useEffect } from 'react';
import { startAALCycle, getSystemState } from './actions';
import { LogEntry } from './types';
import BeliefStoryModal from './components/BeliefStoryModal';
import ArchivePanel from './components/ArchivePanel';
import CognitiveEnergyPanel from './components/CognitiveEnergyPanel';
import MetacognitiveLoadPanel from './components/MetacognitiveLoadPanel';
import MetaCorePanel from './components/MetaCorePanel';
import CurriculumDesigner from './components/CurriculumDesigner';
import QualiaBackground from './components/QualiaBackground';
import PrimitiveLibraryModal from './components/PrimitiveLibraryModal';
import SelfModelVisualizer from './components/SelfModelVisualizer';
import PersonaDistiller from './components/PersonaDistiller';
import PrimitiveForge from './components/PrimitiveForge';
import EvolutionProposalCard from './components/EvolutionProposalCard';

const App = () => {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [jobs, setJobs] = useState<string[]>([]);
    const [isModalOpen, setModalOpen] = useState(false);

    const refreshState = async () => {
        const { logs: newLogs, jobs: newJobs } = await getSystemState();
        setLogs(newLogs);
        setJobs(newJobs);
    };

    useEffect(() => {
        const interval = setInterval(refreshState, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleStartCycle = async () => {
        await startAALCycle({ worldState: [] });
        refreshState();
    };

    return (
        <div className="app-container">
            <h1>Aura Prime Command Center</h1>
            <button onClick={handleStartCycle}>Initiate AAL Cycle</button>
            <div className="panels">
                <BeliefStoryModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                <ArchivePanel logs={logs} />
                <CognitiveEnergyPanel />
                <MetacognitiveLoadPanel />
                <MetaCorePanel />
                <CurriculumDesigner />
                <QualiaBackground />
                <PrimitiveLibraryModal />
                <SelfModelVisualizer />
                <PersonaDistiller />
                <PrimitiveForge />
                <EvolutionProposalCard />
            </div>
        </div>
    );
};

export default App;