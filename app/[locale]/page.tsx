import {
  DownloadResumeWithEntryAnimation,
  TextWithEntryAnimation,
} from '@/components';

export default function Home() {
  return (
    <main>
      <section className='h-screen overflow-hidden'>
        <div className='w-full h-full grid md:grid-cols-[2fr_1fr] lg:grid-cols-2'>
          <div className='row-start-1 col-start-1 md:col-end-3 h-7/10 md:h-full w-full md:w-7/10 md:justify-self-end'>
            <div className="w-full h-full bg-[url('/images/me.jpg')] bg-cover bg-center animate-cross-border-bottom md:animate-cross-border-left" />
          </div>

          <div className='row-start-1 col-start-1 self-end h-2/5 md:h-full px-8 md:px-0'>
            <div className='w-fit h-full flex flex-col justify-center gap-3 md:gap-5 m-[0_auto]'>
              <TextWithEntryAnimation
                path='nameSurname'
                spaced
                semibold
                className='text-3xl sm:text-4xl xl:text-5xl'
              />

              <TextWithEntryAnimation
                path='hero.job'
                spaced
                semibold
                secondary
                className='text-xl sm:text-2xl xl:text-3xl'
              />

              <TextWithEntryAnimation
                path='hero.slogan'
                opaque
                spaced
                className='w-fit text-base sm:text-lg xl:text-xl'
              />

              <DownloadResumeWithEntryAnimation />
            </div>
          </div>
        </div>
      </section>

      <section className='min-h-[64vh] overflow-hidden px-8 sm:px-16 md:px-0'>
        <div className='w-full h-full grid grid-rows-[16vh_16vh_minmax(32vh,min-content)] md:grid-cols-[1fr_2fr_2fr_1fr]'>
          <TextWithEntryAnimation
            path='titles.aboutMe'
            spaced
            semibold
            className='text-xl sm:text-2xl xl:text-3xl'
            wrapperClassName='row-start-2 md:col-start-2 m-[0_auto]'
          />

          <div className='row-start-3 md:col-start-3'>
            <div className='flex flex-col gap-3 md:gap-5 m-auto'>
              <TextWithEntryAnimation
                path='aboutMe.1'
                opaque
                spaced
                entry='right'
                className='text-center text-base sm:text-lg xl:text-xl'
              />

              <TextWithEntryAnimation
                path='aboutMe.2'
                opaque
                spaced
                entry='right'
                className='text-center text-base sm:text-lg xl:text-xl'
              />

              <TextWithEntryAnimation
                path='aboutMe.3'
                opaque
                spaced
                entry='right'
                className='text-center text-base sm:text-lg xl:text-xl'
              />

              <TextWithEntryAnimation
                path='aboutMe.4'
                opaque
                spaced
                entry='right'
                className='text-center text-base sm:text-lg xl:text-xl'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='min-h-[64vh] overflow-hidden px-8 sm:px-16 md:px-0'>
        <div className='w-full h-full grid grid-rows-[16vh_16vh_minmax(32vh,min-content)] md:grid-cols-[1fr_auto_1fr]'>
          <TextWithEntryAnimation
            path='titles.contacts'
            spaced
            semibold
            className='text-xl sm:text-2xl xl:text-3xl'
            wrapperClassName='row-start-2 md:col-start-2 m-[0_auto]'
          />

          <div className='row-start-3 md:col-start-2 m-auto grid grid-cols-[1fr_2fr] md:grid-cols-2 w-full'>
            <TextWithEntryAnimation
              path='contacts.name'
              opaque
              spaced
              className='p-2.5 md:p-4 text-base sm:text-lg xl:text-xl'
            />

            <TextWithEntryAnimation
              path='nameSurname'
              opaque
              spaced
              entry='right'
              className='p-2.5 md:p-4 text-right text-base sm:text-lg xl:text-xl'
            />

            <div className='border-t border-gray-300'>
              <TextWithEntryAnimation
                path='contacts.email'
                opaque
                spaced
                className='p-2.5 md:p-4 text-base sm:text-lg xl:text-xl'
              />
            </div>

            <div className='border-t border-gray-300'>
              <TextWithEntryAnimation
                path='links.email'
                opaque
                spaced
                entry='right'
                className='p-2.5 md:p-4 text-right text-base sm:text-lg xl:text-xl'
              />
            </div>

            <div className='border-t border-gray-300'>
              <TextWithEntryAnimation
                path='contacts.phone'
                opaque
                spaced
                className='p-2.5 md:p-4 text-base sm:text-lg xl:text-xl'
              />
            </div>

            <div className='border-t border-gray-300'>
              <TextWithEntryAnimation
                path='links.phone'
                opaque
                spaced
                entry='right'
                className='p-2.5 md:p-4 text-right text-base sm:text-lg xl:text-xl'
              />
            </div>

            <div className='border-t border-gray-300'>
              <TextWithEntryAnimation
                path='contacts.linkedin'
                opaque
                spaced
                className='p-2.5 md:p-4 text-base sm:text-lg xl:text-xl'
              />
            </div>

            <div className='border-t border-gray-300'>
              <TextWithEntryAnimation
                path='links.linkedin'
                opaque
                spaced
                entry='right'
                className='p-2.5 md:p-4 text-right text-base sm:text-lg xl:text-xl'
              />
            </div>

            <div className='border-t border-gray-300'>
              <TextWithEntryAnimation
                path='contacts.address'
                opaque
                spaced
                className='p-2.5 md:p-4 text-base sm:text-lg xl:text-xl'
              />
            </div>

            <div className='border-t border-gray-300'>
              <TextWithEntryAnimation
                path='links.address'
                opaque
                spaced
                entry='right'
                className='p-2.5 md:p-4 text-right text-base sm:text-lg xl:text-xl'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
