import { useState } from "react";
import { CheckCircle, Award } from "lucide-react";
import cloudPractitionerBadge from "../assets/cloud-practitioner-badge.png";
import oracleSE6Badge from "../assets/oracle-se-6-badge.png";
// import "./CertificationsNew.css";

import awsCloudPractitioner from "../documents/aws_certified_cloud_practitioner.pdf";
import awsDeveloper from "../documents/aws_certified_developer_associate.pdf";

const CERTIFICATIONS = [
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
    title: "AWS Certified Cloud Practitioner",
    score: "914/1000",
    image: cloudPractitionerBadge,
    pdf: awsCloudPractitioner,
    description:
      "Validated expertise in AWS cloud concepts, services, and basic architecture. Demonstrated cloud fluency and foundational technical skills.",
  },
  {
    title: "Oracle Certified Professional: Java SE 6 Programmer",
    score: "100%",
    image: oracleSE6Badge,
    pdf: "N/A",
    description:
      "Demonstrated mastery of Java language fundamentals, object-oriented programming, and core API features in Java SE 6.",
  },
];

export const Certifications = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleCardClick = (index, pdf) => {
    // Only expand the card if PDF is available
    if (pdf !== "N/A") {
      setExpandedIndex(index === expandedIndex ? -1 : index);
    }
  };

  return (
    <section
      id="certifications"
      className="min-h-screen py-16 bg-black overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="flex items-center justify-center gap-3 text-2xl md:text-4xl font-bold text-text-light mb-12">
          <Award className="w-6 h-6" />
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className={`bg-gray-900/80 border border-teal-500/10 hover:border-teal-500/30 
                         rounded-lg p-8 transition-all duration-300 flex flex-col items-center 
                         ${
                           index === expandedIndex
                             ? "transform -translate-y-2"
                             : ""
                         }
                         hover:-translate-y-1 cursor-pointer`}
              onClick={() => handleCardClick(index, cert.pdf)}
            >
              <div className="relative w-36 h-36 mb-6 perspective-1000">
                <div
                  className="relative w-full h-full rounded-full overflow-hidden 
                              shadow-[0_0_30px_rgba(255,153,0,0.3),0_0_80px_rgba(255,153,0,0.1)]"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover p-3 bg-cert-gradient 
                             rounded-full border-2 border-aws-orange animate-float"
                  />
                </div>
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
                          "--color": `hsl(${Math.random() * 360}, 70%, 50%)`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="text-center w-full">
                <h3
                  className="text-text-light text-xl mb-4 min-h-[3.5rem] 
                             flex items-center justify-center"
                >
                  {cert.title}
                </h3>

                <div className="flex items-center justify-center gap-2 text-teal-400 mb-4">
                  <CheckCircle className="w-5 h-5" />
                  <span>Score: {cert.score}</span>
                </div>

                <p className="text-text-dark mb-6 leading-6 text-sm min-h-[80px]">
                  {cert.description}
                </p>

                {cert.pdf !== "N/A" ? (
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-teal-400 
                             border border-teal-400 rounded-full px-6 py-2 
                             transition-all duration-300 bg-teal-400/10 
                             hover:bg-teal-400/20 hover:-translate-y-0.5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View Certificate</span>
                    <Award className="w-5 h-5" />
                  </a>
                ) : (
                  <span
                    className="text-white bg-gray-700 px-4 py-2 
                                 rounded-md font-bold text-center block"
                  >
                    PDF Not Available
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
