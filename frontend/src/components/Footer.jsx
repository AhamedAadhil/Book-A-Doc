import { assets } from "../assets/assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left side */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            doloremque repudiandae, voluptatem vero fuga, error, illo aliquid
            reiciendis quae dolore architecto deleniti recusandae laborum nemo
            veniam qui aspernatur sequi repellat!
          </p>
        </div>
        {/* middle side */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right side */}
        <div>
          <p className="text-xl font-medium mb-5">Getin Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+94766611917</li>
            <li>ahamedaathil.5@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* copyright section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright {new Date().getFullYear()}@Aathil. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
