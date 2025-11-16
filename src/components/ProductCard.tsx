import Link from "next/link";
import {
  FaYoutube,
  FaSpotify,
  FaAd,
  FaRobot,
  FaWrench,
  FaQuestionCircle,
} from "react-icons/fa";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  category: string;
}

const iconComponents: { [key: string]: React.ElementType } = {
  streaming: FaYoutube,
  music: FaSpotify,
  editing: FaAd,
  AI: FaRobot,
  tools: FaWrench,
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  category,
}) => {
  const IconComponent = iconComponents[category] || FaQuestionCircle;

  return (
    <Link href={`/products/${id}`}>
      <div className="flex flex-col gap-3 rounded-xl bg-[#1a202e] p-3 transition-transform transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer">
        <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex items-center justify-center">
          <IconComponent className="w-1/2 h-1/2 text-white" />
        </div>
        <div className="flex flex-col flex-1">
          <p className="text-white text-base font-medium leading-normal">
            {name}
          </p>
          <p className="text-[#9ca5ba] text-sm font-normal leading-normal">
            {price}
          </p>
          <button className="mt-auto w-full text-center text-sm font-bold text-primary hover:text-white hover:bg-primary/20 rounded-md py-2 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
