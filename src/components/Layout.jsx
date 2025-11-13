function Layout({ children, titulo }) {
  return (
    <section
        aria-labelledby="main-section-title"
        className="w-full max-w-7xl text-center"
    >
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
  );
}

export default Layout;