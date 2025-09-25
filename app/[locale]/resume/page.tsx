import {
  Education,
  Experiences,
  Image,
  Layout,
  Link,
  Skills,
  Text,
  Trainings,
} from '@/components';

export default function Resume() {
  return (
    <Layout.Main>
      <Layout.Section>
        <Text.EntryTitle
          path='titles.experience'
          spaced
          semibold
          animationClassName='min-h-[16vh]'
        />

        <Experiences />
      </Layout.Section>

      <Layout.Section>
        <Text.EntryTitle
          path='titles.training'
          spaced
          semibold
          className='text-center'
          animationClassName='min-h-[16vh]'
        />

        <Trainings />
      </Layout.Section>

      <Layout.Section>
        <Text.EntryTitle
          path='titles.education'
          spaced
          semibold
          entry='right'
          className='text-end'
          animationClassName='min-h-[16vh]'
        />

        <Education />
      </Layout.Section>

      <Layout.Section>
        <Text.EntryTitle
          path='titles.skills'
          spaced
          semibold
          entry='right'
          className='text-center'
          animationClassName='min-h-[16vh]'
        />

        <Skills />
      </Layout.Section>

      <Layout.Section>
        <Text.EntryTitle
          path='titles.projects'
          spaced
          semibold
          animationClassName='min-h-[16vh]'
        />

        <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center'>
          <Image.Entry square alt='next-template.webp' />

          <Image.Entry square alt='cv.webp' />

          <Layout.List className='w-full max-w-[32vh] h-full max-h-[32vh] aspect-square justify-center items-center'>
            <Text.EntryParagraph path='continue' spaced opaque />

            <Link.Entry
              button
              href='/projects'
              bold
              path='titles.projects'
              animationClassName='place-self-center'
            />
          </Layout.List>
        </div>
      </Layout.Section>
    </Layout.Main>
  );
}
