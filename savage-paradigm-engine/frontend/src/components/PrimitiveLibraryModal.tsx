import React, { useState } from 'react';

const PrimitiveLibraryModal = () => {
    const [primitives, setPrimitives] = useState<string[]>([]);
    const [newPrimitive, setNewPrimitive] = useState('');

    const handleAddPrimitive = () => {
        if (newPrimitive.trim()) {
            setPrimitives([...primitives, newPrimitive]);
            setNewPrimitive('');
        }
    };

    const handleRemovePrimitive = (index: number) => {
        const updatedPrimitives = primitives.filter((_, i) => i !== index);
        setPrimitives(updatedPrimitives);
    };

    return (
        <div className="modal">
            <h2 className="modal-title">Primitive Library</h2>
            <input
                type="text"
                value={newPrimitive}
                onChange={(e) => setNewPrimitive(e.target.value)}
                placeholder="Add new primitive"
            />
            <button onClick={handleAddPrimitive}>Add</button>
            <ul>
                {primitives.map((primitive, index) => (
                    <li key={index}>
                        {primitive}
                        <button onClick={() => handleRemovePrimitive(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PrimitiveLibraryModal;