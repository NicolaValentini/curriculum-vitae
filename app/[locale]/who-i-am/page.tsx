import Image from 'next/image';

import { FitContainer, TextWithEntryAnimation } from '@/components';

export default function AboutPage() {
  return (
    <main>
      <section className='min-h-[64vh] overflow-hidden px-8 sm:px-16 lg:px-0'>
        <div className='w-full h-full grid grid-rows-[16vh_16vh_minmax(32vh,min-content)] lg:grid-cols-[1fr_2fr_2fr_1fr] lg:gap-6'>
          <TextWithEntryAnimation
            path='titles.whoIAm'
            spaced
            semibold
            entry='right'
            className='text-xl sm:text-2xl xl:text-3xl'
            wrapperClassName='row-start-2 lg:col-start-3 m-[0_auto]'
          />

          <div className='row-start-3 lg:row-start-2 lg:row-span-2 lg:col-start-2 hidden lg:block w-full h-full'>
            <FitContainer centered className='relative'>
              <Image
                fill
                alt='avatar'
                src='/images/me2.jpg'
                className='object-cover rounded-full aspect-square'
              />
            </FitContainer>
          </div>

          <div className='row-start-3 lg:col-start-3'>
            <div className='flex flex-col gap-3 md:gap-5 m-auto'>
              <TextWithEntryAnimation
                path='whoIAm.1'
                opaque
                spaced
                entry='right'
                className='text-center text-base sm:text-lg xl:text-xl'
              />

              <TextWithEntryAnimation
                path='whoIAm.2'
                opaque
                spaced
                entry='right'
                className='text-center text-base sm:text-lg xl:text-xl'
              />

              <TextWithEntryAnimation
                path='whoIAm.3'
                opaque
                spaced
                entry='right'
                className='text-center text-base sm:text-lg xl:text-xl'
              />

              <TextWithEntryAnimation
                path='whoIAm.4'
                opaque
                spaced
                entry='right'
                className='text-center text-base sm:text-lg xl:text-xl'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='min-h-[32vh] overflow-hidden lg:hidden px-8 sm:px-16 lg:px-0'>
        <FitContainer centered className='relative mt-[16vh]'>
          <Image
            fill
            alt='avatar'
            src='/images/me2.jpg'
            className='object-cover rounded-full aspect-square'
          />
        </FitContainer>
      </section>

      <section className='min-h-[64vh] overflow-hidden px-8 sm:px-16 lg:px-0'>
        <div className='w-full h-full grid grid-rows-[16vh_16vh_minmax(32vh,min-content)] lg:grid-cols-[1fr_2fr_1fr]'>
          <TextWithEntryAnimation
            path='titles.myHistory'
            spaced
            semibold
            className='text-xl sm:text-2xl xl:text-3xl'
            wrapperClassName='row-start-2 lg:col-start-2 m-[0_auto]'
          />

          <div className='row-start-3 lg:col-start-2 m-auto'>
            <div className='flex flex-col gap-3 md:gap-5 m-auto'>
              <TextWithEntryAnimation
                path='myHistory.1'
                opaque
                spaced
                className='text-center text-base sm:text-lg xl:text-xl'
              />

              <TextWithEntryAnimation
                path='myHistory.2'
                opaque
                spaced
                className='text-center text-base sm:text-lg xl:text-xl'
              />

              <TextWithEntryAnimation
                path='myHistory.3'
                opaque
                spaced
                className='text-center text-base sm:text-lg xl:text-xl'
              />

              <TextWithEntryAnimation
                path='myHistory.4'
                opaque
                spaced
                className='text-center text-base sm:text-lg xl:text-xl'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
