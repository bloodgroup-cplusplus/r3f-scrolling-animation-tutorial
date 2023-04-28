import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setOpacityThirdSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityThirdSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Welcome To Aviskar's Paying Guest
          </h1>
          <p className="text-gray-500">Welcome to our beautiful home</p>
          <p className="mt-3">We offer:</p>
          <ul className="leading-9">
            <li>🏚 Spacious Rooms</li>
            <li>🥗 Veg  and 🍗  Non-Veg Food   </li>
            <li>👧🏻 Girls and 👦🏻 Boys PG  </li>
            <li>📶 Wifi 24x7</li>
            <li>🧺 Washing Machine and Laundry</li>
            <li>🚽 Hygenic Washrooms</li>
            <li>🚰 24x7 Water Facility</li>
            <li>🌞 Open areas for drying clothes</li>
            <li>⏳ 7+ Years of Experience</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Our Testimonials 🔥
          </h1>
          <p className="text-gray-500"></p>
          <p className="mt-3">
            <b>👋🏻 Hi I'm Nipun Subba a doctor 🩺 here at Gangtok Government Hospital </b>
            <b>I stayed at Aviskar PG For 4 Years while pursuing my MBBS</b>
            <b>The great ambience of the PG with Homely Staff helped me a lot during my stay there</b>
            <b>Even during tough times of covid-19 the staff left no stone unturned in providing us with best facilities to carry on with our degree. I highly recommend Aviskar PG</b>
            <b>⭐️⭐️⭐️⭐️⭐️</b>
          </p> 
        </Section>

        <Section opacity={opacityThirdSection}>
          <p className="mt-3">
            <h1 className="font-semibold font-serif text-2xl"> Rooms Starting at:</h1>
          </p>
          <ul className="leading-9">
            <li> Rs 6500 per month( Shared Room)</li>
            <li> Rs 7500 per month (Individual Room)</li>
          </ul>
          <h1 className="font-semibold font-serif text-2xl">
             Limited Rooms Available 😱 Contact Us 📞
          </h1>
          <p className="text-gray-500">

            Near SMIMS College 
            5th Mile Tadong 
            Gangtok East Sikkim 
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:9382114563 ">(+91) 9382114563</a>
          </p>
        </Section>




      </div>
    </Scroll>
  );
};
