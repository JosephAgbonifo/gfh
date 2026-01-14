import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section style={styles.section}>
      <header style={styles.header}>
        <h1 style={styles.title}>Get In Touch With Us</h1>
        <p style={styles.subtitle}>
          We love to hear from you. Our team is always ready to chat.
        </p>
      </header>

      <div style={styles.container}>
        {/* LEFT */}
        <div style={styles.left}>
          <div style={styles.block}>
            <h3 style={styles.blockTitle}>Chat us</h3>
            <p style={styles.text}>Speak to our friendly team via chat</p>
            <strong>info@fintechnng.org</strong>
          </div>

          <div style={styles.block}>
            <h3 style={styles.blockTitle}>Phone</h3>
            <p style={styles.text}>Mon – Fri (8am – 8pm)</p>
            <strong>+234 903 000 3013</strong>
          </div>

          <div style={styles.block}>
            <h3 style={styles.blockTitle}>Visit Us</h3>
            <p style={styles.text}>
              48, Awolowo Road, Falomo, Ikoyi, Lagos State, Nigeria
            </p>
          </div>

          <div style={styles.block}>
            <h3 style={styles.blockTitle}>Follow us on social media</h3>
            <div style={styles.socials}>
              <span>LinkedIn</span>
              <span>Instagram</span>
              <span>X</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <form style={styles.form}>
          <label>
            First Name
            <input type="text" style={styles.input} />
          </label>

          <label>
            Phone Number
            <input type="tel" style={styles.input} />
          </label>

          <label>
            Email
            <input type="email" style={styles.input} />
          </label>

          <label>
            Subject
            <input type="text" style={styles.input} />
          </label>

          <label>
            Message
            <textarea rows={5} style={styles.textarea} />
          </label>

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

/* ---------------- STYLES ---------------- */

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "4rem 1.5rem",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "Inter, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "2.5rem",
    color: "#1f3c88",
    marginBottom: "0.5rem",
  },
  subtitle: {
    color: "#555",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  block: {
    lineHeight: 1.6,
  },
  blockTitle: {
    fontSize: "1.2rem",
    color: "#1f3c88",
    marginBottom: "0.3rem",
  },
  text: {
    color: "#666",
  },
  socials: {
    display: "flex",
    gap: "1rem",
    fontWeight: 500,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    marginTop: "0.3rem",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  textarea: {
    width: "100%",
    padding: "0.75rem",
    marginTop: "0.3rem",
    borderRadius: "8px",
    border: "1px solid #ddd",
    resize: "vertical",
  },
  button: {
    marginTop: "1rem",
    padding: "0.9rem",
    borderRadius: "10px",
    border: "none",
    background: "#1f3c88",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
