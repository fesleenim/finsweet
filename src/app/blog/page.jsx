import React from "react";
import Women from "../../assets/womenblog.png";
import Image from "next/image";
import Avatar from "../../assets/avatar.png"

export default function BlogPost() {
  return (
    <>
      <section className="relative w-full h-[600px] text-white flex items-center">
        <div className="absolute inset-0 m-8">
          <Image
            src={Women}
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </div>
      </section>
      <div className="container max-w-8xl mx-auto relative z-10 px-5 lg:px-12 text-black">
        <div className="max-w-3xl mx-auto p-6  text-black">
          <div className="flex items-center space-x-4">
            <Image
              src={Avatar}
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h2 className="text-lg font-bold text-indigo-600">Andrew Jonson</h2>
              <p className="text-sm text-gray-500">Posted on 27th January 2022</p>
            </div>
          </div>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Step-by-step guide to choosing great font pairs
          </h1>
          <p className="mt-2 font-semibold text-gray-700">
            Startup (<span className="text-black">#business, #screen, #life</span>)
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
            enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
            adipiscing at in tellus. Sociis natoque penatibus et magnis dis
            parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
            egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
            quisque non.
          </p>
        </div>
      </div>
    </>
  );
}
