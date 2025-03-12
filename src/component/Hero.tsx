import logo from '../assets/logo.svg';

export function Hero() {
  return (
    <div className="bg-background bg-cover bg-no-repeat pb-4 sm:min-h-[750px] sm:pb-0">
      <header className="ml-4 pt-[30px] sm:pl-[138px]">
        <img src={logo} alt="Manual Logo" />
      </header>
      <section className="mx-4 pt-8 sm:mx-0 sm:pl-[138px] sm:pt-[119px]">
        <div className="flex flex-col gap-9 sm:w-[468px]">
          <h1 className="text-[90px] leading-[90px]">
            Be good
            <br />
            to yourself
          </h1>
          <p className="text-lg leading-[30px]">
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
          <button className="h-[45px] w-[156px] bg-secondary-100 px-[30px] py-[15px] text-[10px] font-bold uppercase leading-[15px] tracking-widest text-white">
            Take the quiz
          </button>
        </div>
      </section>
    </div>
  );
}
