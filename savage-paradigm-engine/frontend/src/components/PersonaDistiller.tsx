import React, { useState } from 'react';
import { CpmPersona } from '../types';

const PersonaDistiller: React.FC = () => {
    const [personas, setPersonas] = useState<CpmPersona[]>([]);
    const [input, setInput] = useState<string>('');

    const handleAddPersona = () => {
        const newPersona: CpmPersona = {
            id: Date.now().toString(),
            name: input,
            directive: 'Distilled persona directive',
            exampleWorldState: {},
            exampleResponse: {},
            version: 1,
        };
        setPersonas([...personas, newPersona]);
        setInput('');
    };

    return (
        <div className="persona-distiller">
            <h2 className="text-lg font-bold">Persona Distiller</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter persona name"
                className="border p-2 rounded"
            />
            <button onClick={handleAddPersona} className="ml-2 bg-blue-500 text-white p-2 rounded">
                Add Persona
            </button>
            <ul className="mt-4">
                {personas.map((persona) => (
                    <li key={persona.id} className="border-b py-2">
                        {persona.name} (ID: {persona.id})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PersonaDistiller;