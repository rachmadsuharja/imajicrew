# ImajiCrew

> Offline-first RFID + Face Recognition Attendance System built with Next.js.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-blue?logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📖 Overview

ImajiCrew is a modern kiosk-based employee attendance system that combines **RFID authentication** and **Facial Recognition** for secure employee check-in and check-out.

The application is designed with an **offline-first architecture**, allowing attendance records to be captured even when the network is unavailable and synchronized automatically once connectivity is restored.

This project serves as a production-oriented portfolio project demonstrating scalable system design, clean architecture, and modern full-stack development practices.

---

## Features

### Authentication

- Secure administrator login
- JWT authentication
- HTTP-only Cookie sessions
- Protected routes

### Employee Management

- Employee CRUD
- RFID registration
- Face enrollment
- Employee activation workflow
- Soft delete support

### RFID Attendance

- RFID identification
- Device whitelist validation
- Duplicate attendance prevention
- Automatic attendance status classification

### Face Recognition

- Face detection
- Face embedding generation
- Cosine similarity matching
- Multi-sample enrollment

### Offline First

- IndexedDB queue
- Automatic synchronization
- Retry mechanism
- Offline attendance support

### Shift Management

- Shift CRUD
- Late detection
- Early leave detection
- Overtime calculation

### Dashboard

- Daily attendance summary
- Employee statistics
- Present/Late/Absent overview

---

# System Architecture

```
                 +-----------------------+
                 |    Admin Dashboard    |
                 +----------+------------+
                            |
                            |
                     Next.js App Router
                            |
        +-------------------+-------------------+
        |                                       |
        |                                       |
 Kiosk PWA                               REST API
        |                                       |
        |                                       |
 RFID Reader                          Prisma ORM
 Camera                                PostgreSQL
        |
 IndexedDB Offline Queue
```

---

# Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | Next.js (App Router) |
| Language | TypeScript |
| UI | Material UI |
| State | Zustand |
| Data Fetching | React Query |
| ORM | Prisma |
| Database | PostgreSQL (Neon) |
| Face Recognition | face-api.js |
| Offline Storage | IndexedDB |
| Authentication | JWT |
| Validation | Zod |
| Deployment | Vercel |

---

# Project Structure

```
imajicrew
│
├── app
│   ├── (admin)
│   ├── (kiosk)
│   └── api
│
├── components
├── hooks
├── services
├── lib
│   ├── db
│   ├── face
│   ├── sync
│   └── validation
│
├── prisma
├── public
├── types
└── utils
```

---

# Attendance Flow

```
RFID Tap
      │
      ▼
Employee Lookup
      │
      ▼
Activate Camera
      │
      ▼
Face Detection
      │
      ▼
Face Matching
      │
      ▼
Validation Engine
      │
      ▼
Image Capture
      │
      ▼
Offline Queue
      │
      ▼
Database Sync
```

---

# Validation Order

Attendance requests are validated in the following order:

1. RFID validation
2. Employee status
3. Device whitelist
4. Face matching
5. Duplicate attendance
6. Shift time rules

---

# Database

Main entities

- Admins
- Employees
- Face Embeddings
- Devices
- Attendance
- Shifts

Relationship

```
Employees
    │
    ├──────── Face Embeddings
    │
    ├──────── Attendance
    │
    └──────── Shift

Devices
    │
    └──────── Attendance
```

---

# Environment Variables

```env
DATABASE_URL=

JWT_SECRET=

FACE_MATCH_THRESHOLD=0.75

MIN_FACE_SAMPLES=3

MAX_RETRY=5

SESSION_EXPIRY_MINUTES=60

LATE_TOLERANCE_MINUTES=5
```

---

# Getting Started

## Clone

```bash
git clone https://github.com/rachmadsuharja/imajicrew.git
```

## Install

```bash
pnpm install
```

## Setup Environment

```bash
cp .env.example .env
```

Update the environment variables.

## Database

```bash
pnpm prisma migrate dev
```

Generate Prisma Client

```bash
pnpm prisma generate
```

## Run

```bash
pnpm run dev
```

---

# Roadmap

- [ ] Authentication
- [ ] Employee Management
- [ ] Shift Management
- [ ] Attendance Engine
- [ ] Face Recognition
- [ ] RFID Integration
- [ ] Offline Queue
- [ ] Dashboard
- [ ] Multi Branch
- [ ] Payroll Integration
- [ ] Mobile App
- [ ] RBAC
- [ ] Audit Logs

---

# Future Improvements

- Multi-branch deployment
- Mobile attendance application
- Payroll integration
- Role-based access control
- Audit logging
- Runtime configuration
- CI/CD pipeline
- Attendance analytics

---

# License

MIT License

---

## Author

**Rachmad Suharja**

GitHub: https://github.com/rachmadsuharja
