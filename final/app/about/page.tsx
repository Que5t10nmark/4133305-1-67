import Card from "@/components/about/Card";
import { FC } from "react";
const About: FC = () =>{
    return(
      <>
      <div>
        <figure>
        <ul className="steps steps-vertical lg:steps-horizontal">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Choose plan</li>
        <li className="step">Purchase</li>
        <li className="step">Receive Product</li>
        </ul>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            width={300}
            height={300} 
          />
        </figure>
      </div>
      <div className="pe-10">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sunt harum ipsum, saepe omnis quam voluptatem mollitia deleniti, cumque nemo voluptatibus sit minus incidunt sequi nesciunt eius perspiciatis, quas quae!
        </p>
      </div>
      <div className="flex flex-row">
        <Card/>
        <Card/>
      </div>

      </>
    );
};
export default About;