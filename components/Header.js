export default function Header() {
  return (
    <div className="isolate">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="px-6 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold italic tracking-tight text-gray-900 sm:text-4xl">
            ファンキーラブ - (funkii rabu)
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            I design, build  & deploy software. Product, Front-End, Mobile & ML/DevOps.
          </p>
          <div className="mt-10 flex items-center justify-left gap-x-6">
            <a
              href="https://twitter.com/funkiirabu"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Ask me anything
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              About me <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
