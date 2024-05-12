type FeatureItem = {
    title: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
      title: 'Quickstart Tutorial',
      description: (
        <>
          Make you first Chat Completions API request with diferent providers.
        </>
      ),
    },
    {
      title: 'Prompt examples',
      description: (
        <>
          Explore what Agents and Chains can do with prompts.
        </>
      ),
    },
    {
      title: 'Introduction',
      description: (
        <>
          Learn the basics of building agent.
        </>
      ),
    },
    {
      title: 'Agent geep dive',
      description: (
        <>
          Explore how agent work and important concepts.
        </>
      ),
    },
    {
      title: 'Providers endpoints',
      description: (
        <>
          We support llama.cpp and more endpoints
        </>
      ),
    },
    {
      title: 'Prompt engineering',
      description: (
        <>
          Learn best practices for prompt engineering.
        </>
      ),
    },
    {
      title: 'Structured Output',
      description: (
        <>
          Learn techniques for well-formatted output.
        </>
      ),
    },
    {
      title: 'Function Calls',
      description: (
        <>
          Discover how to execute structured function calls.
        </>
      ),
    },
    {
      title: 'Memory',
      description: (
        <>
          Learn techniques for storing and retrieving memory.
        </>
      ),
    },
    {
      title: 'Chain',
      description: (
        <>
          Learn how to generate using diferent chain protocols.
        </>
      ),
    },
    {
      title: 'Agents',
      description: (
        <>
          Provide guidelines on designing and implementing agents.
        </>
      ),
    },
    {
      title: 'RAG',
      description: (
        <>
          Learn how to process of integrating a retrieval component.
        </>
      ),
    }
];

function MainFeature({title, description}: FeatureItem) {
    return (
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-32 sm:pt-32 lg:pt-34">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl "></div>
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="#">
                    <span className="absolute inset-0"></span>
                    {title}
                </a>
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                {description}
            </div>
        </article>
    );
}

function Feature({title, description}: FeatureItem) {
  return (
    <div className="relative my-4 pl-16">
        <dt className="text-base font-semibold">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                {/* <Svg className={styles.featureSvg} role="img" /> */}
            </div>
            {title}
        </dt>
        <dd className="text-sm">{description}</dd>
    </div>
  );
}

function Home() {
  return (
    <>
        <header className='relative overflow-hidden py-8'>
            <h1 className="text-left text-4xl font-bold">Welcome to the `llama-cpp-agent` developer platform.</h1>
        </header>
        <section className="mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-6">Start with the basics</h2>
            <div className='mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
                {FeatureList.slice(0,2).map((props, idx) => (
                    <MainFeature key={idx} {...props} />
                ))}
            </div>
        </section>
        <section className="mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-6">Build an agent</h2>
            <div className='grid max-w-xl grid-cols-1 gap-x-4 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-8'>
                {FeatureList.slice(2,4).map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))}
            </div>
        </section>
        <section className="mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-6">Explore features</h2>
            <div className='grid max-w-xl grid-cols-1 gap-x-4 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-8'>
                {FeatureList.slice(4).map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))}
            </div>
        </section>
    </>
  )
}

export default Home
