import { Hero } from '../component/Hero';
import { Footer } from '../component/Footer';
import { MainSection } from '../component/MainSection';

export function Home() {
  return (
    <div>
      <Hero />

      <MainSection />

      {/* What we can help with
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold text-[#0b3b3c] md:text-4xl">
            What we can help with
          </h2>

          {/* Hair Loss Section 

        
          <div className="mb-24 flex flex-col items-center md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/3">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Hair loss treatment"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="relative md:w-2/3 md:pl-16">
              <div className="absolute -left-8 top-0 z-0 text-[200px] font-bold text-[#6d8a83] opacity-20">
                01
              </div>
              <div className="relative z-10">
                <span className="text-sm font-medium uppercase tracking-wider text-[#6d8a83]">
                  Hair Loss
                </span>
                <h3 className="mb-4 mt-2 text-2xl font-bold text-[#0b3b3c] md:text-3xl">
                  Hair loss needn&apos;t be irreversible. We can help!
                </h3>
                <p className="max-w-lg text-[#0b3b3c]">
                  We&apos;re working around the clock to bring you a holistic
                  approach to your wellness. From top to bottom, inside and out.
                </p>
              </div>
            </div>
          </div>*}

          {/* Erectile Dysfunction Section 
          <div className="flex flex-col items-center md:flex-row-reverse">
            <div className="mb-8 md:mb-0 md:w-1/3">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Erectile dysfunction treatment"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="relative md:w-2/3 md:pr-16">
              <div className="absolute -right-8 top-0 z-0 text-[200px] font-bold text-[#6d8a83] opacity-20">
                02
              </div>
              <div className="relative z-10">
                <span className="text-sm font-medium uppercase tracking-wider text-[#6d8a83]">
                  Erectile Dysfunction
                </span>
                <h3 className="mb-4 mt-2 text-2xl font-bold text-[#0b3b3c] md:text-3xl">
                  Erections can be a tricky thing. But no need to feel down!
                </h3>
                <p className="max-w-lg text-[#0b3b3c]">
                  We&apos;re working around the clock to bring you a holistic
                  approach to your wellness. From top to bottom, inside and out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      <Footer />
    </div>
  );
}
