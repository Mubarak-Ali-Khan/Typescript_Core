import { JournalModel, TransactionModel } from "./models";

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

export function arrayOfJouranlsToTransactions(journalArr: JournalModel[]) {
  let transactions: TransactionModel[] = [];
  for (let j = 0; j < journalArr.length; j++) {
    let d: TransactionModel[] = journalToTransaction(journalArr[j]);
    transactions = [...transactions, ...d];
  }
  return transactions;
}
