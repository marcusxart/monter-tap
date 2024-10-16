import MaxContainer from "../../components/maxContainer";
import { wolfWait } from "../../assets/images/dog";
import Wolf from "../../components/wolf";
import { useEffect, useState } from "react";

function Waitlist() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Define your target launch date (e.g., December 31, 2024, at 00:00)
  const launchDate = new Date("2024-12-31T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());

      // Calculate the difference in milliseconds
      const timeDiff = launchDate - new Date();

      if (timeDiff > 0) {
        // Calculate remaining time in days, hours, minutes, and seconds
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Update state with the remaining time
        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        // If the countdown is over, stop the timer
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <>
      <MaxContainer>
        <div className="w-[100%] h-[35rem] flex items-center justify-between">
          <Wolf Wolf={wolfWait} />
          <div className="flex flex-col items-center justify-start gap-[20px] w-[50%] h-[100%] pt-[80px] max-md:w-full">
            {/* Countdown Timer */}

            {/* Launching Soon Text */}
            <p
              style={{
                background:
                  "linear-gradient(85.98deg, #0B9D9A 21.68%, #CB9C22 58.8%)",
                backgroundClip: "text",
                color: "transparent",
              }}
              className="font-normal text-[40px]"
            >
              Launching Soon
            </p>
            <div className="text-[24px] text-center font-bold">
              <div className="flex gap-[10px] text-[40px]">
                {/* Days */}
                <div
                  style={{
                    background:
                      "linear-gradient(85.98deg, #0B9D9A 21.68%, #CB9C22 58.8%)",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                  className="py-3 px-6 font-normal text-[40px] flex justify-around items-center flex-col"
                >
                  {timeRemaining.days} <span className="text-[16px]">Days</span>
                </div>

                {/* Hours */}
                <div
                  style={{
                    background:
                      "linear-gradient(85.98deg, #0B9D9A 21.68%, #CB9C22 58.8%)",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                  className="py-3 px-6 font-normal text-[40px] flex justify-around items-center flex-col"
                >
                  {timeRemaining.hours}{" "}
                  <span className="text-[16px]">Hours</span>
                </div>

                {/* Minutes */}
                <div
                  style={{
                    background:
                      "linear-gradient(85.98deg, #0B9D9A 21.68%, #CB9C22 58.8%)",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                  className="py-3 px-6 font-normal text-[40px] flex justify-around items-center flex-col"
                >
                  {timeRemaining.minutes}{" "}
                  <span className="text-[16px]">Minutes</span>
                </div>

                {/* Seconds */}
                <div
                  style={{
                    background:
                      "linear-gradient(85.98deg, #0B9D9A 21.68%, #CB9C22 58.8%)",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                  className="py-3 px-6 font-normal text-[40px] flex justify-around items-center flex-col"
                >
                  {timeRemaining.seconds}{" "}
                  <span className="text-[16px]">Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxContainer>
    </>
  );
}

export default Waitlist;
