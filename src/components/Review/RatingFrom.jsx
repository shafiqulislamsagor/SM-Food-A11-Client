
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const RatingFrom = () => {
    const {user} = UseAuth()
    console.log(user)
  const loginForm = async(event) => {
    event.preventDefault();
    const rating = event.target.rating.value;
    const review = event.target.review.value;
    const ReviewCollection = {
        rating ,
        review,
        reviewerName:user?.displayName
    }
    try{
        await axios.post(`${import.meta.env.VITE_API_URL}/review`,ReviewCollection)
        Swal.fire({
            title: "Successfully",
            text: "Your Food review Added..!!",
            icon: "success"
        });
        event.target.reset()
    }
    catch(error){
        toast.error(error.message)
    }

    console.log(ReviewCollection)
  };


  return (
    <div>
      <form
        onSubmit={loginForm}
        className="card-body pt-0 w-full lg:w-2/5 mx-auto"
      >
        <div>
          <h2 className="text-center text-3xl text-white font-bold">
            Your Reviews
          </h2>
        </div>
        <div>
          <label className="text-xs block mb-2">Rating</label>
          <div className="relative flex items-center">
            <input
              name="rating"
              type="number"
              required
              className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
              placeholder="Enter Your Rating"
              max={5}
              min={1}
            />
          </div>
        </div>
        <div className="mt-6">
          <textarea
          name="review"
            placeholder="Your Review Please"
            className="textarea textarea-bordered textarea-md w-full "
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Review</button>
        </div>
      </form>
    </div>
  );
};

export default RatingFrom;
