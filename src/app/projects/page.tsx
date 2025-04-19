// src/app/projects/page.tsx
import React from 'react';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  repoUrl?: string;         // GitHub link
  externalDemoUrl?: string; // Play Store or other live link
}

const projects: Project[] = [
  {
    title: 'Mantaway',
    description:
      'Help Ray the manta ray rescue his fish friends. I did UI programming, level design, progression storage, and published this on the Google Play Store.',
    externalDemoUrl:
      'https://play.google.com/store/apps/details?id=com.Group1.MobileGame3rdYear',
    repoUrl: 'https://github.com/JoshuaMootoo/Mantaway',
  },
  {
    title: 'Back to the Future Endless Runner',
    description:
      'A 2D top‑down endless runner built for our internal Game Jam. Features infinite scrolling background, fuel gauge mechanics, and obstacle spawning.',
    repoUrl: 'https://github.com/JoshuaMootoo/Kington-Uni-Game-Jam-May-21',
  },
  {
    title: 'Fantasy Rune Weapons Asset Pack',
    description:
      'A fantasy rune weapons asset pack I created for DevAssets, complete with high‑res textures and Unity prefabs.',
    externalDemoUrl: 'https://devassets.com/assets/fantasy-rune-weapons/',
  },
  {
    title: 'Fantasy Frost Environment Asset Pack',
    description:
      'A fantasy frost environment asset pack I created for DevAssets, featuring modular terrain pieces and particle effects.',
    externalDemoUrl: 'https://devassets.com/assets/fantasy-frost-environment/',
  },
];

export default function ProjectsPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>My Game Projects</h1>
      <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1rem' }}>
        {projects.map((project, idx) => (
          <section
            key={idx}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
            }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.externalDemoUrl && (
                <Link
                  href={project.externalDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#e1f5e1',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    color: '#006621',
                  }}
                >
                  View
                </Link>
              )}

              {project.repoUrl && (
                <Link
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#e8f0fe',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    color: '#1a0dab',
                  }}
                >
                  Source
                </Link>
              )}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
