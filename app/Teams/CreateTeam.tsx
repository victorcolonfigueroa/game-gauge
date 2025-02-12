import { useState } from 'react';
import ParentComponent from '../managers/CreateManager';
import { createTeamAction } from '../action/team/createTeamAction';
import { Button } from '@/components/ui/button';
"use client"

//4 imports

const ParentComponent = () => {
    const [isLoading, setLoading] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleSaveTeam = (teamData: Team) => {
        console.log('Saving Team:', teamData);

        // Save team to database
        try {
            setLoading(true);
            const response = createTeamAction(teamData);
        } catch (error) {
            console.error('Error saving team:', error);
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
        {
            isLoading && <p>Creating Template</p>
        }

        {
            !isLoading &&
            <>
            <Button onClick={() => setIsModalOpen(true)}>Add Team</Button>
            <TeamModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSaveTeam}
            />
            </>
        }
        </div>
    );
};

export default ParentComponent;