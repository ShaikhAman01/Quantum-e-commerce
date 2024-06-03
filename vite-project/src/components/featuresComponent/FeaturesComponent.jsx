import shipping from "../../assets/shipping.svg";
import checked from "../../assets/checked.svg";
import support from "../../assets/support.svg";
import payment from "../../assets/payment.svg";

const features = [
  {
    icon: <img src={shipping} alt="Free Shipping" />,
    title: 'Free Shipping',
    description: 'Free Shipping On All Order'
  },
  {
    icon: <img src={checked} alt="Money Guarantee" />,
    title: 'Money Guarantee',
    description: '30 Day Money Back'
  },
  {
    icon: <img src={support} alt="Online Support 24/7" />,
    title: 'Online Support 24/7',
    description: 'Technical Support 24/7'
  },
  {
    icon: <img src={payment} alt="Secure Payment" />,
    title: 'Secure Payment',
    description: 'All Cards Accepted'
  }
];

const FeaturesComponent = () => {

  return (
    <div className="px-16 pt-10 flex justify justify-between my-10">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center text-center max-w-xs">
          <div className=" bg-primary p-1 rounded-full h-10 w-10 mb-2 mr-2">{feature.icon}</div>
          <div className="flex flex-col">
            <div className="font-bold text-lg mb-1">{feature.title}</div>
            <div className="text-gray-500">{feature.description}</div>
          </div>
        </div>
      ))}
    </div>
  ); 
  
}

export default FeaturesComponent;
