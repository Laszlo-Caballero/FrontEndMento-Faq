import StarIcon from "./assets/images/icon-star.svg?react";
import FAQs from "./componets/Faq";
import { Faqs } from "./componets/constFaq";

function App() {
  return (
    <div className="Mobile:bg-Mobile w-screen h-screen flex items-center justify-center bg-no-repeat bg-[#f9f0ff] sm:bg-Desktop flex-col">
      <main className="flex flex-col bg-white sm:p-8 sm:w-2/4 rounded-lg Mobile:w-11/12 Mobile:py-4 Mobile:px-8 mt-auto">
        <header className="flex items-center h-1/3 sm:gap-4 my-4 Mobile:gap-6">
          <StarIcon className="w-8 Mobile:w-7" />
          <p className="sm:text-5xl font-WorkSansBlod text-[#2f1533] Mobile:text-4xl">
            FAQs
          </p>
        </header>
        <section>
          {Faqs.map((faq, index) => {
            return (
              <FAQs
                key={index}
                titulo={faq.titulo}
                descripcion={faq.descripcion}
              />
            );
          })}
        </section>
      </main>
      <footer className="mt-auto">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </div>
  );
}

export default App;
