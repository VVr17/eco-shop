import { AiFillStar } from "react-icons/ai";
import { ICustomerReview } from "types/product";

interface IProps {
  customerReviews: ICustomerReview[];
  rating: string;
}

const CustomerReviews: React.FC<IProps> = ({ customerReviews, rating }) => {
  return (
    <div>
      <p>Customer reviews</p>
      <div>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <p>{rating}/5</p>
      </div>

      <ul>
        {customerReviews.map(({ id, name, desc, date, rating }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{desc}</p>
            <p>{date}</p>
            <p>{rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerReviews;
