import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <section className="relative h-[600px] overflow-hidden">
                <Image
                    src=""
                    alt="Fresh baked goods"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Artisanal Baked Goods
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Made fresh daily with the finest ingredients
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button>
                                <Link href="/menu">Shop Now</Link>
                            </button>
                            <button>
                                <Link href="/about">Learn More</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero