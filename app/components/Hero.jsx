import Image from 'next/image';
import Bake from '../hero.png'
import { HiOutlineArrowRight as ArrowRight, HiOutlineCake as Cake, HiOutlineClock as Clock, HiOutlineStar as Star } from 'react-icons/hi2';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={Bake}
            alt="Freshly baked goods"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Artisan Baked Goods Made With Love
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Handcrafted breads, pastries, and desserts baked fresh daily using traditional methods and the finest ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
                Order Online <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
                Our Menu
              </button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-24 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Cake className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Artisan Quality</h3>
              <p className="text-muted-foreground">
                Every item is handcrafted using traditional baking methods passed down through generations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Baked Fresh Daily</h3>
              <p className="text-muted-foreground">
                We start baking at dawn to ensure you get the freshest breads and pastries every day.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Ingredients</h3>
              <p className="text-muted-foreground">
                We source only the finest organic and local ingredients for exceptional flavor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}