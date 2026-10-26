// Bug 2 — Crash a runtime: proprietà opzionale non gestita
interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

const clienti: Customer[] = [
  { id: "1", firstName: "Mario", lastName: "Rossi", email: "mario@example.com", phone: "+39 333 1234567" },
  { id: "2", firstName: "Laura", lastName: "Bianchi", email: "laura@example.com" },
];

function stampaContatti(customers: Customer[]): void {
  for (const c of customers) {
    // 🐛 BUG: phone è opzionale (?), può essere undefined
    // .replace() su undefined → crash a runtime
    console.log(`${c.firstName} ${c.lastName} — ${c.phone ? `Tel: ${c.phone.replace("+39 ", "0")}` : "No phone number"}`);
  }
}

stampaContatti(clienti);
