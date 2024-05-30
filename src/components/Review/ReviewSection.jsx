import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RatingFrom from "./RatingFrom";
import ReviewCard from "./ReviewCard";
import { Triangle } from "react-loader-spinner";

const ReviewSection = () => {
  const reviewData = async () => {
    try {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/review`);
      return data;
    } catch (err) {
      console.log(err.message);
    }
  };

  const { data: review = [], isLoading } = useQuery({
    queryFn: () => reviewData(),
    queryKey: ["review", reviewData],
  });

  if (isLoading)
    return (
      <div className="flex justify-centerflex justify-center items-center h-screen">
        <Triangle
          visible={true}
          height="100"
          width="100"
          color="#ff0"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  return (
    <div className="w-full lg:w-4/5 mx-auto my-10">
      <RatingFrom />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {review.map((single) => (
          <ReviewCard key={single._id} single={single}/>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
