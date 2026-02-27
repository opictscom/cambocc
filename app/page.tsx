export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Coming Soon
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
          CamboCC is building the next generation platform for the Cambodia Creative Community.
          We're crafting something special to bring creators, artists, and innovators together.
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
          <p className="text-lg text-white mb-4">
            ✨ <span className="font-semibold">Stay Tuned</span> for the launch!
          </p>
          <p className="text-blue-100">
            We're working hard to bring you an amazing experience.
            <br />Check back soon for updates.
          </p>
        </div>

        <div className="mt-12">
          <p className="text-white/60 text-sm">© 2026 CamboCC. All rights reserved.</p>
        </div>
      </div>
    </main>
  )
}
