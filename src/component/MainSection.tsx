import { ErecetileDysfunction } from './ErecetileDysfunction';
import { HairLoss } from './HairLoss';

export function MainSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="mb-16 text-center text-[40px] font-bold leading-[60px] tracking-tight text-primary-100">
          What we can help with
        </h2>

        <div className="space-y-44 max-md:space-y-24">
          <HairLoss />
          <ErecetileDysfunction />
        </div>
      </div>
    </section>
  );
}
