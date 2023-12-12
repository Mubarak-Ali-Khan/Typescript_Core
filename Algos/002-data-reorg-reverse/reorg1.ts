import { transactions } from "./data";
import { JournalModel, TransactionModel } from "./models";

// let data1: JournalModel = {
//   id: "Shah sb",
//   code: "0034196",
//   entries: [
//     {
//       date: 1700048791,
//       account_name: "test",
//       description: null,
//       debit: 2610,
//       credit: 0,
//       file_urls: null,
//     },
//     {
//       date: 1700048791,
//       account_name: "Account Receivables",
//       description: null,
//       debit: 0,
//       credit: 2610,
//       file_urls: null,
//     },
//   ],
// };

let data2: TransactionModel[] = [
  {
    id: "Shah sb",
    code: "0034196",
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
  {
    id: "Shah sb2",
    code: "00341962",
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
  {
    date: 1700048791,
    account_name: "Account Receivables",
    description: null,
    debit: 0,
    credit: 2610,
    file_urls: null,
  },
];

function convert(index: number, data: TransactionModel[]) {
  let { id, code, ...entry } = data[index];
  let journal: JournalModel = { id: id, code: code, entries: [entry] };
  for (let i = index + 1; i < data.length; i++) {
    if ("id" in data[i]) break;
    journal.entries.push(data[i]);
  }
  return journal;
}

function convertMany(data2: TransactionModel[]) {
  let journalArr: JournalModel[] = [];
  let index = 0;

  while (index < data2.length) {
    let out: JournalModel = convert(index, data2);
    console.log("=========================== ", index, out.entries.length);
    console.log(out);
    journalArr.push(out);
    index += out.entries.length;
  }
  return journalArr;
  // index += index + out.entries.length;
  // out = convert(index, data2);
  // console.log("===========================");
  // console.log(out);
}

function main() {
  let out: JournalModel[] = convertMany(transactions);
  console.log(out.length);
}

main();
