import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  BookmarkIcon,
  Users,
  Search,
  ListChecks,
  Star,
} from "lucide-react";
import FeatureCard from "@/features/landing/feature-card";
import BookAnimation from "@/features/landing/book-animation";
import TestimonialCard from "@/features/landing/testimonial-card";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-amber-500" />
              <span className="inline-block font-bold text-xl">Codrel</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#features"
                className="text-sm font-medium transition-colors hover:text-amber-500"
              >
                Features
              </Link>
              <Link
                href="#community"
                className="text-sm font-medium transition-colors hover:text-amber-500"
              >
                Community
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium transition-colors hover:text-amber-500"
              >
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm font-medium transition-colors hover:text-amber-500"
              >
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-amber-500 hover:bg-amber-600 text-white"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Track Your Reading Journey with{" "}
                    <span className="text-amber-500">Codrel</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Catalog your reads, share reviews, and connect with fellow
                    book lovers in a vibrant community of readers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                    Start Your Bookshelf
                  </Button>
                  <Button
                    variant="outline"
                    className="border-amber-200 hover:bg-amber-100"
                  >
                    Explore Library
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-background bg-amber-100 flex items-center justify-center"
                      >
                        <span className="text-xs font-medium text-amber-700">
                          {i}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="text-muted-foreground">
                    Join 10,000+ readers tracking their literary adventures
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <BookAnimation />
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need for Your Reading Life
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Codrel helps you track, share, and celebrate your reading
                  journey with powerful features designed for book lovers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <FeatureCard
                icon={<BookmarkIcon className="h-10 w-10 text-amber-500" />}
                title="Catalog Your Reads"
                description="Keep track of books you've read, want to read, and are currently reading in your personal library."
              />
              <FeatureCard
                icon={<Star className="h-10 w-10 text-amber-500" />}
                title="Write Reviews"
                description="Share your thoughts and rate books to help others discover their next great read."
              />
              <FeatureCard
                icon={<ListChecks className="h-10 w-10 text-amber-500" />}
                title="Create Lists"
                description="Organize books into custom lists like 'Summer Reads' or 'All-Time Favorites'."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-amber-500" />}
                title="Connect with Friends"
                description="Follow friends and see what they're reading, reviewing, and recommending."
              />
              <FeatureCard
                icon={<Search className="h-10 w-10 text-amber-500" />}
                title="Discover Books"
                description="Find new books based on your reading history and community recommendations."
              />
              <FeatureCard
                icon={<BookOpen className="h-10 w-10 text-amber-500" />}
                title="Reading Stats"
                description="Visualize your reading habits with beautiful charts and yearly reading challenges."
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Codrel app interface showing a book collection"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">
                    How It Works
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Your Personal Library, Anywhere You Go
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Codrel makes it simple to keep track of your reading life,
                    whether you&apos;re at home, in a bookstore, or discussing
                    books with friends.
                  </p>
                </div>
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-900">
                      1
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Create Your Account</h3>
                      <p className="text-muted-foreground">
                        Sign up in seconds and start building your digital
                        bookshelf.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-900">
                      2
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">
                        Add Books to Your Collection
                      </h3>
                      <p className="text-muted-foreground">
                        Search our extensive database or scan book covers to add
                        them to your shelves.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-900">
                      3
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Connect and Share</h3>
                      <p className="text-muted-foreground">
                        Find friends, share reviews, and discover new books
                        through your network.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="community"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">
                  Community
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Join a Community of Book Lovers
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what readers around the world are saying about their
                  experience with Codrel.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <TestimonialCard
                quote="Codrel has completely transformed how I track my reading. I love seeing what my friends are reading and getting inspired by their reviews."
                author="Sarah J."
                role="Book Blogger"
              />
              <TestimonialCard
                quote="As someone who reads 50+ books a year, I needed a way to keep track. Codrel not only helps me organize my reads but connects me with like-minded readers."
                author="Michael T."
                role="Literature Professor"
              />
              <TestimonialCard
                quote="The reading stats feature is my favorite! I can see patterns in my reading habits and challenge myself to explore new genres."
                author="Priya K."
                role="Avid Reader"
              />
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-amber-50"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works best for your reading journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="rounded-xl border bg-white p-6 shadow-sm flex flex-col">
                <div className="flex-grow">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-2xl font-bold">Free</h3>
                    <p className="text-muted-foreground">
                      Perfect for casual readers
                    </p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$0</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-amber-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Track up to 100 books</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-amber-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Basic reading stats</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-amber-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Connect with friends</span>
                    </li>
                  </ul>
                </div>
                <Button className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-white">
                  Get Started
                </Button>
              </div>
              <div className="rounded-xl border bg-white p-6 shadow-sm flex flex-col">
                <div className="flex-grow">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-2xl font-bold">Premium</h3>
                    <p className="text-muted-foreground">
                      For the dedicated bibliophile
                    </p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$5</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-amber-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Unlimited book tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-amber-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Advanced reading analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-amber-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Custom reading challenges</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-amber-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Early access to new features</span>
                    </li>
                  </ul>
                </div>
                <Button className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-white">
                  Upgrade Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Start Your Reading Journey?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of readers who are tracking, sharing, and
                  celebrating their literary adventures with Codrel.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button className="bg-white text-amber-600 hover:bg-amber-100">
                  Create Your Account
                </Button>
                <Button className="bg-white text-amber-600 hover:bg-amber-100">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-amber-500" />
            <p className="text-sm font-medium">
              © 2025 Codrel. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm hover:underline underline-offset-4"
            >
              Cookies
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-amber-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-amber-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-amber-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
