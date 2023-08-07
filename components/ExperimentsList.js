export default function ExperimentsList({ experiments }) {
  return (
    <div className="px-6 mt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl italic font-semibold mb-4">My Experiments</h2>
        {experiments.map((experiment, index) => (
          <div key={experiment.id} className="py-4">
            {index === 0 ? (
              <a href="https://github.com/funkiirabu/DeepPixel">
                <div className="mb-4 flex-shrink-0">
                  <img
                    src={experiment.image}
                    className="h-32 w-full bg-white object-cover rounded-t-lg"
                    alt={experiment.title}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold">{experiment.title}</h4>
                  <p className="mt-1">{experiment.description}</p>
                </div>
              </a>
            ) : (
              <>
                <div className="mb-4 flex-shrink-0">
                  <img
                    src={experiment.image}
                    className="h-32 w-full bg-white object-cover rounded-t-lg"
                    alt={experiment.title}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold">{experiment.title}</h4>
                  <p className="mt-1">{experiment.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
