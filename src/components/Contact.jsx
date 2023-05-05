import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import endJpg from "../images/end.jpg";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Contact() {
  return (
    <div id="contact" className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src={endJpg}
            alt=""
          />
        </div>
      </div>
      <div className="relative py-16 px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
        <div className="lg:pr-8">
          <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0 text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Contact Me!
            </h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3 pb-7">
              I would love to work with you to build a website that brings your
              vision to life, please don't heasitate to reach out to me.
            </p>
            <dl className="space-y-10">
              <div>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Email:
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  abbysite888@gmail.com
                </dd>
              </div>
              <div>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Location:
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  San Jose, California
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
