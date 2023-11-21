type petObj = { name: string; id: number };
type petsSearchQuery = {
  sortBy: string;
};

import { Petrona } from "next/font/google";
import Link from "next/link";

const pets: petObj[] = [
  {
    name: "Darcy",
    id: 0,
  },
  {
    name: "Buddy",
    id: 1,
  },
  {
    name: "Zelda",
    id: 2,
  },
  {
    name: "Tess",
    id: 3,
  },
  {
    name: "Nanuk",
    id: 4,
  },
  {
    name: "Rover",
    id: 5,
  },
];

function comparePets(a: petObj, b: petObj) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

export default function Page({
  searchParams,
}: {
  searchParams: petsSearchQuery;
}) {
  if (searchParams.sortBy === "asc") {
    pets.sort(comparePets);
  } else if (searchParams.sortBy === "desc") {
    pets.sort(comparePets).reverse();
  }

  return (
    <main>
      <h1>ANIMALS</h1>
      <section className="pets">
        <nav className="flex underline gap-2 my-2 text-blue-400">
          <Link href="/animals/?sortBy=asc">Sort A-Z</Link>
          <Link href="/animals/?sortBy=desc">Sort Z-A</Link>
        </nav>
        {pets.map((pet) => {
          return (
            <div className="my-4 text-orange-400 underline" key={pet.id}>
              <Link href={`/animals/${pet.name.toLowerCase()}`}>
                <h2>{pet.name}</h2>
              </Link>
            </div>
          );
        })}
      </section>
    </main>
  );
}
