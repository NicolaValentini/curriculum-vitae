import {
  Education,
  EntryAnimation,
  Experiences,
  Link,
  Skills,
  Text,
  Trainings,
} from '@/components';

export default function Resume() {
  return (
    <main className='mt-[16vh]'>
      <section className='min-h-screen overflow-hidden px-8 sm:px-16 lg:px-0 flex flex-col items-center gap-[16vh]'>
        <div className='w-full lg:w-2/3 xl:w-1/2'>
          <Text.EntryTitle
            path='titles.experience'
            spaced
            semibold
            animationClassName='min-h-[16vh]'
          />

          <Experiences />
        </div>

        <div className='w-full lg:w-2/3 xl:w-1/2'>
          <Text.EntryTitle
            path='titles.training'
            spaced
            semibold
            className='text-center'
            animationClassName='min-h-[16vh]'
          />

          <Trainings />
        </div>

        <div className='w-full lg:w-2/3 xl:w-1/2'>
          <Text.EntryTitle
            path='titles.education'
            spaced
            semibold
            entry='right'
            className='text-end'
            animationClassName='min-h-[16vh]'
          />

          <Education />
        </div>

        <div className='w-full lg:w-2/3 xl:w-1/2'>
          <Text.EntryTitle
            path='titles.skills'
            spaced
            semibold
            entry='right'
            className='text-center'
            animationClassName='min-h-[16vh]'
          />

          <Skills />
        </div>

        <div className='w-full lg:w-2/3 xl:w-1/2'>
          <Text.EntryTitle
            path='titles.projects'
            spaced
            semibold
            animationClassName='min-h-[16vh]'
          />

          <div className='grid grid-cols-1 lg:grid-cols-3'>
            <EntryAnimation className='h-[32vh] aspect-square bg-[url("/images/next-template.png")] bg-cover' />

            <EntryAnimation className='h-[32vh] aspect-square bg-[url("/images/cv.jpg")] bg-cover' />

            <div className='flex flex-col gap-3 md:gap-5 m-auto'>
              <Text.EntryParagraph path='continue' spaced opaque />

              <Link.Entry
                button
                href='/projects'
                bold
                path='titles.projects'
                animationClassName='place-self-center'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
