import { values } from '@/app/data/values';

export default function Values() {
  return (
    <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary-600">Değerlerimiz</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Önermesene'yi Özel Yapan Nedir?
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Platform olarak benimsediğimiz temel değerler ve prensipler.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.name} className="flex flex-col bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-primary-100/20">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <value.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                {value.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{value.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
} 