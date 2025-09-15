import { Contacts, DownloadResume, Layout, Link, Text } from '@/components';

const ABOUT_ME_PATHS = ['aboutMe.1', 'aboutMe.2', 'aboutMe.3', 'aboutMe.4'];

export default function Home() {
  return (
    <>
      <div className='h-screen overflow-hidden'>
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

              <Text.EntryTitle path='hero.job' spaced semibold secondary />

              <Text.EntryParagraph
                path='hero.slogan'
                opaque
                spaced
                className='w-fit'
              />

              <DownloadResume.Entry />
            </div>
          </div>
        </div>
      </div>

      <Layout.Main>
        <Layout.Section>
          <Text.EntryTitle
            path='titles.aboutMe'
            spaced
            semibold
            animationClassName='min-h-[16vh]'
          />

          <Layout.List className='lg:w-1/2 justify-self-end'>
            <Text.EntryList
              opaque
              spaced
              entry='right'
              paths={ABOUT_ME_PATHS}
            />

            <Link.Entry
              button
              bold
              entry='right'
              href='/who-i-am'
              path='titles.aboutMe'
              animationClassName='self-center'
            />
          </Layout.List>
        </Layout.Section>

        <Layout.Section>
          <Text.EntryTitle
            path='titles.contacts'
            spaced
            semibold
            className='text-center'
            animationClassName='min-h-[16vh]'
          />

          <Contacts />
        </Layout.Section>
      </Layout.Main>
    </>
  );
}
