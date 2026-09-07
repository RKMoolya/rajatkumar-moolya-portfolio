import { SectionHeading } from '../components/SectionHeading';
import { TimelineItem } from '../components/TimelineItem';
import { experience } from '../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Professional Journey"
          title="Work Experience"
          description="Building production-ready applications for real-world clients"
        />

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              title={exp.title}
              organization={exp.company}
              location={exp.location}
              date={`${exp.startDate} – ${exp.endDate}`}
              details={exp.responsibilities}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
