export default function Contact() {
  return (
    <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8 pb-24">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">İletişim</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Bize ulaşmak için aşağıdaki kanalları kullanabilirsiniz:
        </p>
        <div className="mt-10 bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-primary-100/20">
          <dl className="space-y-6 text-base leading-7 text-gray-600">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="font-semibold text-gray-900">Email:</span>
              </dt>
              <dd>
                <a href="mailto:iletisim@onermesene.com" className="text-primary-600 hover:text-primary-500">
                  iletisim@onermesene.com
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="font-semibold text-gray-900">Telefon:</span>
              </dt>
              <dd>
                <a href="tel:+902121234567" className="text-primary-600 hover:text-primary-500">
                  +90 (212) 123 45 67
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="font-semibold text-gray-900">Adres:</span>
              </dt>
              <dd>
                Levent, Büyükdere Cad. No:123<br />
                34394 Şişli/İstanbul
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
} 