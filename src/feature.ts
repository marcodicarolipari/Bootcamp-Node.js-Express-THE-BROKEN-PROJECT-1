// Feature opzionale — Implementa l'interfaccia Transaction
//
// Istruzioni:
// 1. Crea un'interfaccia BaseEntity con id (string) e createdAt (Date)
// 2. Crea un enum TransactionStatus con: PENDING, COMPLETED, FAILED, REVERSED
// 3. Crea un'interfaccia Transaction che estende BaseEntity con:
//    - fromAccountId: string
//    - toAccountId: string
//    - amount: number
//    - description: string
//    - executedAt: Date
//    - status: TransactionStatus
// 4. Crea un CreateTransactionDto (senza id, createdAt, executedAt, status)
// 5. Scrivi una funzione isValidTransaction(tx: CreateTransactionDto): boolean
//    che verifica: importo positivo, from !== to, descrizione non vuota

// --- SCRIVI IL TUO CODICE QUI ---
interface BaseEntity {
  id: string;
  createdAt: Date;
}

enum TransactionStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  REVERSED = "REVERSED",
}

interface Transaction extends BaseEntity {
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  description: string;
  executedAt: Date;
  status: TransactionStatus;
}

type CreateTransactionDto = Omit<
  Transaction,
  "id" | "createdAt" | "executedAt" | "status"
>;

function isValidTransaction(tx: CreateTransactionDto): boolean {
  return (
    tx.amount > 0 &&
    tx.fromAccountId !== tx.toAccountId &&
    tx.description.trim().length > 0
  );
}

// --- TEST (decommenta quando hai finito) ---
const tx: CreateTransactionDto = {
  fromAccountId: "acc-001",
  toAccountId: "acc-002",
  amount: 250,
  description: "Bonifico stipendio",
};
console.log("Transazione valida:", isValidTransaction(tx));
console.log("From === To:", isValidTransaction({ ...tx, toAccountId: "acc-001" }));
console.log("Amount negativo:", isValidTransaction({ ...tx, amount: -100 }));
