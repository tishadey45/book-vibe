import bannerImg from "@/assets/hero_img.jpg";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="px-6 py-12 md:py-20">
      <div className="container mx-auto grid items-center gap-8 rounded-4xl bg-slate-300 p-6 md:grid-cols-2 md:p-10 lg:p-14">
        {/* Banner Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl font-bold leading-tight text-slate-800 md:text-4xl lg:text-5xl">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn btn-success rounded-full px-6 text-white">
            View the Task
          </button>
        </div>

        {/* Banner Image */}
        <div className="overflow-hidden rounded-3xl">
          <Image
            src={bannerImg}
            alt="Books banner"
            width={1000}
            height={500}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
