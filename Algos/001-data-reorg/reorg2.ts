import { JournalModel, TransactionModel } from "./models";

let data1: JournalModel = {
  id: "Shah sb",
  code: "0034196",
  entries: [
    {
      date: 1700048791,
      account_name: "test",
      description: null,
      debit: 2610,
      credit: 0,
      file_urls: null,
    },
    {
      date: 1700048791,
      account_name: "Account Receivables",
      description: null,
      debit: 0,
      credit: 2610,
      file_urls: null,
    },
  ],
};

// let data2: TransactionModel[] = [
//   {
//     id: "Shah sb",
//     code: "0034196",
//     date: 1700048791,
//     account_name: "test",
//     description: null,
//     debit: 2610,
//     credit: 0,
//     file_urls: null,
//   },
//   {
//     date: 1700048791,
//     account_name: "Account Receivables",
//     description: null,
//     debit: 0,
//     credit: 2610,
//     file_urls: null,
//   },
// ];

function journalToTransaction(journal: JournalModel): TransactionModel[] {
  let { id, code, entries } = journal;

  let data3: TransactionModel[] = [];
  for (let i = 0; i < entries.length; i++) {
    let t: TransactionModel = entries[i];
    if (i == 0) {
      t = { id, code, ...t };
    }
    data3.push(t);
  }
  return data3;
}
//console.log(journalToTransaction(data1)); //by me

let d: TransactionModel[] = journalToTransaction(data1);
console.log(d);
