import { PhotoIcon, MapPinIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export default function CreateComplaintPage() {
  return (
    <div className="min-h-screen bg-[#fef2f2]">
      <div className="relative isolate">
        {/* Gradient Background */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ef4444] to-[#b91c1c] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Üst Başlık */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Deneyimini Paylaş</h1>
            <p className="mt-2 text-gray-600">
              Yaşadığınız kötü deneyimi detaylı bir şekilde anlatın ve toplumu bilinçlendirin.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-8">
            {/* İşletme Bilgileri */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">İşletme Bilgileri</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="business-name" className="block text-sm font-medium text-gray-700">
                    İşletme Adı
                  </label>
                  <input
                    type="text"
                    id="business-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Örn: Mega Mobilya"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Kategori
                  </label>
                  <select
                    id="category"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Kategori Seçin</option>
                    <option value="restaurant">Restoran</option>
                    <option value="cargo">Kargo</option>
                    <option value="electronics">Elektronik</option>
                    <option value="furniture">Mobilya</option>
                    <option value="market">Market</option>
                    <option value="clothing">Giyim</option>
                    <option value="health">Sağlık</option>
                    <option value="education">Eğitim</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Konum
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        type="text"
                        id="location"
                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-primary-500 focus:ring-primary-500"
                        placeholder="İşletmenin tam adresi"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Şikayet Detayları */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Deneyim Detayları</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Başlık
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Deneyiminizi kısaca özetleyen bir başlık"
                  />
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                    Detaylı Açıklama
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <textarea
                      id="content"
                      rows={8}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Deneyiminizi detaylı bir şekilde anlatın. Markdown formatını kullanabilirsiniz."
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Markdown kullanabilirsiniz: **kalın**, *italik*, # başlık, - liste öğesi
                  </p>
                </div>

                {/* Görsel Yükleme */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Görseller</label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="images"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 hover:text-primary-500"
                        >
                          <span>Görsel Yükle</span>
                          <input id="images" name="images" type="file" className="sr-only" multiple accept="image/*" />
                        </label>
                        <p className="pl-1">veya sürükle bırak</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF - En fazla 5 görsel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bilgilendirme */}
            <div className="rounded-md bg-blue-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm text-blue-700">
                    Paylaşılan deneyimler moderasyon ekibimiz tarafından incelendikten sonra yayınlanacaktır.
                    Lütfen gerçek ve doğrulanabilir deneyimler paylaşın.
                  </p>
                </div>
              </div>
            </div>

            {/* Gönder Butonu */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Deneyimi Paylaş
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ef4444] to-[#b91c1c] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>
    </div>
  );
} 