
import { Upload} from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black p-4 lg:p-8 flex flex-col items-center justify-center">
      <div className="mx-auto max-w-5xl w-full overflow-hidden border-0 rounded-3xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left side with map background and contact info */}
          <div className="relative bg-dark p-6 lg:p-10 text-white">
            {/* Map overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='800' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L100,100 L200,50 L300,150 L400,100 L500,200 L600,150 L700,250 L800,200' stroke='white' fill='none' stroke-width='2'/%3E%3C/svg%3E")`,
                backgroundSize: "cover",
              }}
            />
            <div className="relative">
              <h1 className="mb-12 text-3xl font-bold lg:text-4xl">Contact us</h1>
              <div className="mb-12 space-y-4">
                <div>
                  <h2 className="mb-2 text-sm text-gray-400">Our address</h2>
                  <p>123456 Moscow</p>
                  <p>Lane Opekushina</p>
                  <p>building 14 Office 228</p>
                </div>
                <div>
                  <h2 className="mb-2 text-sm text-gray-400">Our contacts</h2>
                  <p>hello@name.com</p>
                  <p>+7 900 800 70 60</p>
                </div>
              </div>
              
            </div>
          </div>

          {/* Right side with form */}
          <div className="bg-black text-white p-6 lg:p-10">
            <h2 className="mb-6 text-sm font-medium text-white">Feedback form</h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full p-2 bg-gray-800 text-white rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full p-2 bg-gray-800 text-white rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm text-gray-400">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your phone"
                  className="w-full p-2 bg-gray-800 text-white rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                <textarea
                  id="message"
                  rows="3"
                  placeholder="Your message"
                  className="w-full p-2 bg-gray-800 text-white rounded-lg"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Upload className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-400 ml-2">Upload file</span>
                </div>
                <button className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
