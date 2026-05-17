import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import type { Ticket } from "./types/ticket";
import { initialTickets } from "./data/mockTickets";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TicketListPage from "./pages/TicketListPage";
import CreateTicketPage from "./pages/CreateTicketPage";

function AppRoutes() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);

  const handleCreateTicket = (ticket: Ticket) => {
    setTickets((prev) => [ticket, ...prev]);
  };

  const handleDeleteTicket = (id: number) => {
    setTickets((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEditTicket = (ticket: Ticket) => {
    setEditingTicket(ticket);
    navigate("/create");
  };

  const handleUpdateTicket = (updated: Ticket) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t))
    );
    setEditingTicket(null);
  };

  return (
    <>
      <Header />
      <Navbar />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <TicketListPage
                tickets={tickets}
                onDelete={handleDeleteTicket}
                onEdit={handleEditTicket}
              />
            }
          />
          <Route
            path="/create"
            element={
              <CreateTicketPage
                onCreateTicket={handleCreateTicket}
                onUpdateTicket={handleUpdateTicket}
                editingTicket={editingTicket}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
