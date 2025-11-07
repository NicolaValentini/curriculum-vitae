import { Image, Layout, Link, Text } from '@/components';

const WHO_I_AM_PATHS = ['whoIAm.1', 'whoIAm.2', 'whoIAm.3', 'whoIAm.4'];
const MY_HISTORY_PATHS = [
  'myHistory.1',
  'myHistory.2',
  'myHistory.3',
  'myHistory.4',
  'myHistory.5',
];

export default function WhoIAmPage() {
  return (
    <Layout.Main>
      <Layout.Section>
        <Text.EntryTitle
          spaced
          semibold
          path='titles.whoIAm'
          animationClassName='min-h-[16vh]'
        />

        <Text.EntryList paths={WHO_I_AM_PATHS} opaque spaced />
      </Layout.Section>

      <Layout.Section>
        <Image.Entry square alt='avatar.webp' className='rounded-full' />
      </Layout.Section>

      <Layout.Section>
        <Text.EntryTitle
          spaced
          semibold
          entry='right'
          className='text-end'
          path='titles.myHistory'
          animationClassName='min-h-[16vh]'
        />

        <Layout.List>
          <Text.EntryList
            opaque
            spaced
            entry='right'
            paths={MY_HISTORY_PATHS}
          />

          <Link.Entry
            bold
            button
            entry='right'
            href='/resume'
            path='titles.resume'
            animationClassName='self-center'
          />
        </Layout.List>
      </Layout.Section>
    </Layout.Main>
  );
}
