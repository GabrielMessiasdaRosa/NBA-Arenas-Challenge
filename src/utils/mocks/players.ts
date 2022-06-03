export type Player = {
  id: number;
  name: string;
  position: string;
  team: string;
  age: number;
  height: string;
  weight: number;
  number: number;
  image: string;
};

export type Teams = {
  id: number;
  name: string;
  image: string;
};

export const players: Player[] = [
  {
    id: 1,
    name: "LeBron James",
    position: "SF",
    team: "Cleveland Cavaliers",
    age: 30,
    height: "6-9",
    weight: 250,
    number: 23,
    image: "https://nba-players.herokuapp.com/players/lebron_james",
  },
  {
    id: 2,
    name: "Stephen Curry",
    position: "PG",
    team: "Golden State Warriors",
    age: 30,
    height: "6-8",
    weight: 205,
    number: 30,
    image: "https://nba-players.herokuapp.com/players/stephen_curry",
  },
  {
    id: 3,
    name: "Klay Thompson",
    position: "SG",
    team: "Golden State Warriors",
    age: 30,
    height: "6-6",
    weight: 215,
    number: 13,
    image: "https://nba-players.herokuapp.com/players/klay_thompson",
  },
  {
    id: 4,
    name: "Kevin Durant",
    position: "SF",
    team: "Golden State Warriors",
    age: 30,
    height: "6-7",
    weight: 220,
    number: 3,
    image: "https://nba-players.herokuapp.com/players/kevin_durant",
  },
  {
    id: 5,
    name: "Anthony Davis",
    position: "PF",
    team: "Golden State Warriors",
    age: 30,
    height: "6-9",
    weight: 230,
    number: 0,
    image: "https://nba-players.herokuapp.com/players/anthony_davis",
  },
  {
    id: 6,
    name: "Draymond Green",
    position: "PG",
    team: "Golden State Warriors",
    age: 30,
    height: "6-7",
    weight: 220,
    number: 13,
    image: "https://nba-players.herokuapp.com/players/draymond_green",
  },
  {
    id: 7,
    name: "Kemba Walker",
    position: "SG",
    team: "Golden State Warriors",
    age: 30,
    height: "6-7",
    weight: 220,
    number: 1,
    image: "https://nba-players.herokuapp.com/teams/kemba_walker",
  },
];

export const teams: Teams[] = [
  {
    id: 1,
    name: "Cleveland Cavaliers",
    image: "https://nba-players.herokuapp.com/teams/cleveland_cavaliers",
  },
  {
    id: 2,
    name: "Golden State Warriors",
    image: "https://nba-players.herokuapp.com/teams/golden_state_warriors",
  },
];
