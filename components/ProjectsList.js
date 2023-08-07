import Image from 'next/image'

export default function ProjectsList({ projects }) {
  return (
    <div className="px-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl italic font-semibold mb-4">My Projects</h2>
        <ul role="list" className="divide-y divide-gray-200">
          {projects.map((project, index) => (
            <li key={project.id} className="py-4 flex">
              {index === 0 ? (
                <a href="https://piixel.xyz" className="flex w-full">
                  <div className="mr-4 flex-shrink-0 self-center">
                    <img
                      src={project.image}
                      className="h-16 bg-white object-cover tilt"
                      alt={project.title}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{project.title}</h4>
                    <p className="mt-1">{project.description}</p>
                  </div>
                </a>
              ) : (
                <>
                  <div className="mr-4 flex-shrink-0 self-center">
                    <img
                      src={project.image}
                      className="h-16 bg-white object-cover"
                      alt={project.title}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{project.title}</h4>
                    <p className="mt-1">{project.description}</p>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
