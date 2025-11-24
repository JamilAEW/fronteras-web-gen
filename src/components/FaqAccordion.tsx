import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { generalFaq } from '@/data/general-faq';
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import type { Faq } from '@/data/courses';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface FaqAccordionProps {
  faqs?: Faq[];
  showTitle?: boolean;
  showIcon?: boolean;
}

const FaqAccordion = ({ faqs, showTitle = true, showIcon = true }: FaqAccordionProps) => {
  const faqsToShow = faqs || generalFaq;
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12">
            {showIcon && (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <QuestionMarkCircledIcon className="h-8 w-8 text-accent" aria-hidden="true" />
              </div>
            )}
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>
        )}

        <Accordion type="single" collapsible className="w-full">
          {faqsToShow.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-display font-semibold text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqAccordion;
