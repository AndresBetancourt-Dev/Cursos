function simpleState<T>(initial: T): [() => T, (value: T) => void] {
  let currentValue: T = initial;
  return [
    () => currentValue,
    (value: T) => {
      currentValue = value;
    },
  ];
}

const [luckyNumber, setLuckyNumber] = simpleState(75);
console.log(luckyNumber());
setLuckyNumber(20);
console.log(luckyNumber());

const [games, setGames] = simpleState(["Halo", "God of War", "PUBG"]);
console.log(games());
setGames([...games(), "The Witcher 3"]);
console.log(games());

const [luckyWord, setLuckyWord] = simpleState<string | null>(null);
console.log(luckyWord());
setLuckyWord("This is the lucky word");
console.log(luckyWord());

/**
 * A class generic
 * A function generic
 * A interface generic
 * A Type generic
 */

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (value: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hitPoints: number;
}

interface Person2 {
  firstName: string;
  age: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Bulbasur",
    hitPoints: 20,
  },
  {
    name: "Pikachu",
    hitPoints: 10,
  },
];

const people: Array<Person2> = [
  {
    firstName: "Andrés",
    age: 21,
  },
  {
    firstName: "Maria",
    age: 22,
  },
  {
    firstName: "Santiago",
    age: 16,
  },
];

const ranks = ranker(pokemon, ({ hitPoints }) => hitPoints);
console.log(ranks);

const persons2 = ranker(people, ({ age }) => age);
console.log(persons2);
