import { useState, useEffect } from "react";
import type { Ticket, TicketPriority, TicketStatus } from "../types/ticket";

type TicketFormProps = {
  onCreateTicket: (ticket: Ticket) => void;
  onUpdateTicket: (ticket: Ticket) => void;
  editingTicket: Ticket | null;
};

const TicketForm = ({ onCreateTicket, onUpdateTicket, editingTicket }: TicketFormProps) => {
  const [subject, setSubject] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<TicketPriority>("Low");
  const [status, setStatus] = useState<TicketStatus>("Open");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (editingTicket) {
      setSubject(editingTicket.subject);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
      setStatus(editingTicket.status);
      setError("");
    } else {
      setSubject("");
      setDescription("");
      setPriority("Low");
      setStatus("Open");
      setError("");
    }
  }, [editingTicket]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (subject.trim() === "") {
      setError("Ticket subject is required.");
      return;
    }

    setError("");

    if (editingTicket) {
      const updated: Ticket = {
        ...editingTicket,
        subject: subject.trim(),
        description: description.trim(),
        priority,
        status,
      };
      onUpdateTicket(updated);
    } else {
      const newTicket: Ticket = {
        id: Date.now(),
        subject: subject.trim(),
        description: description.trim(),
        priority,
        status,
        createdAt: new Date().toISOString().split("T")[0],
      };
      onCreateTicket(newTicket);
    }

    setSubject("");
    setDescription("");
    setPriority("Low");
    setStatus("Open");
  };

  return (
    <div className="card form-card">
      <h2>{editingTicket ? "Edit Ticket" : "Create Ticket"}</h2>
      {editingTicket && (
        <p className="edit-notice">✏️ Editing ticket: <strong>{editingTicket.subject}</strong></p>
      )}
      <form onSubmit={handleSubmit} className="ticket-form">
        <div className="form-group">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input
            id="subject"
            type="text"
            className="input"
            placeholder="Enter subject"
            value={subject}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            className="input textarea"
            placeholder="Enter description"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="priority" className="form-label">Priority</label>
            <select
              id="priority"
              className="input select"
              value={priority}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriority(e.target.value as TicketPriority)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="status" className="form-label">Status</label>
            <select
              id="status"
              className="input select"
              value={status}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value as TicketStatus)}
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-full">
          {editingTicket ? "Update Ticket" : "Create Ticket"}
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
