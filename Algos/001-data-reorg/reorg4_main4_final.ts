import { journals } from "./data2";
import { TransactionModel } from "./models";
import { arrayOfJouranlsToTransactions } from "./reorg4_final";

function main() {
  let transactions: TransactionModel[] =
    arrayOfJouranlsToTransactions(journals);
  console.log(transactions);
}

main();
