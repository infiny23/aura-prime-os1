# Savage Paradigm Engine

## Overview
The Savage Paradigm Engine is a full-stack TypeScript application that integrates a Next.js backend with a Vite + React frontend. This project aims to create a unified system for managing cognitive processes and facilitating adaptive learning through advanced AI techniques.

## Project Structure
The project is organized into three main directories:

- **backend**: Contains the server-side application built with Next.js, including API routes, business logic, and type definitions.
- **frontend**: Contains the client-side application built with Vite and React, providing a user interface for interacting with the backend.
- **system-diagrams**: Contains Mermaid.js diagrams that visualize the system architecture and processes.

## Backend
The backend is structured as follows:

- **app**: Contains the main application logic, including server actions and API routes.
  - `actions.ts`: Server action functions callable from the UI.
  - `api/cron/process-aal/route.ts`: Defines the GET endpoint for processing the job queue.
  - `page.tsx`: Main entry point for the backend application.

- **lib**: Contains utility functions and type definitions.
  - `types.ts`: TypeScript interfaces and types used throughout the backend.
  - `llm.ts`: Logic for interacting with the LLM gateway.
  - `arbitration.ts`: Core arbitration engine for selecting winning proposals.
  - `autogenesis.ts`: Meta-learning kernel for updating adeptness scores.

- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file specifying compiler options.
- **vercel.json**: Deployment configuration for Vercel, including cron job settings.

## Frontend
The frontend is structured as follows:

- **src**: Contains the main application code.
  - `App.tsx`: Main React component orchestrating the UI.
  - `auraService.ts`: Simulates the backend service in the browser.
  - `types.ts`: TypeScript types and interfaces used in the frontend.
  - **components**: Contains various React components for the UI.
    - `BeliefStoryModal.tsx`: Displays belief stories in a modal.
    - `ArchivePanel.tsx`: Displays archived data.
    - `CognitiveEnergyPanel.tsx`: Visualizes cognitive energy metrics.
    - `MetacognitiveLoadPanel.tsx`: Displays metacognitive load information.
    - `MetaCorePanel.tsx`: Visualizes the meta-core of the system.
    - `CurriculumDesigner.tsx`: Manages curricula.
    - `QualiaBackground.tsx`: Visualizes qualia backgrounds.
    - `PrimitiveLibraryModal.tsx`: Manages a library of primitives.
    - `SelfModelVisualizer.tsx`: Visualizes self-models.
    - `PersonaDistiller.tsx`: Distills personas.
    - `PrimitiveForge.tsx`: Forging new primitives.
    - `EvolutionProposalCard.tsx`: Displays evolution proposals.

- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file specifying compiler options.
- **vite.config.ts**: Vite build configuration, including environment variable definitions.

## System Diagrams
The system diagrams provide visual representations of the architecture and processes:

- `v6_0_EventDrivenArchitecture.mmd`: Visualizes the event-driven architecture of the system.
- `adaptiveAutogenesisLoop.mmd`: Visualizes the adaptive autogenesis loop process.
- `coherenceThresholdUnlocking.mmd`: Visualizes the coherence threshold unlocking process.

## Getting Started
To get started with the Savage Paradigm Engine, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd savage-paradigm-engine
   ```

2. Install dependencies for the backend:
   ```
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```
   cd ../frontend
   npm install
   ```

4. Run the backend:
   ```
   cd backend
   npm run dev
   ```

5. Run the frontend:
   ```
   cd ../frontend
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.