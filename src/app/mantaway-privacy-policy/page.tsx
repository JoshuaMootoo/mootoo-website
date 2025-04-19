// app/privacy-policy/page.tsx
import React from 'react';
import Head from 'next/head';

export const metadata = {
  title: 'Privacy Policy – Mootoo Portfolio',
  description: 'Our Privacy Policy for Joshua Mootoo’s portfolio and apps',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: 1.6, color: '#595959' }}>
        <h1 style={{ fontSize: '26px', color: '#000' }}>Privacy Policy</h1>
        <p><em>Last updated January 03, 2024</em></p>

        <p>
          This privacy notice for Joshua Mootoo (<strong>we</strong>, <strong>us</strong>, or <strong>our</strong>)
          describes how and why we might collect, store, use, and/or share (<em>process</em>) your information
          when you use our services (<em>Services</em>), such as when you:
        </p>
        <ul>
          <li>Download and use our mobile application (Mantaway), or any other application of ours that links to this privacy notice</li>
          <li>Engage with us in other related ways, including any sales, marketing, or events</li>
        </ul>
        <p>
          <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy
          rights and choices. If you do not agree with our policies and practices, please do not use our Services.
          If you still have any questions or concerns, please contact us at{' '}
          <a href="mailto:joshua@mootoo.uk" style={{ color: '#3030F1' }}>joshua@mootoo.uk</a>.
        </p>

        <h2 style={{ fontSize: '19px', color: '#000' }}>Summary of Key Points</h2>
        <p>
          This summary provides key points from our privacy notice, but you can find out more details about any
          of these topics by scrolling below.
        </p>
        <ul style={{ listStyleType: 'square' }}>
          <li>What personal information do we process?</li>
          <li>Do we process any sensitive personal information?</li>
          <li>Do we receive any information from third parties?</li>
          <li>How do we process your information?</li>
          <li>In what situations and with which parties do we share personal information?</li>
          <li>How do we keep your information safe?</li>
          <li>What are your rights?</li>
          <li>How do you exercise your rights?</li>
        </ul>

        <h2 style={{ fontSize: '19px', color: '#000' }}>Table of Contents</h2>
        <ol>
          <li><a href="#collect">WHAT INFORMATION DO WE COLLECT?</a></li>
          <li><a href="#process">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
          <li><a href="#legal-bases">WHAT LEGAL BASES DO WE RELY ON?</a></li>
          <li><a href="#share">WHEN AND WITH WHOM DO WE SHARE YOUR INFORMATION?</a></li>
          <li><a href="#retain">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
          <li><a href="#safe">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
          <li><a href="#rights">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
          <li><a href="#dnt">CONTROLS FOR DO‑NOT‑TRACK FEATURES</a></li>
          <li><a href="#updates">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
          <li><a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
          <li><a href="#access">HOW CAN YOU REVIEW, UPDATE, OR DELETE YOUR DATA?</a></li>
        </ol>

        <h3 id="collect" style={{ fontSize: '17px', color: '#000' }}>1. WHAT INFORMATION DO WE COLLECT?</h3>
        <p><strong>Personal information you disclose to us</strong></p>
        <p><em>In Short:</em> We collect personal information that you provide to us.</p>
        <p>
          We collect personal information that you voluntarily provide to us when you express an interest in
          obtaining information about us or our products and services, when you participate in activities on the
          Services, or otherwise when you contact us.
        </p>
        <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>

        <h3 id="process" style={{ fontSize: '17px', color: '#000' }}>2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
        <p><em>In Short:</em> We process your information to provide, improve, and administer our Services, communicate
           with you, for security and fraud prevention, and to comply with law.</p>
        <p>We process your personal information for a variety of reasons, depending on how you interact with
           our Services, including:</p>
        <ul style={{ listStyleType: 'circle' }}>
          <li>
            <strong>To save or protect an individual's vital interest.</strong> We may process your information
            when necessary to save or protect an individual’s vital interest, such as to prevent harm.
          </li>
        </ul>

        <h3 id="legal-bases" style={{ fontSize: '17px', color: '#000' }}>3. WHAT LEGAL BASES DO WE RELY ON?</h3>
        <p><em>In Short:</em> We only process your personal information when we have a valid legal reason to do so.</p>
        <p>Under GDPR and UK GDPR, we may rely on:</p>
        <ul style={{ listStyleType: 'circle' }}>
          <li>
            <strong>Consent.</strong> You can withdraw at any time. Learn more below.
          </li>
          <li>
            <strong>Legal Obligations.</strong> Compliance with laws or regulatory requests.
          </li>
          <li>
            <strong>Vital Interests.</strong> Protecting someone’s safety.
          </li>
        </ul>

        <h3 id="share" style={{ fontSize: '17px', color: '#000' }}>4. WHEN AND WITH WHOM DO WE SHARE YOUR INFORMATION?</h3>
        <p><em>In Short:</em> We may share information in specific situations described below.</p>
        <ul style={{ listStyleType: 'circle' }}>
          <li>
            <strong>Business Transfers.</strong> During mergers, acquisitions, or asset sales.
          </li>
        </ul>

        <h3 id="retain" style={{ fontSize: '17px', color: '#000' }}>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
        <p><em>In Short:</em> We keep your information as long as necessary to fulfill our legal and business obligations.</p>
        <p>
          When there’s no longer a need, we delete or anonymize it, or securely archive it if deletion isn’t possible.
        </p>

        <h3 id="safe" style={{ fontSize: '17px', color: '#000' }}>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
        <p><em>In Short:</em> We implement technical and organizational measures to protect your data, but no system is 100% secure.</p>

        <h3 id="rights" style={{ fontSize: '17px', color: '#000' }}>7. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
        <p>
          In some regions (EEA, UK, Switzerland), you have rights to access, correct, delete, port, or object to
          processing of your personal data. You can learn how to exercise those rights in Section 10.
        </p>

        <h3 id="dnt" style={{ fontSize: '17px', color: '#000' }}>8. CONTROLS FOR DO‑NOT‑TRACK FEATURES</h3>
        <p>
          We do not currently respond to browser DNT signals. If standards change, we’ll update this policy.
        </p>

        <h3 id="updates" style={{ fontSize: '17px', color: '#000' }}>9. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
        <p>
          Yes. We may revise this notice and will indicate the “Last updated” date above. You’re encouraged to
          review it periodically.
        </p>

        <h3 id="contact" style={{ fontSize: '17px', color: '#000' }}>10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
        <p>
          Email us at <a href="mailto:joshua@mootoo.uk" style={{ color: '#3030F1' }}>joshua@mootoo.uk</a> or write to:
        </p>
        <address>
          Joshua Mootoo<br />
          17 Lammas Green<br />
          London SE26 6LT<br />
          United Kingdom
        </address>

        <h3 id="access" style={{ fontSize: '17px', color: '#000' }}>
          11. HOW CAN YOU REVIEW, UPDATE, OR DELETE YOUR DATA?
        </h3>
        <p>
          You have the right to request access to, correction of, or deletion of your personal information.
          To do so, please submit a data subject access request.
        </p>

        <footer style={{ marginTop: '2rem', fontSize: '14px', color: '#595959' }}>
          This privacy policy was created using Termly’s&nbsp;
          <a href="https://termly.io/products/privacy-policy-generator/" target="_blank" rel="noopener noreferrer" style={{ color: '#3030F1' }}>
            Privacy Policy Generator
          </a>.
        </footer>
      </main>
    </>
  );
}
