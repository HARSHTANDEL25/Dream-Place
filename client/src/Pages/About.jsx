import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function About() {
  const agentCount = 15; // Example number of agents

  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>Welcome to Dream Estate</h1>
      <p className='mb-4 text-slate-700'>Dream Estate is a premier real estate agency dedicated to helping clients buy, sell, and rent properties in the most sought-after neighborhoods. Our team of {agentCount} experienced agents is committed to delivering exceptional service, ensuring a seamless experience throughout the buying and selling process.</p>
      <p className='mb-4 text-slate-700'>At Dream Estate, our mission is to empower our clients to achieve their real estate goals by providing expert advice, personalized service, and an unparalleled understanding of the local market. Whether you're in the market to buy, sell, or rent, we're here to guide you every step of the way.</p>  
      <p className='mb-4 text-slate-700'>With a combined {agentCount * 10}+ years of industry experience, our team brings extensive knowledge and expertise to the table. We pride ourselves on delivering top-notch service, ensuring that your buying or selling journey is not only successful but also enjoyable and rewarding.</p>
      <p className='mb-4 text-slate-700'>Experience the Dream Estate difference today and let us help you turn your real estate dreams into reality!</p>

      {/* Address */}
      <div className="mb-4">  
        <h2 className="text-xl font-bold mb-2 text-slate-800">Visit Us</h2>
        <p className="flex items-center text-slate-700"><FaMapMarkerAlt className="mr-2" />123 Estate Street,Valsad,Gujarat,India</p>
      </div>

      {/* Contact Information */}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2 text-slate-800">Contact Us</h2>
        <p className="flex items-center text-slate-700"><FaPhone className="mr-2" />+1234567890</p>
        <p className="flex items-center text-slate-700"><FaEnvelope className="mr-2" />info@Dreamestate.com</p>
      </div>

      {/* Social Media Links */}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2 text-slate-800">Connect With Us</h2>
        <div className="flex space-x-4">
          <a href="#" className="text-slate-700 hover:text-gray-400 transition duration-300"><FaFacebook /></a>
          <a href="#" className="text-slate-700 hover:text-gray-400 transition duration-300"><FaTwitter /></a>
          <a href="#" className="text-slate-700 hover:text-gray-400 transition duration-300"><FaInstagram /></a>
        </div>
      </div>

      {/* Additional Features */}
      <div>
        <h2 className="text-xl font-bold mb-2 text-slate-800">Our Services</h2>
        <ul className="list-disc pl-6 text-slate-700">
          <li>Property Buying and Selling</li>
          <li>Renting and Leasing Assistance</li>
          <li>Market Analysis and Consultation</li>
          <li>Property Management</li>
          <li>Investment Opportunities</li>
        </ul>
      </div>
    </div>
  );
}
