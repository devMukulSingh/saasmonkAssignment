import { Imovie, Ireview } from "@/lib/types";
import { format } from "date-fns";
import { Edit, Trash, Trash2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import { Button } from "@/components/ui/button";
import useSWR, { useSWRConfig } from "swr";
import useSWRMutation from "swr/mutation";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type Props = {
  movie: Imovie;
};

async function sendRequest(url: string) {
  return await axios.delete(url);
}

const MovieCard = ({ movie }: Props) => {
  const { mutate } = useSWRConfig();
  const [openDialog, setOpenDialog] = useState(false);
  const router = useRouter();

  const { data:reviews} = useSWR<Ireview[]>(`/api/review/get-review?movieId=${movie.id}`);
  const averageRating =
    reviews?.reduce((prev, curr) => prev + curr.rating, 0) || 0
  
  const { trigger, isMutating } = useSWRMutation(
    `/api/movie/${movie.id}`,
    sendRequest,
    {
      onSuccess() {
        toast.success(`Movie deleted`);
        mutate(
          (key) => true,
          undefined, // update cache data to `undefined`
          { revalidate: false } // do not revalidate
        );
      },
      onError(e) {
        toast.error("Sowething went wrong, please try again later");
        console.log(e.message);
      },
    }
  );
  const handleDeleteMovie = async () => {
    try {
      await trigger();
    } catch (e: any) {
      console.log(e.message);
    }
  };
  return (
    <div
      className="
    bg-slate-300
    flex
    flex-col
    gap-5
    px-4
    py-8
    rounded-sm
    justify-center
    relative
    "
    >
      <Link
        className="    
      flex
      flex-col
      gap-5"
        href={`reviews/${movie.id}`}
      >
        <h1>{movie.name}</h1>
        <h1 className="italic">
          Released: {format(movie.releaseDate, "do MMMM, yyyy")}
        </h1>
        <h1 className="font-bold">Ratings: { averageRating/(reviews?.length || 0)  || "N/A"}</h1>
      </Link>
      <div
        className="
        z-40
    text-neutral-600 
    flex 
    gap-3 
    self-end 
    items-center
    ml-auto
    absolute
    right-2
    bottom-3
    w-fit
    "
      >
        <Link href={`movie/${movie.id}`}>
          <Edit size={20} />
        </Link>
        <DeleteModal
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          disabled={isMutating}
          onContinue={handleDeleteMovie}
        >
          <Button variant={"ghost"} size={"icon"}>
            <Trash2 size={20} />
          </Button>
        </DeleteModal>
      </div>
    </div>
  );
};

export default MovieCard;
