import SearchBar from "./components/SearchBar";
import MovieCards from "./components/MovieCards";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-5">
      <h1 className="text-3xl">The best movie reviews site!</h1>
      <SearchBar />
      <MovieCards />
    </main>
  );
}
