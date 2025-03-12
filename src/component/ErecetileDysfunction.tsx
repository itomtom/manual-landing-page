import EDImage from '../assets/erecetile.png';

export function ErecetileDysfunction() {
  return (
    <div className="relative h-[445px] w-[870px] justify-self-center max-md:h-auto">
      <div
        className="absolute left-[25px] h-full text-[445px] font-bold leading-[510px] text-tertiary-100 max-md:hidden"
        aria-hidden="true"
      >
        02
      </div>
      <img
        className="absolute right-0 max-md:relative max-md:mx-auto"
        alt="Erecetile dysfunction treatment"
        src={EDImage}
        width={370}
        height={445}
      />
      <article className="absolute left-[10px] flex h-full w-[372px] flex-col justify-center max-md:relative max-md:left-0 max-md:mx-auto max-md:mt-10 max-md:min-w-min">
        <div className="mb-[10px] text-[10px] font-bold uppercase leading-[15px] tracking-[1.5px] text-primary-200">
          Erecetile dysfunction
        </div>
        <h3 className="mb-[22px] text-[28px] font-bold leading-10 text-primary-100">
          Erections can be a tricky thing. But no need to feel down!
        </h3>
        <p className="text-lg font-normal leading-[30px] text-primary-100">
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
      </article>
    </div>
  );
}
