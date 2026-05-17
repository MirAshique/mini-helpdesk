import type { Ticket } from "../types/ticket";

type TicketCardProps = {
  ticket: Ticket;
  onDelete: (id: number) => void;
  onEdit: (ticket: Ticket) => void;
};

const priorityClass: Record<string, string> = {
  Low: "priority-low",
  Medium: "priority-medium",
  High: "priority-high",
};

const statusClass: Record<string, string> = {
  Open: "status-open",
  "In Progress": "status-inprogress",
  Closed: "status-closed",
};

const TicketCard = ({ ticket, onDelete, onEdit }: TicketCardProps) => {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3 className="ticket-subject">{ticket.subject}</h3>
        <div className="ticket-badges">
          <span className={`badge ${priorityClass[ticket.priority]}`}>{ticket.priority}</span>
          <span className={`badge ${statusClass[ticket.status]}`}>{ticket.status}</span>
        </div>
      </div>
      <p className="ticket-description">{ticket.description}</p>
      <div className="ticket-footer">
        <span className="ticket-date">🗓 {ticket.createdAt}</span>
        <div className="ticket-actions">
          <button className="btn btn-edit" onClick={() => onEdit(ticket)}>Edit</button>
          <button className="btn btn-delete" onClick={() => onDelete(ticket.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
