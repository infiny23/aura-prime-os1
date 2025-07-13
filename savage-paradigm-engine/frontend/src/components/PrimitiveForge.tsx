import React, { useState } from 'react';

const PrimitiveForge: React.FC = () => {
    const [primitiveName, setPrimitiveName] = useState('');
    const [primitiveDescription, setPrimitiveDescription] = useState('');

    const handleForgePrimitive = () => {
        // Logic to forge a new primitive
        console.log('Forging new primitive:', { primitiveName, primitiveDescription });
        // Reset fields after forging
        setPrimitiveName('');
        setPrimitiveDescription('');
    };

    return (
        <div className="primitive-forge">
            <h2 className="text-xl font-bold">Forge New Primitive</h2>
            <input
                type="text"
                placeholder="Primitive Name"
                value={primitiveName}
                onChange={(e) => setPrimitiveName(e.target.value)}
                className="border p-2 mb-2 w-full"
            />
            <textarea
                placeholder="Primitive Description"
                value={primitiveDescription}
                onChange={(e) => setPrimitiveDescription(e.target.value)}
                className="border p-2 mb-2 w-full"
            />
            <button onClick={handleForgePrimitive} className="bg-blue-500 text-white p-2">
                Forge Primitive
            </button>
        </div>
    );
};

export default PrimitiveForge;