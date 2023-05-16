"use client";
import React, { useState } from "react";

const Template1 = (props) => {
  const [color, setColor] = useState("#FFFFFF");

  const styles = {
    "color": props.secondaryColor,
  };
  const style = {
    "backgroundColor": props.secondaryColor,
  };
  const navStyle = {
    "color": props.primaryColor,
  };
  const navStyleBorder = {
    "color": props.primaryColor,
    "borderColor": props.secondaryColor,
  };
  const accentColor = {
    "color": props.accentColor,
  };
  return (
    <div className="w-[100%] h-[100%] bg-white relative">
        <img
              src="./images/Decore.png"
              class="absolute right-0 top-0"
              alt=""
            />
      <div class="px-8 py-6">
        <div>
          <div class="flex items-center justify-between">
            <div>
              <img src="./images/Logo.png" alt="" />
            </div>
            <div class="flex items-center space-x-12 z-50">
              <a href="#" class="font-semibold"
                style={navStyle}
              >
                Destinations
              </a>
              <a href="#" class="font-semibold"
                style={navStyle}
              >
                Hotels
              </a>
              <a href="#" class="font-semibold "
                style={navStyle}
              >
                Flights
              </a>
              <a href="#" class="font-semibold "
                style={navStyle}
              >
                Bookings
              </a>
              <a href="#" class="font-semibold"
                style={navStyle}
              >
                Login
              </a>
              <a
                href="#"
                class="border-2 px-4 py-1.5 rounded-md  font-semibold  "
                style={navStyleBorder}
              >
                Sign up
              </a>
              <div class="flex items-center">
                <a href="#" class="font-semibold "
                style={navStyle}
              >
                  EN
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            
          </div>
          <div class=" flex items-center h-[800px]">
            <div class="w-[50%] z-[100]">
              <div>
                <div class="">
                  <div class="">
                    <p class=" font-bold text-2xl"
                style={styles}
              >
                      Best Destinations around the world
                    </p>
                    <div class="font-bold text-6xl z-50 py-8"
                style={navStyle}
              >
                      Travel, enjoy and live a new and full life
                    </div>
                  </div>
                  <div className="py-3">
                    <span class=""
                    style={accentColor}
                    >
                      Built Wicket longer admire do barton vanity itself do in
                      it. Preferred to sportsmen it engrossed listening. Park
                      gate sell they west hard for the.
                    </span>
                  </div>
                  <div class="flex items-center space-x-6">
                    <a
                      href="#"
                      class="px-4 py-2.5 rounded-md font-bold   text-white"
                      style={style}
                      >
                      Find out more
                    </a>
                    <div class="flex items-center space-x-3">
                      <div class="rounded-full  p-2  text-white "
                      style={style}
              >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </div>
                      <div>
                        <span class="" style={accentColor}>Play Demo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] z-20">
              <div class="">
                <img src="./images/Traveller.png" class="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
