import { clsx } from 'clsx';

import {
  Contacts,
  DownloadResume,
  Image,
  Layout,
  Link,
  Text,
} from '@/components';

const ABOUT_ME_PATHS = ['aboutMe.1', 'aboutMe.2', 'aboutMe.3', 'aboutMe.4'];

export default function Home() {
  return (
    <>
      <div className='min-h-screen overflow-hidden'>
        <div
          className={clsx(
            'absolute top-0 md:right-0',
            'h-7/10 w-full md:h-full md:w-7/10',
            'animate-cross-border-bottom md:animate-cross-border-left',
          )}
        >
          <Image alt='me.webp' />
        </div>

        <div
          className={clsx(
            'absolute bottom-0 px-8',
            'h-2/5 md:h-full md:w-2/3 lg:w-1/2',
          )}
        >
          <Layout.List
            className={clsx(
              'w-fit h-full',
              'justify-center justify-self-center-safe',
            )}
          >
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
          </Layout.List>
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
