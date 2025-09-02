import { Contacts, DownloadResume, Link, Text } from '@/components';

const ABOUT_ME_PATHS = ['aboutMe.1', 'aboutMe.2', 'aboutMe.3', 'aboutMe.4'];

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
              <Text.Entry
                path='nameSurname'
                spaced
                semibold
                className='text-3xl sm:text-4xl xl:text-5xl'
              />

              <Text.Entry
                path='hero.job'
                spaced
                semibold
                secondary
                className='text-xl sm:text-2xl xl:text-3xl'
              />

              <Text.Entry
                path='hero.slogan'
                opaque
                spaced
                className='w-fit text-base sm:text-lg xl:text-xl'
              />

              <DownloadResume.Entry />
            </div>
          </div>
        </div>
      </section>

      <section className='min-h-[64vh] overflow-hidden px-8 sm:px-16 md:px-0'>
        <div className='w-full h-full grid grid-rows-[16vh_16vh_minmax(32vh,min-content)] md:grid-cols-[1fr_2fr_2fr_1fr]'>
          <Text.Entry
            path='titles.aboutMe'
            spaced
            semibold
            className='text-xl sm:text-2xl xl:text-3xl'
            animationClassName='row-start-2 md:col-start-2 m-[0_auto]'
          />

          <div className='row-start-3 md:col-start-3'>
            <div className='flex flex-col gap-3 md:gap-5 m-auto'>
              <Text.EntryList
                paths={ABOUT_ME_PATHS}
                opaque
                spaced
                entry='right'
              />

              <Link.Entry
                button
                href='/who-i-am'
                bold
                path='titles.aboutMe'
                contentClassName='text-xs md:text-sm xl:text-base'
                entry='right'
                animationClassName='self-center'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='min-h-[64vh] overflow-hidden px-8 sm:px-16 md:px-0'>
        <div className='w-full h-full grid grid-rows-[16vh_16vh_minmax(32vh,min-content)] md:grid-cols-[1fr_2fr_1fr]'>
          <Text.Entry
            path='titles.contacts'
            spaced
            semibold
            className='text-xl sm:text-2xl xl:text-3xl'
            animationClassName='row-start-2 md:col-start-2 m-[0_auto]'
          />

          <div className='row-start-3 md:col-start-2'>
            <Contacts />
          </div>
        </div>
      </section>
    </main>
  );
}
