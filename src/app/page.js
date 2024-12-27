export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row border border-yellow-500">
          <div className="border border-rose-500">
            <h1 className="text-5xl font-bold">Play kittenz</h1>
            <h2>The Purr-fectly Ridiculous Kitten Matching Game</h2>
            <p className="py-6">
              Think you can handle this level of cuteness? Welcome to Kittenz,
              where you'll match the fluffiest, sassiest kittens on the
              internet! Flip those cards, find those matches, and unleash a
              tsunami of adorable chaos. Prepare for uncontrollable giggles,
              endless "awwws," and a serious case of kitten addiction. Only the
              bravest can conquer the cute! Are you up for the challenge? Play
              Kittenz now and get ready for a purr-splosion of fun! 🐾
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl border border-blue-500"
          />
        </div>
      </div>
    </main>
  );
}
