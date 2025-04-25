
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const partners = [
  { name: "TechCorp", logo: "https://placehold.co/200x80?text=TechCorp" },
  { name: "InnovateLabs", logo: "https://placehold.co/200x80?text=InnovateLabs" },
  { name: "DigitalFlow", logo: "https://placehold.co/200x80?text=DigitalFlow" },
  { name: "WebPro", logo: "https://placehold.co/200x80?text=WebPro" },
  { name: "CreativeTech", logo: "https://placehold.co/200x80?text=CreativeTech" },
  { name: "CodeMasters", logo: "https://placehold.co/200x80?text=CodeMasters" },
];

const Partners = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold gradient-text text-center mb-8">Trusted By Industry Leaders</h2>

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {partners.map((partner) => (
              <CarouselItem key={partner.name} className="md:basis-1/3 lg:basis-1/4">
                <div className="neo-card p-6 h-32 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter dark:brightness-90"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
