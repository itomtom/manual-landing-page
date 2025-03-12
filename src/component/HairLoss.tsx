import HairImage from '../assets/hair.png';

export function HairLoss() {
  return (
    <div className="relative h-[445px] w-[870px] justify-self-center max-md:h-auto">
      <div
        className="absolute left-[290px] h-full text-[445px] font-bold leading-[510px] text-tertiary-100 max-md:hidden"
        aria-hidden="true"
      >
        01
      </div>
      <img
        className="absolute max-md:relative max-md:mx-auto"
        alt="Hair loss treatment"
        src={HairImage}
        width={370}
        height={445}
      />
      <article className="absolute left-[495px] flex h-full w-[372px] flex-col justify-center max-md:relative max-md:left-0 max-md:mx-auto max-md:mt-10 max-md:min-w-min">
        <div className="mb-[10px] text-[10px] font-bold uppercase leading-[15px] tracking-[1.5px] text-primary-200">
          Hair Loss
        </div>
        <h3 className="mb-[22px] text-[28px] font-bold leading-10 text-primary-100">
          Hair loss needn’t be irreversible. We can help!
        </h3>
        <p className="text-lg font-normal leading-[30px] text-primary-100">
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
      </article>
    </div>
  );
}
