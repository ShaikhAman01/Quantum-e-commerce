import { Link } from "react-router-dom";
import  facebook  from "../../assets/icons-facebook.svg";
import  instagram  from "../../assets/icons-instagram.svg";
import  linkedin  from "../../assets/icons-linkedin.svg";


const Footer = () => {

  const footerLinks = [
    {
      title:"Home",
      link:"/#"
    },
   
    {
      title:"About",
      link:"/about"
    },
    {
      title:"Contact",
      link:"/contact"
    },
  ]
  return  (
    <div className="dark:bg-gray-900 py-12">
      <div className="px-16 mx-auto ">
        <div className="grid md:grid-cols-3 pt-5">
          {/* Company Details */}
          <div className="py-8">
            <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
              Quantum
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nisi voluptatum sapiente ipsum eaque.
            </p>
                            {/* Social Links */}
                            <div className="flex items-center gap-3 mt-6">
                  <a href=""><img src={facebook} alt="" className="w-6 h-6"/></a>
                  <a href=""><img src={instagram} alt="" className="w-6 h-6"/></a>
                  <a href=""><img src={linkedin} alt="" className="w-6 h-6"/></a>
                </div>
          </div>
          
          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 text-left">
            <div className="py-8">
              <h1 className="text-xl font-bold mb-3">Important Links</h1>
              <ul className="space-y-3">
                {footerLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="text-gray-600 hover:text-black duration-300">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Second Column Links */}
            <div className="py-8">
              <h1 className="text-xl font-bold mb-3">Quick Links</h1>
              <ul className="space-y-3">
                {footerLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="text-gray-600 hover:text-black duration-300">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Company Address */}
            <div className="py-8 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold mb-3">Address</h1>
              <div>
                <div className="flex flex-col gap-3">
                
                  <p>Hyderabad, Telangana</p>
                  <p>India</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <p>+91 1234567890</p>
                </div>
  

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
}
       

export default Footer;