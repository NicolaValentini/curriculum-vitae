import { Layout, Projects as ProjectsList, Text } from '@/components';

export default function Projects() {
  return (
    <Layout.Main>
      <Layout.Section>
        <Text.EntryTitle
          path='titles.projects'
          spaced
          semibold
          animationClassName='min-h-[16vh]'
        />

        <ProjectsList />
      </Layout.Section>
    </Layout.Main>
  );
}
