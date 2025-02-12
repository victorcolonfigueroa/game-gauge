import { Button } from '@/components/ui/button';
import ParentComponent from '../players/CreatePlayer';
import { useState } from 'react';
import ManagerModal from '@/components/ManagerModal';
import { Manager } from '@prisma/client';
import { createManagerAction } from '../action/manager/createManagerAction';
"use client"

//import




const ParentComponent = () => {
    const [isLoading, setIsLOading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSaveManager = (managerData: Manager) => {
        console.log('Saving Manager:', managerData);

        //Save manager to DB
        try {
            setIsLOading(true);
          const managerDataWithUser = { ...managerData, user: managerData.userId };
          const response = createManagerAction(managerDataWithUser);
            console.log('Manager saved:', response);
            
        } catch (error) {
            console.error('Error saving manager:', error);
        }
        finally {
            setIsLoading(false);
        }

    };

    return (
        <div>
            {
                isLoading && <p>Creating Manager...</p>
            }

            {
                !isLoading &&
                <>
                    <Button onClick={() => setIsModalOpen(true)}>Become a Manager</Button>
                        <ManagerModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSave={handleSaveManager}
                        />
                </>
            }
        </div>
    );
};

export default ParentComponent;