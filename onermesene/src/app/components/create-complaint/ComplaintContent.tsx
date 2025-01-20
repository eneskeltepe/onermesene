import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface ComplaintContentProps {
  onTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onAuthorChange: (value: string) => void;
}

export default function ComplaintContent({
  onTitleChange,
  onContentChange,
  onAuthorChange,
}: ComplaintContentProps) {
  return (
    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Deneyim Detayları</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Başlık
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            placeholder="Deneyiminizi kısaca özetleyen bir başlık"
            onChange={(e) => onTitleChange(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Deneyiminiz
          </label>
          <div className="mt-1">
            <textarea
              id="content"
              name="content"
              rows={8}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              placeholder="Yaşadığınız deneyimi detaylı bir şekilde anlatın. Markdown formatı desteklenmektedir."
              onChange={(e) => onContentChange(e.target.value)}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Markdown formatı desteklenmektedir. Başlıklar için #, listeler için *, kalın yazı için ** kullanabilirsiniz.
          </p>
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            İsminiz (Opsiyonel)
          </label>
          <input
            type="text"
            name="author"
            id="author"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            placeholder="Anonim olarak paylaşmak için boş bırakın"
            onChange={(e) => onAuthorChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
} 