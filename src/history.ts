import {Member} from "./member";

export type HistoryEntry = {
    generation: number,
    best: Member,
    average: number,
    deviation: number
}

export class History {

    private entries: Array<HistoryEntry> = Array();

    all(): Array<HistoryEntry> {
        return this.entries;
    }

    first(n: number): Array<HistoryEntry> {
        return this.entries.slice(0, n);
    }

    last(n: number): Array<HistoryEntry> {
        return this.entries.slice(-n);
    }

    add(entry: HistoryEntry): void {
        this.entries.push(entry);
    }
}
