import React from 'react';
import { useEffect } from 'react';

const HelpSupport = () => {
    useEffect(() => {
        document.title = "Support-GadgetHaven";
      }, []);
  return (
    <div className="container mx-auto p-6">
        <div className='bg-purple-700 '>
        <h2 className="text-3xl font-bold text-center my-4 py-4 text-white mb-2">Help & Support</h2>
        <p className='text-white p-4  text-center font-semibold text-lg mb-4'>Welcome to the Help and Support page! <br />
            We're here to ensure you have a seamless experience with GadgetHaven. <br />
            If you need assistance with any aspect of our platform—from browsing products to completing your purchase—our support team is ready to help.</p>
        </div>
     

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">How can I track my order?</div>
            <div className="collapse-content">
              <p>You can track your order by logging into your account and navigating to the "Order History" section.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">What is your return policy?</div>
            <div className="collapse-content">
              <p>Our return policy allows you to return items within 30 days of purchase for a full refund or exchange.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">How can I contact customer support?</div>
            <div className="collapse-content">
              <p>You can reach out to our customer support team through the contact form below or by calling our support line.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Contact Support</h3>
        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input type="email" placeholder="you@example.com" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea placeholder="Describe your issue or question..." className="textarea textarea-bordered w-full"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">Submit</button>
        </form>
      </div>


      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Additional Resources</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <a href="/shipping-info" className="text-blue-600 hover:underline">Shipping Information</a>
          </li>
          <li>
            <a href="/returns" className="text-blue-600 hover:underline">Returns & Exchanges</a>
          </li>
          <li>
            <a href="/account" className="text-blue-600 hover:underline">Manage Your Account</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HelpSupport;
