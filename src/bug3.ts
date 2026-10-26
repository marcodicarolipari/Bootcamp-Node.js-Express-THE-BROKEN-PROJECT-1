// Bug 3 — any nascosto che disabilita il type checking
interface Account {
  id: string;
  iban: string;
  balance: number;
}

// 🐛 BUG: il parametro è "any" → TypeScript non controlla nulla
function processAccount(account: Account) {
  console.log(`IBAN: ${account.iban}`);
  console.log(`Saldo: ${account.saldoCorrente}`);  // Campo inesistente! Nessun errore...
  console.log(`Tipo: ${account.tipo}`);             // Altro campo inesistente!
}

const conto: Account = {
  id: "1",
  iban: "IT60X0542811101000000123456",
  balance: 15420.50,
};

processAccount(conto);
