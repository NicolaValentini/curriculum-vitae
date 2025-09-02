import { Avatar, Link, Text } from '@/components';

const WHO_I_AM_PATHS = ['whoIAm.1', 'whoIAm.2', 'whoIAm.3', 'whoIAm.4'];
const MY_HISTORY_PATHS = [
  'myHistory.1',
  'myHistory.2',
  'myHistory.3',
  'myHistory.4',
  'myHistory.5',
];

export default function AboutPage() {
  return (
    <main>
      <section className='min-h-[64vh] overflow-hidden px-8 sm:px-16 lg:px-0'>
        <div className='w-full h-full grid grid-rows-[16vh_16vh_minmax(32vh,min-content)] lg:grid-cols-[1fr_2fr_2fr_1fr]'>
          <Text.Entry
            path='titles.whoIAm'
            spaced
            semibold
            entry='right'
            className='text-xl sm:text-2xl xl:text-3xl'
            animationClassName='row-start-2 lg:col-start-3 m-[0_auto]'
          />

          <Avatar.Entry animationClassName='row-start-4 lg:row-start-2 lg:row-span-2 lg:col-start-2 min-h-[32vh] mt-[16vh] lg:mt-0 lg:pr-2' />

          <div className='row-start-3 lg:col-start-3 lg:pl-2'>
            <Text.EntryList
              paths={WHO_I_AM_PATHS}
              opaque
              spaced
              entry='right'
            />
          </div>
        </div>
      </section>

      <section className='min-h-[64vh] overflow-hidden px-8 sm:px-16 lg:px-0'>
        <div className='w-full h-full grid grid-rows-[16vh_16vh_minmax(32vh,min-content)] lg:grid-cols-[1fr_2fr_1fr]'>
          <Text.Entry
            path='titles.myHistory'
            spaced
            semibold
            className='text-xl sm:text-2xl xl:text-3xl'
            animationClassName='row-start-2 lg:col-start-2 m-[0_auto]'
          />

          <div className='row-start-3 lg:col-start-2'>
            <div className='flex flex-col gap-3 md:gap-5'>
              <Text.EntryList paths={MY_HISTORY_PATHS} opaque spaced />

              <Link.Entry
                button
                href='/resume'
                bold
                path='titles.resume'
                contentClassName='text-xs md:text-sm xl:text-base'
                animationClassName='self-center'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
