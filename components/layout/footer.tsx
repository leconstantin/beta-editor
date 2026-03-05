export default function Footer() {
  return (
    <div className="mt-auto flex flex-col justify-center gap-5 px-4 py-6 text-muted-foreground">
      <p>
        Built by{" "}
        <a
          className="text-foreground underline"
          href="https://github.com/leconstantin"
          rel="noopener noreferrer"
          target="_blank"
        >
          Leo Constantin
        </a>
      </p>
      <p>
        Source code available on{" "}
        <a
          className="text-foreground underline"
          href="https://github.com/leconstantin/beta-editor"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}
