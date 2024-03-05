import Dexie, { Table } from "dexie";

export interface Skill {
	skill: string;
}

export class MySubClassedDexie extends Dexie {
	// 'friends' is added by dexie when declaring the stores()
	// We just tell the typing system this is the case
	skills!: Table<Skill>;

	constructor() {
		super("myDatabase");
		this.version(1).stores({
			skills: "++id, skill", // Primary key and indexed props
		});
	}
}

export const db = new MySubClassedDexie();
