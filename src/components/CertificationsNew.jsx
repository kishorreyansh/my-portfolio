import React, { useState } from "react";
import { CheckCircle, Award } from "lucide-react";
import cloudPractitionerBadge from "../assets/cloud-practitioner-badge.png";
import oracleSE6Badge from "../assets/oracle-se-6-badge.png";
import "./CertificationsNew.css";

// Import all certificates
import awsCloudPractitioner from "../documents/AWS_Certified_Cloud_Practitioner.pdf";
import awsDeveloper from "../documents/AWS_Certified_Developer_Associate.pdf";
//import javaCert from "../documents/AWS_Certified_Cloud_Practitioner.pdf";

const CERTIFICATIONS = [
  {
    title: "AWS Certified Cloud Practitioner",
    score: "914/1000",
    image: cloudPractitionerBadge,
    pdf: awsCloudPractitioner,
    description:
      "Validated expertise in AWS cloud concepts, services, and basic architecture. Demonstrated cloud fluency and foundational technical skills.",
  },
  {
    title: "AWS Certified Developer - Associate",
    score: "904/1000",
    image:
      "https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
    pdf: awsDeveloper,
    description:
      "Proven ability to develop and maintain AWS-based applications. Certified expertise in CI/CD, serverless architectures, and AWS SDKs.",
  },
  {
    title: "Oracle Certified Professional: Java SE 6 Programmer",
    score: "100%",
    image: oracleSE6Badge,
    pdf: "N/A",
    description:
      "Demonstrated mastery of Java language fundamentals, object-oriented programming, and core API features in Java SE 8.",
  },
];

function CertificationsNew() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleCardClick = (index, pdf) => {
    // Only expand the card if PDF is available
    if (pdf !== "N/A") {
      setExpandedIndex(index === expandedIndex ? -1 : index);
    }
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <h2 className="section-title">
          <Award className="title-icon" />
          Certifications
        </h2>

        <div className="certificates-row">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className={`certificate-card ${
                index === expandedIndex ? "expanded" : ""
              }`}
              onClick={() => handleCardClick(index, cert.pdf)}
            >
              <div className="certificate-content">
                <div className="certificate-image">
                  <div className="aws-badge">
                    <div className="badge-front">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="badge-image"
                      />
                    </div>
                    <div className="badge-glow"></div>
                    {index === expandedIndex && (
                      <div className="confetti-container">
                        {[...Array(30)].map((_, i) => (
                          <div
                            key={i}
                            className="confetti"
                            style={{
                              "--delay": `${Math.random() * 2}s`,
                              "--x": `${Math.random() * 200 - 100}px`,
                              "--y": `${Math.random() * 200 - 100}px`,
                              "--rotation": `${Math.random() * 360}deg`,
                              "--color": `hsl(${
                                Math.random() * 360
                              }, 70%, 50%)`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="certificate-details">
                  <h3>{cert.title}</h3>
                  <div className="score">
                    <CheckCircle className="score-icon" />
                    <span>Score: {cert.score}</span>
                  </div>
                  <p>{cert.description}</p>
                  {cert.pdf !== "N/A" ? (
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="view-certificate"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>View Certificate</span>
                      <Award className="view-icon" />
                    </a>
                  ) : (
                    <span className="no-pdf-message">PDF Not Available</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationsNew;

/*function CertificationsNew() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <h2 className="section-title">
          <Award className="title-icon" />
          Certifications
        </h2>

        <div className="certificates-row">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className={`certificate-card ${
                index === expandedIndex ? "expanded" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="certificate-content">
                <div className="certificate-image">
                  <div className="aws-badge">
                    <div className="badge-front">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="badge-image"
                      />
                    </div>
                    <div className="badge-glow"></div>
                    {index === expandedIndex && (
                      <div className="confetti-container">
                        {[...Array(30)].map((_, i) => (
                          <div
                            key={i}
                            className="confetti"
                            style={{
                              "--delay": `${Math.random() * 2}s`,
                              "--x": `${Math.random() * 200 - 100}px`,
                              "--y": `${Math.random() * 200 - 100}px`,
                              "--rotation": `${Math.random() * 360}deg`,
                              "--color": `hsl(${
                                Math.random() * 360
                              }, 70%, 50%)`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="certificate-details">
                  <h3>{cert.title}</h3>
                  <div className="score">
                    <CheckCircle className="score-icon" />
                    <span>Score: {cert.score}</span>
                  </div>
                  <p>{cert.description}</p>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="view-certificate"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View Certificate</span>
                    <Award className="view-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationsNew;*/
