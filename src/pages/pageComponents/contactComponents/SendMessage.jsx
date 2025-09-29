import React from 'react'; // Importing React to use JSX
import MapComponent from './MapComponent'; // Importing the MapComponent to display the map

const SendMessage = () => {
  return (
    <div className="w-full bg-blue-50 p-10 rounded-lg"> {/* Main container with padding and background color */}
        <div className='flex flex-col md:flex-row justify-evenly items-center gap-10'> {/* Stack on mobile and align horizontally on medium screens and above */}
            
            <div className='w-full md:w-[50%]'> {/* Form section */}
                {/* Header and introductory text */}
                <div className="mb-6 space-y-4">
                    <h1 className="text-3xl font-extrabold">Send Us A Message</h1> {/* Main title */}
                    <p className="text-lg text-black text-opacity-50">Give us a chance to serve and bring magic to your brand.</p> {/* Subheading */}
                </div>

                {/* Name and Email input fields */}
                <div className="flex flex-col md:flex-row justify-start gap-6 mb-6">
                    <label htmlFor="FullName" className="flex flex-col w-full md:w-[48%]"> {/* Full Name input */}
                        <p className="text-sm text-black font-bold">Full Name</p>
                        <input 
                            type="text"
                            required 
                            placeholder="Your full name" 
                            className="px-4 py-2 mt-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:outline-none w-full"
                        />
                    </label>
                    <label htmlFor="YourEmail" className="flex flex-col w-full md:w-[48%]"> {/* Email input */}
                        <p className="text-sm text-black font-bold">Your Email</p>
                        <input 
                            type="email"
                            required 
                            placeholder="Your email address" 
                            className="px-4 py-2 mt-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:outline-none w-full"
                        />
                    </label>
                </div>

                {/* Phone Number and Company Name input fields */}
                <div className="flex flex-col md:flex-row justify-start gap-6 mb-6">
                    <label htmlFor="YourPhone" className="flex flex-col w-full md:w-[48%]"> {/* Phone Number input */}
                        <p className="text-sm text-black font-bold">Your Phone Number</p>
                        <input 
                            type="number"
                            required 
                            placeholder="Your phone number" 
                            className="px-4 py-2 mt-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:outline-none w-full"
                        />
                    </label>
                    <label htmlFor="CompanyName" className="flex flex-col w-full md:w-[48%]"> {/* Company Name input */}
                        <p className="text-sm text-black font-bold">Company Name</p>
                        <input 
                            type="text" 
                            placeholder="Your company name (optional)" 
                            className="px-4 py-2 mt-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:outline-none w-full"
                        />
                    </label>
                </div>

                {/* Address and Message input fields */}
                <div className="mb-6">
                    <label htmlFor="Address" className="mb-4 flex flex-col"> {/* Address input */}
                        <p className="text-sm text-black font-bold">Your Address</p>
                        <input 
                            type="text"
                            required 
                            placeholder="Your address" 
                            className="px-4 py-2 mt-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:outline-none w-full"
                        />
                    </label>
                    <label htmlFor="Message" className="mb-4 flex flex-col"> {/* Message textarea */}
                        <p className="text-sm text-black font-bold">Message</p>
                        <textarea 
                            placeholder="How can we help you?"
                            required 
                            className="px-4 py-2 mt-2 rounded-md text-left border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:outline-none w-full h-32 resize-none"
                        ></textarea>
                    </label>
                </div>

                {/* Send Message button */}
                <div className="flex justify-start">
                    <button 
                        className="bg-[rgb(245,124,0)] text-white px-6 py-3 rounded-full text-lg hover:bg-[rgb(220,100,0)] focus:outline-none w-full md:w-auto"
                    >
                        Send Message
                    </button>
                </div>
            </div>

            {/* Map component */}
            <div className='w-full md:w-[50%]'> {/* Map section */}
                <MapComponent /> {/* This will render the map below the form */}
            </div>
        </div>
    </div>
  );
}

export default SendMessage; // Exporting the SendMessage component
