import { Education, Experiences, Skills, Text, Trainings } from '@/components';

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
      </section>
    </main>
  );
}
