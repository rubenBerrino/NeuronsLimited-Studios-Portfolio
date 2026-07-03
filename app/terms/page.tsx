import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for the NeuronsLimited Studios website, portfolio, games, and related services.",
};

export default function TermsPage() {
  return (
    <section className="policy-content">
      <h1>Terms of Service</h1>

      <p>
        <strong>Last Updated:</strong> July 3, 2026
      </p>

      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of the NeuronsLimited Studios website, portfolio, published games,
        and related online content or services that link to these Terms
        (collectively, the &ldquo;Services&rdquo;). By accessing or using the
        Services, you agree to be bound by these Terms.
      </p>

      <p>
        If you do not agree with these Terms, you should not use the Services.
      </p>

      <h2>1. Who We Are</h2>

      <p>
        NeuronsLimited Studios is an independent game development studio. Our
        website is intended to present our projects, share information about our
        games, and provide access to community or third-party platforms related
        to our work.
      </p>

      <h2>2. Eligibility and Acceptable Use</h2>

      <p>
        You agree to use the Services only for lawful purposes and in a manner
        that does not violate applicable laws, regulations, or the rights of
        others.
      </p>

      <p>You agree not to:</p>

      <ul>
        <li>Use the Services for fraudulent, abusive, or harmful purposes.</li>
        <li>
          Interfere with, disrupt, or attempt to gain unauthorized access to
          the website, servers, accounts, or connected services.
        </li>
        <li>
          Copy, scrape, reproduce, or redistribute protected content except as
          permitted by applicable law or by our prior written permission.
        </li>
        <li>
          Use our name, logos, branding, screenshots, or assets in a misleading
          way that implies sponsorship, endorsement, or affiliation.
        </li>
      </ul>

      <h2>3. Informational Content</h2>

      <p>
        The website and portfolio are provided primarily for informational and
        promotional purposes. We try to keep content accurate and up to date,
        but we do not guarantee that all descriptions, screenshots, project
        details, release plans, feature lists, or availability information will
        always be complete, current, or error-free.
      </p>

      <p>
        Any future plans, in-development features, or release-related
        statements are provided for general information only and may change at
        any time.
      </p>

      <h2>4. Intellectual Property</h2>

      <p>
        Unless otherwise stated, the Services and their contents, including
        text, graphics, logos, visual elements, game names, code, artwork,
        audio, videos, screenshots, and other materials, are owned by or
        licensed to NeuronsLimited Studios and are protected by applicable
        intellectual property laws.
      </p>

      <p>
        These Terms do not transfer any ownership rights to you. You may view
        the website and use the Services for personal, non-commercial purposes,
        subject to these Terms and any additional terms that may apply to a
        specific game, platform, or service.
      </p>

      <h2>5. Games and Third-Party Platforms</h2>

      <p>
        Some of our games or related features may be distributed or operated
        through third-party platforms or services such as Google Play, Epic
        Online Services, Discord, YouTube, or other storefronts and community
        tools.
      </p>

      <p>
        Your use of those third-party services is governed by their own terms,
        policies, and technical requirements. We are not responsible for the
        availability, content, security, or practices of third-party services.
      </p>

      <p>
        If a specific game, app store listing, beta, event, or online feature
        includes separate terms, rules, or usage conditions, those additional
        terms will also apply.
      </p>

      <h2>6. User Communications</h2>

      <p>
        If you contact us by email, Discord, or other public or private
        channels, you are responsible for the content you choose to send. You
        should not submit unlawful material, confidential information you do not
        have the right to share, or content that infringes the rights of others.
      </p>

      <p>
        If you send feedback, suggestions, bug reports, or ideas regarding our
        Services, you agree that we may review and use them without any
        obligation to compensate you, unless otherwise required by law or agreed
        in writing.
      </p>

      <h2>7. Availability and Changes</h2>

      <p>
        We may modify, suspend, restrict, or discontinue any part of the
        Services at any time, with or without notice, including website pages,
        game features, online functionality, community links, or project
        information.
      </p>

      <p>
        We are not liable if any part of the Services becomes unavailable,
        delayed, or removed.
      </p>

      <h2>8. Disclaimer of Warranties</h2>

      <p>
        To the maximum extent permitted by applicable law, the Services are
        provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis,
        without warranties of any kind, whether express or implied.
      </p>

      <p>
        We do not warrant that the Services will always be uninterrupted,
        secure, accurate, compatible with every device, or free from errors,
        bugs, or harmful components.
      </p>

      <h2>9. Limitation of Liability</h2>

      <p>
        To the maximum extent permitted by applicable law, NeuronsLimited
        Studios shall not be liable for any indirect, incidental, special,
        consequential, or punitive damages, or for any loss of data, profits,
        goodwill, business opportunities, or service availability arising out of
        or related to your use of, or inability to use, the Services.
      </p>

      <p>
        Nothing in these Terms excludes or limits liability that cannot be
        excluded under applicable law.
      </p>

      <h2>10. Termination</h2>

      <p>
        We may suspend or restrict access to the Services if we reasonably
        believe that you have violated these Terms, applicable law, or the
        safety or integrity of our Services or community spaces.
      </p>

      <h2>11. Privacy</h2>

      <p>
        Your use of the Services is also subject to our Privacy &amp; Cookie
        Policy, which explains how information may be collected and used when
        you access our website or games.
      </p>

      <p>
        <a href="/policy">Read the Privacy &amp; Cookie Policy</a>
      </p>

      <h2>12. Changes to These Terms</h2>

      <p>
        We may update these Terms from time to time. Any updated version will
        be posted on this page together with a revised &ldquo;Last
        Updated&rdquo; date. Your continued use of the Services after changes
        take effect means you accept the revised Terms.
      </p>

      <h2>13. Contact Us</h2>

      <p>
        If you have questions about these Terms, you may contact us at:
      </p>

      <p>
        <a href="mailto:neuronslimitedstudios@gmail.com">
          neuronslimitedstudios@gmail.com
        </a>
      </p>

      <p>You may also contact us through our official Discord community:</p>

      <p>
        <a
          href="https://discord.gg/B9P6v8KmRM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official Discord Server
        </a>
      </p>
    </section>
  );
}
