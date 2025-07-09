# NLW Agents

Projeto desenvolvido durante o evento da Rocketseat.

## Tecnologias e Bibliotecas Utilizadas

- **Node.js** + **TypeScript**
- **Fastify**: Framework web para Node.js, focado em performance.
- **Zod**: Validação de esquemas e tipos.
- **drizzle-orm**: ORM para manipulação de banco de dados PostgreSQL.
- **dotenv**: Carregamento de variáveis de ambiente.
- **@fastify/cors**: Middleware para CORS.
- **drizzle-kit**: Ferramentas para migração e seed do banco.
- **biome**: Linter e formatter para o código.

## Padrões de Projeto

- **Organização por responsabilidade**: Separação clara entre rotas HTTP (`src/http/routes`), lógica de banco de dados (`src/db`), e configuração de ambiente (`src/env.ts`).
- **Validação e tipagem**: Uso de Zod para validação de dados e tipagem nas rotas.
- **Modularização**: Cada rota é registrada como plugin Fastify, facilitando manutenção e escalabilidade.

## Setup e Configuração

1. **Clone o repositório e instale as dependências:**

   ```bash
   npm install
   ```

2. **Configure as variáveis de ambiente:**

   - Crie um arquivo `.env` na raiz do projeto com:
     ```
     PORT=3333
     DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
     ```

3. **Execute as migrações e seeds do banco:**

   ```bash
   # Ajuste os comandos conforme necessário para o drizzle-kit
   npm run db:seed
   ```

4. **Inicie o servidor em modo desenvolvimento:**

   ```bash
   npm run dev
   ```

5. **Acesse a rota de health check:**
   - `GET /health` → Deve retornar `Ok`.

## Observações

- O projeto utiliza PostgreSQL como banco de dados.
- As rotas estão organizadas em `src/http/routes`.
- O código segue boas práticas de modularização e validação.
