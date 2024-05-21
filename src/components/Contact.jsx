export default function Contact(){
    return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 ">
      <div className="bg-white  overflow-hidden max-w-8xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Map */}
            <div className="md:col-span-2 h-96 flex items-center justify-center px-2"> 
          <iframe
              className="w-full h-full border-0 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15287.428212303399!2d74.21787886738282!3d16.684035175555493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10013c0000001%3A0xe9dd1e65a2adb475!2sDECCAN%20CREST%20ENGINEERING%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1716128863225!5m2!1sen!2sin" 
              aria-hidden="false"
              tabIndex="0"
              title="Company Location"
            ></iframe>
          </div>
          {/* Contact Form */}
          <div className="p-8 md:col-span-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input input-bordered w-full"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input input-bordered w-full"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="input input-bordered w-full"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="textarea textarea-bordered w-full"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* Contact Information */}
          <div className="bg-gray-50 p-8 flex flex-col justify-center md:col-span-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Address</h3>
            <p className="text-gray-600 mb-2">First Floor, E Ward, Sheetal Chambers, next to Sai Service, Shivaji Udyam Nagar, Kolhapur, Maharashtra 416008</p>
            <p className="text-gray-600 mb-2"> Kolhapur, Maharashtra 41600</p>
            <p className="text-gray-600 mb-6">India</p>
            <h4 className="text-lg font-semibold text-gray-700">Phone</h4>
            <p className="text-gray-600 mb-6">09028247195</p>
            <h4 className="text-lg font-semibold text-gray-700">Email</h4>
            <p className="text-gray-600 mb-6">deccancrestsenginnering@gmail.com</p>
            {/* Embedded Google Map */}
          </div>
        
        </div>
      </div>
    </div>

  
    );
}

