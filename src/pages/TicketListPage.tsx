import { useNavigate } from "react-router-dom";
import type { Ticket } from "../types/ticket";
import TicketCard from "../components/TicketCard";

type TicketListPageProps = {
  tickets: Ticket[];
  onDelete: (id: number) => void;
  onEdit: (ticket: Ticket) => void;
};

const TicketListPage = ({ tickets, onDelete, onEdit }: TicketListPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page-header">
        <h2 className="page-title">All Tickets <span className="ticket-count">{tickets.length}</span></h2>
        <button className="btn btn-primary" onClick={() => navigate("/create")}>+ New Ticket</button>
      </div>

      {tickets.length === 0 ? (
        <div className="empty-state">
          <p>No tickets yet.</p>
          <button className="btn btn-primary" onClick={() => navigate("/create")}>Create your first ticket</button>
        </div>
      ) : (
        <div className="ticket-list">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TicketListPage;
