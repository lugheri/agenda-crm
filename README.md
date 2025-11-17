Sistema de CRM para agendamento de serviços e gestão de contatos.

## Arquitetura

Microserviços separados por domínio:
- Smart Calendar
- Customers Service
- Products Service
- Sales Service
- Messaging Service
- Metrics Service

## Setup

### Pré-requisitos
- Node.js 18+
- Docker e Docker Compose
- PostgreSQL

### Instalação

```bash
git clone https://github.com/lugheri/agenda-crm.git
cd agenda
npm install
docker-compose up