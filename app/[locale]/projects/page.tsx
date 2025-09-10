const section = 'h-screen text-center content-center';

export default function Projects() {
  return (
    <>
      <main>
        <section className={section}>
          <p className='font-semibold text-xl textShadow'>Projects</p>
        </section>

        <section className={section}>
          <h1>Titolo Secondario</h1>
          <p>Testo secondario...</p>
        </section>

        <section className={section}>
          <h1>Titolo Terziario</h1>
          <p>Testo terziario...</p>
        </section>
      </main>
    </>
  );
}
