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
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
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
            <li>🥗 Veg  and 🍗  Non-Veg Food  </li>
            <li>👧🏻 Girls and 👦🏻 Boys PG  </li>
            <li>📶 Wifi 24x7</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            We also offer 🔥
          </h1>
          <p className="text-gray-500"></p>
          <p className="mt-3">
            <b>Spacious Areas For Drying Clothes 🌞 </b>
            <b> Hygenic Washrooms 🚽</b>
            <b>24x7 Clean Water Facility 🚰</b>
            <b>Homely Atmosphere 🏠 👨‍👩‍👧</b>
          </p>
          
          <p className="mt-3">
            <b>Rooms Starting at: </b>
          </p>
          <ul className="leading-9">
            <li>Rs 6500 per month (Shared Room)</li>
            <li>Rs 7500 per month (Individual Room)</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
             Limited Rooms Available 😱 Contact Us ASAP 📱
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
