import { Satisfy, Oswald } from "next/font/google";
import styles from "@/app/custom-styles/Landing.module.css";

const satisfy = Satisfy({
  variable: "--satisfy",
  subsets: ["latin"],
  weight: "400",
});

const oswald = Oswald({
  variable: "--oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const Landing = () => {
  function stringArray(str: string) {
    return str.split("");
  }
  return (
    <main className="flex flex-col justify-center flex-1">
      <div className={`flex flex-col items-center`}>
        <div className={`list-none flex gap-1 z-10`}>
          {stringArray("I'm Nima").map((item, index) => (
            <li
              className={`${satisfy.className} text-6xl sm:text-8xl text-[#1A1A1D] font-extrabold ${styles["fade-out"]}`}
              key={index}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {item}
            </li>
          ))}
        </div>

        <div className={`${oswald.className} flex gap-1`}>
          {stringArray("A passionate software developer").map(
            (letter, index) => (
              <p
                key={index}
                style={{
                  animationDelay: `${Math.random() * 2}s`,
                }}
                className={`text-[#1A1A1D] ${styles["curtain-out"]}`}
              >
                {letter}
              </p>
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default Landing;
