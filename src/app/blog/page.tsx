// src/app/blog/page.tsx
import React from 'react';

export const metadata = {
  title: 'Blog – Mootoo Portfolio',
  description: 'My game development thoughts and updates',
};

export default function BlogPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
      <h1>Blog</h1>
      <p>Welcome to my blog! Here I’ll share updates on my game development projects, tutorials, and more.</p>
      <p>Stay tuned for the first post!</p>
    </main>
  );
}
