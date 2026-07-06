import RevealWrapper from "./RevealWrapper";

interface ProjectCardProps {
  /** Project title */
  title: string;
  /** Project description */
  description: string;
  /** Status tag text (e.g. "In Development", "Released on Google Play") */
  statusLabel: string;
  /** Status type determines the tag color */
  statusType: "in-development" | "discontinued";
  /** Feature tags to display */
  features: string[];
  /** Project image path */
  image: string;
  /** Image alt text */
  imageAlt: string;
  /** Whether the image is portrait orientation (constrains width) */
  portrait?: boolean;
  /** Whether the layout is reversed (image on left, text on right) */
  reversed?: boolean;
  /** Optional download button image path (e.g. Google Play badge) */
  downloadButtonImage?: string;
  /** URL the download button links to */
  downloadButtonLink?: string;
  /** Alt text for the download button image */
  downloadButtonAlt?: string;
}

export default function ProjectCard({
  title,
  description,
  statusLabel,
  statusType,
  features,
  image,
  imageAlt,
  portrait = false,
  reversed = false,
  downloadButtonImage,
  downloadButtonLink,
  downloadButtonAlt = "Download on Google Play",
}: ProjectCardProps) {
  return (
    <RevealWrapper>
      <div className={`project-card${reversed ? " reversed" : ""}`}>
        <div className="project-content">
          <div className={`status-tag ${statusType}`}>{statusLabel}</div>
          <h2>{title}</h2>
          <p className="description">{description}</p>
          <div className="features">
            {features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
          {downloadButtonImage && downloadButtonLink && (
            <a
              href={downloadButtonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              <img
                src={downloadButtonImage}
                alt={downloadButtonAlt}
              />
            </a>
          )}
        </div>
        <div className={`project-image${portrait ? " portrait" : ""}`}>
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    </RevealWrapper>
  );
}