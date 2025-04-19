import React from "react";

const CV: React.FC = () => {
    return (
        <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: 1.6}}>
            <h1>Joshua Mootoo - Curriculum Vitae</h1>

            {/* Contact Information */}
            <section style={{ marginBottom: '1.5rem'}}>
                <h2>Contact Information</h2>
                <ul>
                    <li><strong>Mobile:</strong> +44 7535 326517</li>
                    <li><strong>Email:</strong> <a href="mailto:joshuamoo2+work@gmail.com">joshuamoo2+work@gmail.com</a></li>
                    <li><strong>LinkedIn:</strong><a href="https://www.linkedin.com/in/joshuamoo2/" target="_blank" rel="noopener noreferrer"></a>https://www.linkedin.com/in/joshuamoo2/</li>
                    <li><strong>GitHub:</strong><a href="https://github.com/JoshuaMootoo" target="_blank" rel="noopener noreferrer"></a>https://github.com/JoshuaMootoo</li>
                    <li><strong>YouTube:</strong><a href="https://www.youtube.com/PixelMake" target="_blank" rel="noopener noreferrer"></a>https://www.youtube.com/PixelMake</li>
                </ul>
            </section>

            {/* About Section */}
            <section style={{marginBottom: '1.5rem'}}>
                <h2>About</h2>
                <p>I'm a recent Computer Games Programming graduate from Kingston University with a passion for creating immersive, interactive experiences. I blend technical expertise in Unity and C# with a deep love for gaming—whether it's crafting innovative mechanics for indie titles or drawing inspiration from iconic series like The Legend of Zelda, Halo and Final Fantasy. I thrive in collaborative environments and am excited to bring creativity and technical precision to my next project in the gaming industry.</p>
            </section>

            {/* Education Section */}
            <section style={{marginBottom: '1.5rem'}}>
                <h2>Education</h2>
                <p>
                    <strong>Kingston University, London</strong> (September 22019 - July 2024)<br />
                    BSc (Hons) Computer Games Programming
                </p>
                <p>
                    <strong>St. Joseph's College, Beulah Hill</strong> (September 2008 - July 2015) <br />
                    A-Level (2013 - 2015) - Engineering, BTEC Level 3<br />
                    GCSE (2008 - 2013) - Mathematics, English, IT, Art, Among others
                </p>
            </section>

            {/* Skills Section */}
            <section>
                <h2>Skills</h2>
                <p>
                    Unity (2D/3D games, UI creation, physics and animation programming, C# scripting). Experienced in game asset creation, level design, audio mixer programming, and version control with Git.
                    Adobe Suite (Photoshop, Illustrator, After Effects, Premiere Pro, Substance Painter, Substance Design, Audition)
                </p>
            </section>

            {/* Projects Section */}
            <section>
                <h2>Projects</h2>
                <p>
                    I have worked on several projects including:
                    <ul>
                        <li><strong>Mantaway:</strong> A group project where I was responsible for UI programming, level design, progression storing, and publishing to the Google Play Store.</li>
                        <li><strong>Internal Game Jam at Kingston University:</strong> Developed a 2D endless runner as the sole programmer, incorporating player movement, infinite scrolling backgrounds, and fuel gauge mechanics.</li>
                        <li><strong>Pixel Make YouTube Channel:</strong> I run a channel with video tutorials on game development and have created Unity game assets for a well-known asset store.</li>
                    </ul>
                </p>
            </section>
            
            {/* Download CV Button */}
            <section>
                <a 
                    href="/files/CV - Joshua Mootoo.pdf" 
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
                    }}>
                        Download My CV (PDF)
                    </a>
            </section>
        </main>
    )
}