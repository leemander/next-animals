type petParam = { params: { pets: string } };

export default function Page({ params }: petParam) {
  return (
    <main>
      <h1>This is a dynamic route: {params.pets}</h1>
    </main>
  );
}
