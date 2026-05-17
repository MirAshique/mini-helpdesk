import type { Ticket } from "../types/ticket";

export const initialTickets: Ticket[] = [
  {
    id: 1,
    subject: "Cannot login to account",
    description: "User is unable to login using correct credentials.",
    priority: "High",
    status: "Open",
    createdAt: "2026-03-26",
  },
  {
    id: 2,
    subject: "Password reset not working",
    description: "The password reset email is not being delivered.",
    priority: "High",
    status: "In Progress",
    createdAt: "2026-03-27",
  },
  {
    id: 3,
    subject: "Dashboard loading slowly",
    description: "The main dashboard takes over 10 seconds to load.",
    priority: "Medium",
    status: "Open",
    createdAt: "2026-03-28",
  },
  {
    id: 4,
    subject: "Export to CSV not working",
    description: "Clicking the export button does nothing on the reports page.",
    priority: "Low",
    status: "Closed",
    createdAt: "2026-03-29",
  },
  {
    id: 5,
    subject: "Profile picture not uploading",
    description: "Images larger than 1MB fail to upload silently.",
    priority: "Medium",
    status: "Open",
    createdAt: "2026-03-30",
  },
];
