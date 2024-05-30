


const ReviewCard = ({single}) => {
 console.log(single)
 const rating = (value) =>{
  const rate = []
  for (let i = 1; i <= value; i++){
    rate.push(1)
  }
  return rate
 }

const mainRating = rating(single.rating)


 console.log(mainRating)

 

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {single?.reviewerName}
        </h5>
      </a>
      <div className="rating">
        {
          mainRating.map((star,id) =>  <input  key={id} type="radio" name="rating-1" className="mask mask-star" disabled/>)
        }
       
      </div>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {single?.review}
      </p>
    </div>
  );
};

export default ReviewCard;
