import Team from "./Team";
import { game_1 } from "../../data";

export default class Game {
	teams: Team[];
	questions: any;

	constructor(names: string[], gameNum: number) {
		this.teams = [];
		names.forEach((name) => {
			this.teams.push(new Team(name));
		});

		switch (gameNum) {
			case 1:
				this.questions = game_1;
				break;
			default:
				this.questions = game_1;
		}
	}

	getNames() {
		const names = this.teams.map((team) => {
			return team.name;
		});
		return names;
	}
}
