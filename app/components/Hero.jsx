'use client'
import Image from 'next/image'
import Link from 'next/link'
import Heropic from '../hero.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen">
            <Image
                src={Heropic}
                alt="Fresh baked goods"
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <motion.div 
                    className="text-center text-white px-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Artisanal Baked Goods
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Made fresh daily with the finest ingredients
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/menu" passHref>
                            <motion.button 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-600 transition"
                            >
                                Shop Now
                            </motion.button>
                        </Link>
                        <Link href="/about" passHref>
                            <motion.button 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition"
                            >
                                Learn More
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero