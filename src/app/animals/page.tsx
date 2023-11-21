type petObj = { name: string; id: number };

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
];

export default function Page() {
  return (
    <main>
      <h1>ANIMALS</h1>
      <section className="pets">
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
