import { useState } from "react";
import { Route, useParams } from "react-router-dom";

import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Abbylog from "../images/AbbylogMain.png";
import guest1 from "../images/guestb1.png";
import guest2 from "../images/guestb2.png";
import guest3 from "../images/guestb3.png";

import main1 from "../images/guest1.png";
import main2 from "../images/guest2.png";
import main3 from "../images/guest3.png";
import Abbylog2 from "../images/Abbylog2.png";
import Ebi from "../images/EbiMain.png";
import Ebi1 from "../images/ebi1.png";
import Ebi2 from "../images/ebi2.png";
import Ebi3 from "../images/ebi3.png";

import Ike from "../images/ikeMain.png";
import Ike1 from "../images/Ike1.png";
import Ike2 from "../images/Ike2.png";
import Ike3 from "../images/Ike3.png";
import Nook from "../images/NookMain.png";
import Nook1 from "../images/java1.png";
import Nook2 from "../images/nook2.png";
import Nook3 from "../images/nook3.png";

import OP from "../images/opMain.png";
import OP1 from "../images/op1.png";
import OP2 from "../images/op2.png";
import OP3 from "../images/op3.png";

const products = [
  {
    id: 1,
    name: "Ike Eveland Landing",
    href: "https://csb-mqytq8.netlify.app/",
    DOC: "05/2022",
    intro: "An info site for virtual liver, Ike Eveland.",
    urlName: "IkeEvelandSite",
    description:
      "Welcome to Ike's virtual world! Built with Material-UI, a popular React UI library, this website features a beautiful shooting star background that will captivate audiences from the moment they arrive. The  site is fully responsive, but the real highlight of the site is the gallery of fan art, which showcases some of the incredible artwork created by Ike's devoted fans. With easy-to-use social media links, it's never been easier to connect with Ike and become part of his thriving community.",
    imageSrc: Ike,
    imageAlt: "Home page of Ike Eveland website.",
    detailedDescription: "",
    images: [
      {
        id: 1,
        name: "Main page",
        src: Ike1,
        alt: "",
      },
      {
        id: 2,
        name: "Name card",
        src: Ike2,
        alt: "",
      },
      {
        id: 3,
        name: "Gallery",
        src: Ike3,
        alt: "",
      }, // More images...
    ],
    techDetails: [
      {
        name: "Features",
        items: [
          "User-friendly interface allows for easy navigation and exploration of content",
          "Fully responsive design allows for seamless user experience across all devices",
          "Gallery of fan art highlights the community aspect of Ike's brand",
          "Social media links provide quick access to Ike's other online presence",
          "Engaging and immersive experience for fans of virtual v-tubing",
        ],
      },
      {
        name: "Technologies",
        items: ["Tailwind CSS", "Material UI", "ReactJS"],
      },
    ],
  },
  {
    id: 2,
    name: "Nook Store",
    href: "https://lgrxu5.csb.app/",
    DOC: "10/2022",
    intro: "A simple book store that features basic ordering functionality.",
    urlName: "NookBookSite",
    description:
      "This full-stack website is built with a Java backend using SpringBoot, and features a modern and visually pleasing design using the Tailwind CSS framework. The website's user-friendly interface allows for easy CRUD operations.  With its powerful technology stack, this website is an excellent starting solution for managing a book database.",
    imageSrc: Nook,
    imageAlt: "Home page of Nook website.",
    detailedDescription: "",
    images: [
      {
        id: 1,
        name: "Main page",
        src: Nook2,
        alt: "",
      },
      {
        id: 2,
        name: "login",
        src: Nook1,
        alt: "",
      },
      {
        id: 3,
        name: "CRUD",
        src: Nook3,
        alt: "",
      }, // More images...
    ],
    techDetails: [
      {
        name: "Features",
        items: [
          "Built with SpringBoot and React for efficient development and a modern user interface",
          "Robust database management with JPA and Hibernate for efficient data retrieval and storage",
          "RESTful API design for easy integration with other systems and applications",
          "Scalable architecture to handle large volumes of traffic and users",
          "Responsive and mobile-friendly design for optimal user experience on all devices",
        ],
      },
      {
        name: "Technologies",
        items: [
          "Java",
          "MySQL",
          "Springboot",
          "Tailwind CSS",
          "Material UI",
          "ReactJS",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Abbylog - Guest site",
    href: "#",
    DOC: "04/2022",
    intro: "A blogging website built for logging simple entries.",
    urlName: "AbbylogSite",
    description:
      "This blogging website is built using the MERN stack, with a powerful and user-friendly front-end interface developed in React and Redux. With the ability to create, read, update, and delete blog posts, users can easily create and manage their content. Integration with Google API and EmailJS API ensures seamless user authentication and notification systems. The website features a clean and modern design using Semantic UI, ensuring a professional and elegant look for your blog.",
    imageSrc: Abbylog,
    imageAlt: "Home page abbylog guest website.",
    detailedDescription: "",
    disable: true,

    images: [
      {
        id: 1,
        name: "Main page",
        src: guest1,
        alt: "",
      },
      {
        id: 2,
        name: "login",
        src: guest2,
        alt: "",
      },
      {
        id: 3,
        name: "CRUD",
        src: guest3,
        alt: "",
      }, // More images...
    ],
    techDetails: [
      {
        name: "Features",
        items: [
          "MERN stack for efficient and modern web development",
          "React and Redux for a dynamic and intuitive user interface",
          "CRUD operations for easy content creation and management",
          "Semantic UI for a clean and professional design",
          "Responsive and mobile-friendly design for optimal user experience on all devices",
        ],
      },
      {
        name: "Technologies",
        items: [
          "Node.js",
          "MongoDB",
          "Express",
          "Semantic UI",
          "ReactJS",
          "Full Stack",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Abbylog - Admin site",
    href: "#",
    DOC: "04/2022",
    intro: "A blogging website built for logging simple entries.",
    urlName: "AbbylogSite",
    description:
      "This blogging website is built using the MERN stack, with a powerful and user-friendly front-end interface developed in React and Redux. With the ability to create, read, update, and delete blog posts, users can easily create and manage their content. Integration with Google API and EmailJS API ensures seamless user authentication and notification systems. The website features a clean and modern design using Semantic UI, ensuring a professional and elegant look for your blog.",
    imageSrc: Abbylog2,
    imageAlt: "Home page of abbylog admin website.",
    detailedDescription: "",
    disable: true,
    images: [
      {
        id: 1,
        name: "Main page",
        src: main1,
        alt: "",
      },
      {
        id: 2,
        name: "login",
        src: main2,
        alt: "",
      },
      {
        id: 3,
        name: "CRUD",
        src: main3,
        alt: "",
      }, // More images...
    ],
    techDetails: [
      {
        name: "Features",
        items: [
          "MERN stack for efficient and modern web development",
          "React and Redux for a dynamic and intuitive user interface",
          "CRUD operations for easy content creation and management",
          "Semantic UI for a clean and professional design",
          "Responsive and mobile-friendly design for optimal user experience on all devices",
        ],
      },
      {
        name: "Technologies",
        items: [
          "Node.js",
          "MongoDB",
          "Express",
          "Semantic UI",
          "ReactJS",
          "Full Stack",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "One Piece Info Site",
    href: "#",
    DOC: "09/2022",
    intro: "A info site for One Piece enjoyers",
    urlName: "One Piece Site",
    description:
      "This One Piece info site is designed to provide fans with a comprehensive guide to the popular anime and manga series. Built with React, Tailwind CSS, and Material UI, the site offers a sleek and modern user interface that's both aesthetically pleasing and user-friendly. The site features a basic introduction to the One Piece universe, including character profiles, plot summaries, and episode guides. With its responsive design, the site is easily accessible from any device, and its scalable architecture allows for easy updates and expansions.",
    imageSrc: OP,
    imageAlt: "Home page of one piece website.",
    detailedDescription: "",
    images: [
      {
        id: 1,
        name: "Main page",
        src: OP1,
        alt: "",
      },
      {
        id: 2,
        name: "login",
        src: OP2,
        alt: "",
      },
      {
        id: 3,
        name: "CRUD",
        src: OP3,
        alt: "",
      }, // More images...
    ],
    techDetails: [
      {
        name: "Features",
        items: [
          "Modern and responsive UI built with React, Tailwind CSS, and Material UI",
          "React and Redux for a dynamic and intuitive user interface",
          "Simple introduction to One Piece with character profiles, plot summaries, and episode guides.",
          "Easy to scale and add new content thanks to its scalable architecture.",
        ],
      },
      {
        name: "Technologies",
        items: ["ReactJS", "Material UI", "TailwindCSS", "Front-end"],
      },
    ],
  },
  {
    id: 6,
    name: "Ebi is a Cat",
    href: "#",
    DOC: "03/2022",
    intro: "A website made for my cat, Ebi",
    urlName: "One Piece Site",
    description:
      "Ebi's website is a fun and interactive site built with HTML, CSS, and JavaScript. It features an adorable cat theme and includes Ebi's favorite things to eat and do. With a simple and user-friendly interface, visitors can easily navigate through the site to learn more about Ebi. The use of JavaScript allows for dynamic elements and enhanced interactivity, making for a fun and engaging experience.",
    imageSrc: Ebi,
    imageAlt: "Home page of Ebi's website",
    detailedDescription: "",
    images: [
      {
        id: 1,
        name: "Main page",
        src: Ebi1,
        alt: "",
      },
      {
        id: 2,
        name: "login",
        src: Ebi2,
        alt: "",
      },
      {
        id: 3,
        name: "CRUD",
        src: Ebi3,
        alt: "",
      }, // More images...
    ],
    techDetails: [
      {
        name: "Features",
        items: [
          "Adorable cat theme",
          "Lists Ebi's favorite things to eat and do",
          "Built with HTML, CSS, and JavaScript",
          "User-friendly interface",
          "React and Redux for a dynamic and intuitive user interface",
        ],
      },
      {
        name: "Technologies",
        items: ["HTML", "CSS", "Javascript"],
      },
    ],
  },

  // More websites...
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Modal() {
  const { projectId } = useParams();
  const project = products[projectId];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {project.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only"> {image.name} </span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            src={image.src}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? "ring-indigo-500" : "ring-transparent",
                            "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
              {project.images.map((image) => (
                <Tab.Panel key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 text-left">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {project.name}
            </h1>

            <div className="mt-3">
              <p className="text-1xl tracking-tight text-gray-500">
                Finished in {project.DOC}
              </p>
            </div>

            <div className="mt-6 text-left">
              <div className="space-y-6 text-lg text-gray-700" />
              {project.description}
            </div>

            <div className="sm:flex-col1 mt-10 flex">
              <a
                href={project.href}
                target="_blank"
                className={`flex max-w-xs flex-1 ${
                  project.disable ? "cursor-not-allowed " : ""
                }items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-indigo-300 from-20% via-sky-400 via-30% to-emerald-400 to-80% px-8 py-3 text-base font-bold text-white hover:from-indigo-500 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full`}
              >
                Open Site
              </a>
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                {project.techDetails.map((detail) => (
                  <Disclosure as="div" key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span
                              className={classNames(
                                open ? "text-indigo-600" : "text-gray-900",
                                "text-md font-medium"
                              )}
                            >
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as="div"
                          className="prose prose-sm pb-6 text-left text-gray-500 text-sm"
                        >
                          {detail.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
