import { useNavigate } from "react-router-dom";
import type { Ticket } from "../types/ticket";
import TicketForm from "../components/TicketForm";

type CreateTicketPageProps = {
  onCreateTicket: (ticket: Ticket) => void;
  onUpdateTicket: (ticket: Ticket) => void;
  editingTicket: Ticket | null;
};

const CreateTicketPage = ({ onCreateTicket, onUpdateTicket, editingTicket }: CreateTicketPageProps) => {
  const navigate = useNavigate();

  const handleCreate = (ticket: Ticket) => {
    onCreateTicket(ticket);
    navigate("/");
  };

  const handleUpdate = (ticket: Ticket) => {
    onUpdateTicket(ticket);
    navigate("/");
  };

  return (
    <div className="page page-narrow">
      <div className="page-header">
        <h2 className="page-title">{editingTicket ? "Edit Ticket" : "New Ticket"}</h2>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>← Back to Tickets</button>
      </div>
      <TicketForm
        onCreateTicket={handleCreate}
        onUpdateTicket={handleUpdate}
        editingTicket={editingTicket}
      />
    </div>
  );
};

export default CreateTicketPage;
