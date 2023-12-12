export interface EntriesModel {
  date: number;
  account_name: string;
  description: string;
  debit: number;
  credit: number;
  file_urls: string;
}

export interface JournalModel {
  id?: string;
  code?: string;
  entries: EntriesModel[];
}

export interface TransactionModel {
  id?: string;
  code?: string;
  date: number;
  account_name: string;
  description: string | null;
  debit: number;
  credit: number;
  file_urls: string | null;
}
