import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="sm:px-[20px] md:px-[40px]" id="contact">
      <h2 class="text-center decoration-double underline decoration-blue-500 tracking-[-1px] mt-[70px] lg:mt-[80px] mb-5 md:mb-8 text-[26px] md:text-[30px] lg:text-[33px] font-[600] text-white font-sora">
        Want to collaborate?
      </h2>
      <h1 className="font-[600] font-josefin text-white text-3xl tracking-[-1px] text-center mx-auto md:mx-0 mb-4 xl:text-[36px] lg:text-4xl">
        Contact{' '}
        <span className="text-[32px] md:text-[39px] text-blue-500">me</span>!
      </h1>
      <div className="contact-container rounded-[1rem] overflow-visible lg:overflow-hidden">
        {/* Form */}
        <div class="form-container font-sora">
          <form action="#" className="contact-form">
            <span class="ml-auto lg:ml-[30px] pl-[4px] mr-auto flex whitespace-nowrap rounded-sm uppercase text-md sm:text-2xl font-[600] text-white bg-gradient-to-r from-blue-600 to-indigo-400 font-sora tracking-[3px]">
              Reach out to me
            </span>
            <div class="input-box">
              <input type="text" required />
              <label className="pr-[4px]">Name</label>
            </div>
            <div class="input-box">
              <input type="text" required />
              <label className="pr-[3px]">Email</label>
            </div>
            <div class="message-box">
              <textarea id="message" required></textarea>
              <label for="message">Your Message</label>
            </div>
            <div className="w-[200px] sm:w-[100%] h-[75px] lg:h-[80px] md:mt-[-38px] lg:mt-[-30px] flex mx-auto justify-center">
              <input
                type="submit"
                value="SUBMIT"
                className="px-6 pt-2 cursor-pointer lg:pt-[8px] w-[300px] sm:w-[400px] md:w-[320px] lg:w-[380px] xl:w-[430px] lg:ml-3 xl:ml-0 text-center mt-8 text-[18px] lg:text-[19px] xl:text-[20px] font-josefin text-black rounded-xl font-[600] tracking-[1px] transition duration-[500ms] ease-out hover:text-white hover:ease-out bg-white btn md:block"
              />
            </div>
          </form>
        </div>
        {/* Map */}
        <div className="map">
          <iframe
            className=""
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d28946.5773776502!2d67.07080594255973!3d24.92109238492136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3eb338b808bfd6b1%3A0x997b1a02c2570822!2sGulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!3m2!1d24.9180271!2d67.0970916!5e0!3m2!1sen!2s!4v1695764056088!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
