/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/1xeuzRbA6sP
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function homeComponent() {
  return (
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <Image
              src="/placeholder.svg"
              width={600}
              height={600}
              alt="Baker"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to Tivas Haven</h1>
              <p className="text-muted-foreground md:text-xl">
                Indulge in the art of baking with our passion for creating delectable treats.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid gap-12 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Delicious Offerings</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our selection of freshly baked goods, each crafted with love and attention to detail.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <Image
                  src="/placeholder.svg"
                  alt="Croissant"
                  width={500}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">Buttery Croissants</h3>
                  <p className="text-muted-foreground">
                    Flaky, golden-brown croissants made with the finest ingredients.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <Image
                  src="/placeholder.svg"
                  alt="Macarons"
                  width={500}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">Delicate Macarons</h3>
                  <p className="text-muted-foreground">Vibrant, delicate macarons in a variety of flavors.</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <Image
                  src="/placeholder.svg"
                  alt="Cupcakes"
                  width={500}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">Decadent Cupcakes</h3>
                  <p className="text-muted-foreground">Moist, flavorful cupcakes with irresistible toppings.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Baking Journey</h2>
              <p className="text-muted-foreground md:text-xl">
                Baking has always been a passion of mine, ever since I was a child helping my grandmother in the
                kitchen. I&lsquo;ve honed my skills over the years, experimenting with different techniques and ingredients to
                create the perfect baked goods. My mission is to share the joy of baking with everyone who steps into
                our bakery.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
            <Image
              src="/placeholder.svg"
              width={600}
              height={600}
              alt="Baker's Story"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="grid gap-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Gallery of Our Creations</h2>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/placeholder.svg"
                  alt="Gallery 1"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Gallery 2"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Gallery 3"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Gallery 4"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View Gallery
              </Link>
            </div>
            <Image
              src="/placeholder.svg"
              width={600}
              height={600}
              alt="Gallery Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-12 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">From Our Baking Blog</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our latest blog posts for insights into the art of baking.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <article className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">Read Post</span>
                </Link>
                <Image
                  src="/placeholder.svg"
                  alt="Blog Post 1"
                  width={500}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">Mastering the Art of Sourdough Bread</h3>
                  <p className="text-muted-foreground">Discover the secrets to creating the perfect sourdough loaf.</p>
                </div>
              </article>
              <article className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">Read Post</span>
                </Link>
                <Image
                  src="/placeholder.svg"
                  alt="Blog Post 2"
                  width={500}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">The Science Behind Baking the Perfect Cake</h3>
                  <p className="text-muted-foreground">
                    Explore the key ingredients and techniques for baking moist, fluffy cakes.
                  </p>
                </div>
              </article>
              <article className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">Read Post</span>
                </Link>
                <Image
                  src="/placeholder.svg"
                  alt="Blog Post 3"
                  width={500}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">The Versatility of Baking with Seasonal Ingredients</h3>
                  <p className="text-muted-foreground">
                    Learn how to incorporate fresh, seasonal produce into your baking.
                  </p>
                </div>
              </article>
            </div>
            <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View All Posts
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="text-muted-foreground md:text-xl">
                Have a question or want to place an order? Fill out the form below and we&lsquo;ll get back to you as soon as
                possible.
              </p>
              <form className="grid gap-4">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
                <Textarea placeholder="Message" className="w-full" rows={4} />
                <Button type="submit" className="justify-self-start">
                  Submit
                </Button>
              </form>
            </div>
            <Image
              src="/placeholder.svg"
              width={600}
              height={600}
              alt="Contact"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </section>
      </div>
  )
}