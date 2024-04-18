import Team from "./Team";
import { game_1, game_2, game_3, game_4, game_5 } from "../../data";

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
			case 2:
				this.questions = JSON.parse(JSON.stringify(game_2));
				break;
			case 3:
				this.questions = JSON.parse(JSON.stringify(game_3));
				break;
			case 4:
				this.questions = JSON.parse(JSON.stringify(game_4));
				break;
			case 5:
				this.questions = JSON.parse(JSON.stringify(game_5));
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
