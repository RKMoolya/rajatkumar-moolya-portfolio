import { SectionHeading } from '../components/SectionHeading';
import { TimelineItem } from '../components/TimelineItem';
import { education } from '../data/education';

export const Education = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Academic Background"
          title="Education"
          description="Building a strong foundation in technology and engineering"
        />

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.id}
              title={edu.degree}
              organization={edu.institution}
              location={edu.location}
              date={`${edu.startDate} – ${edu.endDate}`}
              details={
                <p className="text-text-primary font-semibold text-lg">
                  {edu.scoreType}: <span className="text-accent">{edu.score}</span>
                  {edu.scoreType === 'Percentage' && '%'}
                </p>
              }
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
