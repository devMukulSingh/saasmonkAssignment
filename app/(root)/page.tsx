import RatingCard from "./components/RatingCard";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-5">
      <h1 className="text-3xl">The best movie reviews site!</h1>

      <SearchBar />
      <div
        className="
      grid 
      lg:grid-cols-3 
      md:grid-cols-2 
      grid-cols-1
      gap-8
      "
      >
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
      </div>
    </main>
  );
}
