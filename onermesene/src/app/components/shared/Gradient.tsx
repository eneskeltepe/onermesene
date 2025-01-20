interface GradientProps {
  position: 'top' | 'middle' | 'bottom';
  className?: string;
}

export default function Gradient({ position, className = '' }: GradientProps) {
  const baseClasses = 'absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl';
  const gradientClasses = 'relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ef4444] to-[#b91c1c]';

  const positionClasses = {
    top: '-top-40 sm:-top-80',
    middle: 'top-[calc(50%-30rem)]',
    bottom: 'bottom-0'
  };

  const opacityClasses = {
    top: 'opacity-25',
    middle: 'opacity-20',
    bottom: 'opacity-30'
  };

  const transformClasses = {
    top: 'left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]',
    middle: 'right-[calc(50%-11rem)] sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]',
    bottom: 'left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
  };

  return (
    <div className={`${baseClasses} ${positionClasses[position]} ${className}`} aria-hidden="true">
      <div className={`${gradientClasses} ${opacityClasses[position]} ${transformClasses[position]}`} />
    </div>
  );
} 