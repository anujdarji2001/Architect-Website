export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚀 Coming Soon</h1>
      <p style={{ fontSize: "1.25rem" }}>
        We’re working hard to launch our website. Stay tuned!
      </p>
    </div>
  );
}
