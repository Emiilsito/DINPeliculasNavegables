function Layout({ children, titulo, sectionId = 'main-content' }) {
  return (
    <main
      id={sectionId}
      role="main"
      tabIndex="-1"
      className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8"
    >
      <section aria-labelledby="main-section-title" className="w-full max-w-7xl text-center">
        {titulo && (
          <h1
            id="main-section-title"
            className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]"
          >
            {titulo}
          </h1>
        )}

        {children}
      </section>
    </main>
  );
}

export default Layout;