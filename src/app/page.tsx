import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Navbar Section */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold">John Blogs</h1>
        <div className="space-x-6">
          <a href="#works" className="text-gray-600 hover:text-red-500">Works</a>
          <a href="#blog" className="text-gray-600 hover:text-red-500">Blog</a>
          <a href="#contact" className="text-gray-600 hover:text-red-500">Contact</a>
        </div>
      </nav>

      {/* Header Section */}
      <header className="py-10">
        <div className="flex flex-col md:flex-row items-start max-w-5xl mx-auto space-y-6 md:space-y-0 md:space-x-10">
          {/* Text Section */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold">Hi, I am John,<br /> Creative Technologist</h1>
            <p className="mt-4 text-gray-600">
              Armet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br />
              Velit officia consequat duis enim velit mollit. <br /> Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="mt-8 px-6 py-2 bg-red-500 text-white">
              Download Resume
            </button>
          </div>

          {/* Image Section */}
          <Image
            src="/John Doe_icon.png" // Add your profile image in public/ folder
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
      </header>
      {/* Recent Posts Section */}
      <section className="py-10 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Recent Post</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array(2).fill("").map((_, index) => (
              <div key={index} className="bg-white p-6 rounded shadow">
                <h3 className="text-lg font-semibold">Making a design system from scratch</h3>
                <p className="text-sm text-gray-500 mt-2">12 Feb 2020 | Design, Pattern</p>
                <p className="mt-4 text-gray-600">
                  Armet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Featured Works</h2>
          <div className="space-y-6">
            {Array(3).fill("").map((_, index) => (
              <div key={index} className="flex items-start space-x-4">
                   <Image
                  src={"/work-thumbnail-${index + 1}.png"}
                  alt={"Work ${index + 1}"}
                  width={100}
                  height={100}
                  className="rounded shadow"
                />
                <div>
                 <h3 className="text-lg font-semibold">Designing Dashboards</h3>
                  <p className="text-sm text-gray-500">2020 | Dashboard</p>
                  <p className="mt-2 text-gray-600 ">
                    Armet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 text-center bg-gray-200">
        <p>Copyright ©2020 All rights reserved</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-600">Facebook</a>
          <a href="#" className="text-gray-600">Instagram</a>
          <a href="#" className="text-gray-600">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}