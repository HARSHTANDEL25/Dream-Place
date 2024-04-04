
const agents = [
  {
    id: 1,
    name: 'Aditi ganvit',
    photo: 'https://img.freepik.com/free-photo/portrait-young-woman-giving-thumbs-up_114579-77766.jpg?t=st=1709743653~exp=1709747253~hmac=dd15760ddccd0b9fb981fcdf6c289784949659b8d285293eb08dfa8e6c76a0d5&w=996',
    phone: '+9988774433',
    email: ' Aditiganvit@gmail.com',
    bio: "Aditi ganvit, a seasoned real estate professional, brings unparalleled expertise and dedication to her clients. With a passion for excellence, Heidi provides personalized service tailored to each client's unique needs, ensuring a seamless and rewarding experience in every real estate transaction."
  },
  {
    id: 2,
    name: 'Dhruv Patel',
    photo: 'https://img.freepik.com/free-photo/presentation-concept-with-smiling-businessman_23-2147702065.jpg?t=st=1709743783~exp=1709747383~hmac=fd173aafb17c14198f83fbec47df683dc5f793b44926168754f953fa7610c28e&w=996',
    phone: '+1122334455',
    email: 'Dhruv Patel@gmail.com',
    bio: "Meet Dhruv Patel, your dedicated real estate agent committed to guiding you through every step of your property journey. With a passion for excellence and a wealth of industry experience, David is here to help you achieve your real estate goals with confidence and ease."
  },
  { 
    id:3 ,
    name: 'Katrina patel',
    photo: 'https://www.piramalrealty.com/blog/wp-content/uploads/2020/07/indian-real-estate11-1.jpg',
    phone: '+1122334455',
    email: 'Katrinapatel@gmail.com',
    bio: '"Katrina patel, a luxury real estate specialist, has a website that features a slideshow of high-quality images. She includes a featured listing on her homepage, as well as links to all listings for sale and for rent. This makes it easy for prospects to search for homes. '
  },
  {
    id: 4,
    name: 'Prerak Mehata',
    photo: 'https://img.freepik.com/free-photo/cheerful-real-estate-agent-showing-toy-house_23-2147797623.jpg?t=st=1709743877~exp=1709747477~hmac=54c58000d6a89c9a8cc48a2cbc75474b500cce8cebf43dbf66bc63e56f2ca8e5&w=996',
    phone: '+1234567890',
    email: 'PrerakMehatak@gmail.com',
    bio: 'Prerak Mehata is a celebrity real estate professional with a clean and visually appealing website. The main feature is the high-quality banner image and the site navigation on the right-hand side of the page.'
  },
  {
    id: 5,
    name: 'Raj Sharma',
    photo: 'https://img.freepik.com/free-photo/businessman-holding-little-house_1368-6417.jpg?t=st=1709744101~exp=1709747701~hmac=d7541041449df892993c9b68eaf1db2f15b5990bc7e0c14bc3246c375add2477&w=996',
    phone: '+9876543210',
    email: 'Raj Sharmat@gmail.com',
    bio: 
    "Welcome to Raj Sharma's world of real estate expertise and innovation. With a commitment to excellence and a passion for service, Ryan Serhant offers unparalleled industry insight and dedication to his clients. Explore the dynamic realm of real estate through Ryan's unique perspective and experience a journey defined by success and satisfaction."
  },
  {
    id: 6,
    name: 'Hemang joshi',
    photo: 'https://img.freepik.com/free-photo/businessman-black-suit-makes-thumbs-up_114579-15900.jpg?t=st=1709744446~exp=1709748046~hmac=3bf2501ea5e2124855d23934d15f448a487399912c4ad7b4f7603c6ae1ab3b9e&w=996',
    phone: '+9988776655',
    email: 'Hemangjoshi@gmail.com',
    bio: 
    "Hemang joshi's website offers high-resolution images and a seamless user experience. Visitors are greeted with a convenient popup form inviting them to sign up for her weekly market updates, while easy-to-navigate menus provide access to her real estate agent profile, testimonials, sold properties, and comprehensive information for both buyers and sellers."
  },
  // Add more agent objects here

];

const Agent = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center my-4 text-amber-950">Our Agents</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {agents.map(agent => (
          <div key={agent.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={agent.photo} alt={agent.name} className="w-full h-auto mb-4 rounded-lg hover:scale-105 transition-scale duration-300 " />
            <h2 className="text-xl font-semibold">{agent.name}</h2>
            <p className="text-gray-600 mb-2">{agent.phone}</p>
            <p className="text-gray-600 mb-4">{agent.email}</p>
            <p className="text-gray-700">{agent.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agent;
