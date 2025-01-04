import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-purple-500 text-white py-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div>
            <h2 className="text-2xl font-bold">Hamza-Blog</h2>
            <p className="text-white-400 mt-4 leading-10">
              Sharing insights, stories, and knowledge to inspire and connect with our readers.
            </p>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="font-semibold text-lg">Categories</h3>
            <ul className="mt-4 space-y-2 text-white-400">
              <li>
                <Link href="/category/technology">Technology</Link>
              </li>
              <li>
                <Link href="/category/design">Design</Link>
              </li>
              <li>
                <Link href="/category/lifestyle">Lifestyle</Link>
              </li>
              <li>
                <Link href="/category/travel">Travel</Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div>
            <h3 className="font-semibold text-lg">Recent Posts</h3>
            <ul className="mt-4 space-y-2 text-white-400">
              <li>
                <Link href="/blog/how-ai-will-change-the-future">
                  How AI Will Change the Future
                </Link>
              </li>
              <li>
                <Link href="/blog/tips-for-remote-working">
                  Tips for Remote Working
                </Link>
              </li>
              <li>
                <Link href="/blog/10-travel-destinations-2025">
                  10 Travel Destinations for 2025
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="https://twitter.com" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white-400 hover:text-white"
                >
                  <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.2 4.2 0 0 0 1.84-2.32c-.81.48-1.7.83-2.65 1A4.18 4.18 0 0 0 11.72 9a11.87 11.87 0 0 1-8.63-4.37 4.18 4.18 0 0 0 1.29 5.6A4.18 4.18 0 0 1 2.4 9v.05a4.18 4.18 0 0 0 3.35 4.1 4.2 4.2 0 0 1-1.89.07 4.19 4.19 0 0 0 3.91 2.91A8.38 8.38 0 0 1 2 19.29a11.83 11.83 0 0 0 6.41 1.88c7.7 0 11.91-6.38 11.91-11.91 0-.18 0-.35-.01-.53a8.49 8.49 0 0 0 2.08-2.15z" />
                </svg>
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white-400 hover:text-white"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.693v-3.622h3.127V8.413c0-3.1 1.892-4.787 4.65-4.787 1.325 0 2.463.099 2.796.143v3.243h-1.918c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white-400 hover:text-white"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.691 0 8.281.014 7.005.072 5.683.13 4.413.401 3.346 1.469 2.28 2.536 2.009 3.807 1.951 5.129.993 6.406.98 6.816.98 12c0 5.185.014 5.594.072 6.871.058 1.322.329 2.593 1.395 3.66 1.067 1.067 2.338 1.338 3.66 1.396 1.276.058 1.686.072 6.871.072 5.185 0 5.594-.014 6.871-.072 1.322-.058 2.593-.329 3.66-1.395 1.067-1.067 1.338-2.338 1.396-3.66.058-1.276.072-1.686.072-6.871 0-5.185-.014-5.594-.072-6.871-.058-1.322-.329-2.593-1.395-3.66C20.593.329 19.322.058 18 .072c-1.276-.058-1.686-.072-6.871-.072z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 6.162 6.162A6.17 6.17 0 0 0 12 5.838zm0 10.141a3.979 3.979 0 1 1 3.979-3.979A3.983 3.983 0 0 1 12 15.979zm4.406-10.845a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-6 text-center text-sm text-white-400">
          &copy; {new Date().getFullYear()} Hamza-Blog. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
