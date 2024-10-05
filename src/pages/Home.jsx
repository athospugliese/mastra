import React from 'react';
import {  FiMail } from "react-icons/fi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">PrioriTask</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Product</a>
            <a href="#" className="hover:underline">OOTD</a>
            <a href="#" className="hover:underline">Delivery</a>
            <a href="#" className="hover:underline">Promo</a>
          </nav>
          <button className="bg-primary-100 text-black px-4 py-2 rounded-lg">Download App</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-black text-white py-20 text-center">
        <div className="container mx-auto">
          <p className="text-lg">New! We Are Here Using AI Technology 🚀</p>
          <h2 className="text-5xl font-bold my-4">
            Unlock Your Full Potential<br />With <span className="text-primary-100">Layerio</span>.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto my-4">
            With our website, you have access to a wide range of tools and resources designed to help 
            you increase your productivity and achieve your goals.
          </p>
          <div className="flex justify-center mt-6">
            <input 
              type="email" 
              placeholder="Enter Email Address" 
              className="px-4 py-2 w-80 text-black rounded-l-lg"
            />
            <button className="bg-primary-100 text-black px-6 py-2 rounded-r-lg">Get Started</button>
          </div>
          <p className="mt-4">⭐⭐⭐⭐⭐ 4.9 By Trustpilot</p>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4">
              Layerio Helps You Increase Your Daily Productivity
            </h2>
            <p className="text-gray-600 mb-4">
              We are focused on creating products, services, and processes that not only innovative 
              but also efficient in increasing productivity.
            </p>
            <button className="bg-primary-100 text-black px-6 py-2 rounded-lg">How It Works</button>
          </div>
          <div className="lg:w-1/2">
            <img src="https://via.placeholder.com/400" alt="App Showcase" className="mx-auto" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Find Answers To Your Confusion
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Do I Need To Pay To Use Productivity Apps?</AccordionTrigger>
              <AccordionContent>
                Most productivity apps offer free versions, but paid plans may provide additional features.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What Are The Main Features To Look For In A Productivity App?</AccordionTrigger>
              <AccordionContent>
                Key features include task management, calendar integration, collaboration tools, and reminders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can Productivity Apps Really Increase My Productivity?</AccordionTrigger>
              <AccordionContent>
                Yes, productivity apps can help you organize tasks, set goals, and manage time more effectively.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I Use Productivity Apps To Organize My Personal And Professional Tasks?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Most productivity apps support organizing both personal and professional tasks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do I Have To Keep Track Of My Productivity App Usage?</AccordionTrigger>
              <AccordionContent>
                Some apps provide reports on your usage patterns, helping you track and improve productivity.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Say Hello To Layerio</h2>
          <button className="bg-primary-100 text-black px-6 py-2 rounded-lg">Get Started</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Get The Latest Information From Us</h3>
          <div className="flex justify-center">
            <input 
              type="email" 
              placeholder="Your Email Here" 
              className="px-4 py-2 w-64 text-black rounded-l-lg"
            />
            <button className="bg-primary-100 text-black px-6 py-2 rounded-r-lg">Submit</button>
          </div>
          <div className="mt-8">
            <p>© 2023 Copyright - Layerio</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
