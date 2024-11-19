const Footer = () => {
    return (

<footer className="bg-gray-800 text-white py-8">
  <div className="max-w-6xl mx-auto px-4">
    {/* Footer Content */}
    <div className="flex flex-wrap justify-between">
  {/* Footer Logo Section */}
  <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
    <div className="flex items-center">
      <img 
        src="/home/logo.png" 
        alt="HrLite Icon" 
        className="w-20 h-15" 
      />
      <span className="text-blue-500 text-3xl font-bold ml-2">.</span>
    </div>
    <p className="text-sm w-[223px] text-gray-400">
      Build a modern and creative website with crealand
    </p>

    {/* Social Links Section */}
    <div className="mt-4 flex items-center space-x-4">
      <a href="#">
        <img 
          src="/home/google.png" 
          alt="Google" 
          width={27} 
          height={27} 
          className="hover:opacity-80"
        />
      </a>
      <a href="#">
        <img 
          src="/home/twitter.png" 
          alt="Twitter" 
          width={27} 
          height={27}  
          className="hover:opacity-80"
        />
      </a>
      <a href="#">
        <img 
          src="/home/insta.png" 
          alt="Instagram" 
          width={27} 
          height={27} 
          className="hover:opacity-80"
        />
      </a>
      <a href="#">
        <img 
          src="/home/linkdin.png" 
          alt="LinkedIn" 
          width={27} 
          height={27} 
          className="hover:opacity-80"
        />
      </a>
    </div>
  </div>


      {/* Footer Links Section */}
      <div className="w-full sm:w-2/3 flex flex-wrap justify-between">
        {/* Services */}
        <div className="w-1/2 sm:w-1/3 mb-4 sm:mb-0">
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-500">Documentation</a></li>
            <li><a href="#" className="hover:text-blue-500">Design</a></li>
            <li><a href="#" className="hover:text-blue-500">Themes</a></li>
            <li><a href="#" className="hover:text-blue-500">Illustrations</a></li>
            <li><a href="#" className="hover:text-blue-500">UI Kit</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="w-1/2 sm:w-1/3">
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-500">About</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms</a></li>
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Careers</a></li>
          </ul>
        </div>
      </div>
    </div>
    {/* Footer Copyright Section */}
    <div className="mt-8 flex flex-col sm:flex-column justify-between items-center text-sm text-gray-400">
      <p>Copyright©2024. Crafted with love.</p>
      <div className="mt-[20px] ">
        <img src="/home/Heart.png" alt="Heart" width={50} height={50} />
      </div>
    </div>
  </div>
</footer>
);
};

export default Footer;
