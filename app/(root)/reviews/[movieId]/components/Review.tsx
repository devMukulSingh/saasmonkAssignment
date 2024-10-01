"use client";
import DeleteModal from "@/app/(root)/(home)/components/DeleteModal";
import { Button } from "@/components/ui/button";
import { Ireview } from "@/lib/types";
import axios from "axios";
import { Edit, Edit2, Trash2 } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";
import useSWRMutation from "swr/mutation";

type Props = {
  review: Ireview;
};

async function sendRequest(url: string) {
  return await axios.delete(url);
}

const Review = ({ review }: Props) => {
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const { isMutating, trigger } = useSWRMutation(
    `/api/review/${review.id}`,
    sendRequest,
    {
      populateCache: true,

      onSuccess() {
        router.refresh();
        router.push("/");
        toast.success("Review deleted");
      },
      onError(e) {
        console.log(e.message);
        toast.error(`Something went wrong please try again later`);
      },
    }
  );
  const handleDelete = () => {
    try {
      trigger();
    } catch (e: any) {
      console.log(e.message);
      toast.error(`Something went wrong please try again later`);
    }
  };
  return (
    <div
      className="
    border-2
    border-blue-100
    pb-2
    pt-5
    px-5
    flex
    flex-col
    gap-5
    "
    >
      <div
        className="
        flex 
        justify-between
        "
      >
        <h1>{review.reviewComments}</h1>
        <h1 className="text-blue-500">{review.rating}/10</h1>
      </div>
      <div
        className="
         flex 
        justify-between
        "
      >
        <h1 className="italic">By {review?.reviewerName || "N/A"}</h1>
        <div
          className="
        flex
        items-center
        gap-2
        text-neutral-500
        "
        >
          <Link href={`/review/${review.id}`}>
            <Edit className="cursor-pointer" size={20} />
          </Link>
          <DeleteModal
            onContinue={handleDelete}
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            disabled={isMutating}
          >
            <Button variant={"ghost"} size={"icon"}>
              <Trash2 className="cursor-pointer" size={20} />
            </Button>
          </DeleteModal>
        </div>
      </div>
    </div>
  );
};

export default Review;
