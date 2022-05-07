import type { NextPage } from 'next';
import Image from 'next/image';

const TextLogo: NextPage = () => {
  return (
    <>
      <Image src="/book.png" alt="Bookshelf" width={100} height={100} />
      <div className="items-center text-4xl font-bold text-white">Bookshelf</div>
    </>
  );
};

export default TextLogo;
