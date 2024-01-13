const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  scorers: { Lewandowski: 2, Gnarby: 1, Hummels: 1 },
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// LAB 1.1
// Câu 1:
const [players1, players2] = game.players;
console.log(players1, players2);

// Câu 2:
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// Câu 3:
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Câu 4:
const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];

// Câu 5:
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// Câu 6:
function printGoals(...players) {
  console.log("Cầu thủ đã ghi bàn:");
  players.forEach((player, index) => {
    console.log(`${index + 1}. ${player}`);
  });
  console.log(`Tổng số cầu thủ đã ghi bàn: ${players.length}`);
}

const goalScorers = Object.keys(game.scorers);
printGoals(...goalScorers);

// Câu 7:
team1 < team2 && console.log("Đội 1 có nhiều khả năng thắng hơn");
team1 > team2 && console.log("Đội 2 có nhiều khả năng thắng hơn");

// LAB 1.2
// Câu 1:
// for (const [player, i] of Object.entries(game.scorers))
//   console.log(`Goal ${i}: ${player}`);

// // Câu 2:
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // Câu 3:
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "hòa" : `thắng của ${game[team]}`;
//   console.log(`Tỉ lệ ${teamStr} ${odd}`);
// }
