import React from 'react';
import './styles.css';

const About = () => {
  return (
    <section id="about">
      <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32  md:mx-0">
        <img
          src="https://images.unsplash.com/photo-1623520527569-fee1da87f598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt=""
          class="absolute blur-xl inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        {/* <div
          class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        ></div>
        <div
          class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        ></div> */}
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get to know me
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              I am an enthusiastic developer with an addiction for discovering
              new coding perspectives. I really mean it!
            </p>
          </div>
          <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="#">
                Requirement <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Designing <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Development <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Test & Review <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div class="flex flex-col-reverse">
                <dt class="text-base leading-7 text-gray-300">
                  Years of Experience
                </dt>
                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                  2
                </dd>
              </div>
              <div class="flex flex-col-reverse">
                <dt class="text-base leading-7 text-gray-300">
                  Number of Projects
                </dt>
                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                  50+
                </dd>
              </div>
              <div class="flex flex-col-reverse">
                <dt class="text-base leading-7 text-gray-300">
                  Satisfied Clients
                </dt>
                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                  40+
                </dd>
              </div>
              <div class="flex flex-col-reverse">
                <dt class="text-base leading-7 text-gray-300">Paid time off</dt>
                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                  Unlimited
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
