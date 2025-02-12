import { PlusIcon } from "lucide-react";




interface TeamModalProps {
    isOpen: boolean;
    onSave: (player: Player) => void;
}

const PlayerModal = ({isOpen, onClose, onSave } : PlayerModalProps) => {
    const [teamName, setTeamName] = useState('');

    const handleSave = () => {
        onSave({ id: "1", displayName: teamName, gamesPlayed: 0, teamId: "1"});
        setTeamName('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Create Team</p>
                    <button className="delete" aria-lable="close" onClose={onClose}></button>
                </header>
                <section className="modal-card-body">
                    <div className="has-text-centered mb-4">
                        <PlusIcon />

                    </div>
                    <div className="field">
                        <label className="label">Name</label>
                        
                    </div>
                </section>
            </div>
        </div>
    )
}