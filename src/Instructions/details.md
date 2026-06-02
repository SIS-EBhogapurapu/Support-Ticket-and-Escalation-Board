# 📌 SLA & Support Queue System

## SLA in 5 Lines
- **Definition:** An SLA is a documented agreement between a service provider and a customer specifying service expectations.  
- **Scope:** Covers uptime, response time, resolution time, and quality of service.  
- **Measurement:** Performance tracked using metrics like MTTR or system availability.  
- **Accountability:** Providers are held accountable with penalties or rewards based on compliance.  
- **Usage:** Common in IT, outsourcing, and internal teams to formalize expectations and improve delivery.  

An **SLA (Service Level Agreement)** is a formal contract that defines expected service standards between a provider and a customer, including performance metrics and accountability. It ensures clarity on responsibilities, sets measurable targets, and provides remedies if commitments are not met.

---

## 🎯 Project Overview
This system is designed as a **lightweight internal support queue** for teams.  
It is especially useful for interns to learn about workflow states and service-style operations.

---

## ⚙️ Core Features
- **Ticket lifecycle:** Raise, assign, update, and close tickets with status workflows.  
- **Priority management:** Tickets flagged as Low, Medium, High, or Critical.  
- **Category filtering:** Search and filter tickets by category (e.g., IT, HR, Finance).  
- **Ownership visibility:** Each ticket has an assigned owner and escalation level.  
- **Comment threads:** Activity history and discussions per ticket.  
- **SLA tracking:** Timer or overdue flag to highlight breaches.  
- **Escalation history:** Track when and how tickets were escalated.  
- **Analytics dashboard:** Simple view of ticket distribution by category, priority, and resolution time.  

---

## 🚀 Purpose
- Provide interns and new team members with hands-on experience in **workflow management**.  
- Simulate **real-world service operations** with SLA tracking and escalation.  
- Offer a **transparent and accountable system** for internal support requests.  

---

## 📊 Benefits
- Clear visibility into ticket ownership and progress.  
- Improved accountability through SLA monitoring.  
- Easy categorization and prioritization of requests.  
- Lightweight design for quick adoption and training.  

---

## 🔧 Tech Notes
- Designed to be **lightweight** and easy to integrate.  
- Can be extended with **dashboards, notifications, or integrations**.  
- Ideal for **internal teams, training environments, and small-scale support operations**.  

# 🖼️ Wireframe Layouts

## 1. Ticket List / Queue View
**Header:** Search bar + Filters (Category, Owner, Priority, Status)  

**Table Columns:**
- Ticket ID  
- Title / Category  
- Priority (colored flag)  
- Status (Open, In Progress, Escalated, Closed)  
- Owner  
- SLA / Overdue indicator  

**Actions:**
- Raise new ticket  
- Bulk assign  
- Export analytics  

---

## 2. Ticket Detail View
**Top Section:** Ticket metadata (ID, Category, Priority, Status, Owner, Escalation Level)  

**Middle Section:** Description + SLA timer  

**Right Sidebar:** Escalation history timeline  

**Bottom Section:** Comment thread with activity log  

---

## 3. Analytics Dashboard
**Charts:**
- Pie chart: Tickets by category  
- Bar chart: Tickets by priority  
- Line chart: SLA breaches over time  

**KPIs:**
- Average resolution time  
- Escalation count  
- Open vs Closed ratio  

---

## 🎯 Purpose
This setup balances **simplicity with visibility**, making it easy for interns and internal teams to learn structured support workflows while keeping operations lightweight.

# 🖥️ Tech Stack & Layered Architecture

## 🖥️ Frontend (Angular)
The **Angular** application is the user-facing interface.  
**Responsibilities:**
- **Ticket Queue UI:** List, filter, and search tickets by category, owner, or priority.  
- **Ticket Detail View:** Show metadata, SLA timer, escalation history, and comment threads.  
- **Analytics Dashboard:** Charts and KPIs for ticket distribution and SLA breaches.  
- **Forms:** Raise new tickets, update status, assign owners, and add comments.  
- **Notifications:** SLA overdue alerts, escalation flags, and activity updates.  

---

## ⚙️ Middleware (APIs with .NET)
The **.NET Web API** acts as the service layer between frontend and backend.  
**Responsibilities:**
- **Authentication & Authorization:** User roles (interns, managers, admins).  
- **Ticket Management APIs:** CRUD operations for tickets, comments, and escalation levels.  
- **Workflow Engine:** Status transitions (Open → Assigned → Escalated → Closed).  
- **SLA Service:** Timer checks, overdue flagging, escalation triggers.  
- **Analytics Service:** Aggregate data for dashboards (tickets by category, resolution times).  
- **Logging & Audit Trail:** Track updates, ownership changes, and escalation history.  

---

## 🗄️ Backend (SQL Server)
The **SQL Server** database stores all persistent data.  
**Responsibilities:**
- **Tables:**
  - `Tickets` (ID, Title, Category, Priority, Status, Owner, SLA, EscalationLevel).  
  - `Users` (ID, Name, Role, Team).  
  - `Comments` (TicketID, UserID, Timestamp, Text).  
  - `Escalations` (TicketID, Level, Timestamp, Notes).  
- **Indexes:** Optimize search/filter by category, owner, and status.  
- **Stored Procedures:** For SLA checks, escalation triggers, and analytics aggregation.  
- **Relationships:** Foreign keys between tickets, users, comments, and escalations.  
- **Data Integrity:** Constraints to enforce workflow rules (e.g., closed tickets cannot be updated).  

---

## 📊 Layered Architecture Overview

| Layer        | Tech        | Responsibilities |
|--------------|-------------|------------------|
| **Frontend** | Angular     | UI, forms, dashboards, notifications |
| **Middleware** | .NET APIs | Workflow logic, SLA checks, analytics, security |
| **Backend**  | SQL Server  | Data storage, queries, relationships, integrity |

---

## 🎯 Why This Matters
This division ensures **clean separation of concerns**:  
- Angular handles **presentation**.  
- .NET manages **business logic and workflows**.  
- SQL Server secures and structures the **data layer**.  

This layered approach improves **scalability, maintainability, and clarity** in responsibilities across the system.
