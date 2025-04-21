import React from "react";

export default function CV() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
      <h1>Joshua Mootoo – Curriculum Vitae</h1>

      {/* Contact Information */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h2>Contact Information</h2>
        <ul>
          <li><strong>Mobile:</strong> +44 7535 326517</li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:joshuamoo2+work@gmail.com">
              joshuamoo2+work@gmail.com
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/joshuamoo2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/joshuamoo2/
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/JoshuaMootoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/JoshuaMootoo
            </a>
          </li>
          <li>
            <strong>YouTube:</strong>{" "}
            <a
              href="https://www.youtube.com/PixelMake"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.youtube.com/PixelMake
            </a>
          </li>
        </ul>
      </section>

      {/* About Section */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h2>About</h2>
        <p>
          I’m a recent Computer Games Programming graduate from Kingston
          University with a passion for creating immersive, interactive
          experiences. I blend technical expertise in Unity and C# with a deep
          love for gaming—whether it’s crafting innovative mechanics for indie
          titles or drawing inspiration from iconic series like The Legend of
          Zelda, Halo, and Final Fantasy. I thrive in collaborative
          environments and am excited to bring creativity and technical
          precision to my next project in the gaming industry.
        </p>
      </section>

      {/* Education Section */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h2>Education</h2>
        <p>
          <strong>Kingston University, London</strong> (September 2019 – July 2024)
          <br />
          BSc (Hons) Computer Games Programming
        </p>
        <p>
          <strong>St. Joseph&apos;s College, Beulah Hill</strong> (September 2008 – July 2015)
          <br />
          A‑Level (2013 – 2015): Engineering, BTEC Level 3<br />
          GCSE (2008 – 2013): Mathematics, English, IT, Art, among others
        </p>
      </section>

      {/* Skills Section */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h2>Skills</h2>
        <p>
          Unity (2D/3D games, UI creation, physics & animation programming,
          C# scripting), game asset creation, level design, audio mixer
          programming, version control with Git.  
          Adobe Suite (Photoshop, Illustrator, After Effects, Premiere Pro,
          Substance Painter, Substance Designer, Audition).
        </p>
      </section>

      {/* Projects Section */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Mantaway:</strong> UI programming, level design, progression
            storing, and publishing to the Google Play Store.
          </li>
          <li>
            <strong>Internal Game Jam at Kingston University:</strong> Sole
            programmer on a 2D endless runner (player movement, infinite
            scrolling backgrounds, fuel gauge mechanics).
          </li>
          <li>
            <strong>Pixel Make YouTube Channel:</strong> Video tutorials on
            Unity game development and custom asset creation for the DevAssets
            store.
          </li>
        </ul>
      </section>

      {/* Download CV Button */}
      <section>
        <a
          href="/cv.pdf"
          download
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            border: '1px solid #333',
            borderRadius: '4px',
            backgroundColor: '#f0f0f0',
            textDecoration: 'none',
            color: '#333'
          }}
        >
          Download My CV (PDF)
        </a>
      </section>
    </main>
  );
}
