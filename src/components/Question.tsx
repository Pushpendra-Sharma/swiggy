type Props = {
  id: string;
  title: string;
  description: string;
  isOpen: boolean;
  callback: () => void;
};

const Question = ({ id, title, description, isOpen, callback }: Props) => {
  return (
    <div className='py-5 text-gray-ultra md:text-gray-medium border-b border-[#d4d5d9] flex gap-2 justify-between w-full'>
      <div className=''>
        <button
          className='md:text-lg text-gray-medium cursor-pointer hover:text-orange text-left'
          onClick={() => callback()}
        >
          {title}
        </button>
        {isOpen && (
          <p className='text-sm text-gray-light leading-5 mt-2'>
            {description}
          </p>
        )}
      </div>
      {isOpen ? (
        <span
          className='material-symbols-outlined cursor-pointer'
          onClick={() => callback()}
        >
          expand_less
        </span>
      ) : (
        <span
          className='material-symbols-outlined cursor-pointer'
          onClick={() => callback()}
        >
          expand_more
        </span>
      )}
    </div>
  );
};

export default Question;
