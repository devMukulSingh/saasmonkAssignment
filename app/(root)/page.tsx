import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-5">
      <h1 className="text-3xl">The best movie reviews site!</h1>
      <SearchBar/>
    </main>
  );
}
