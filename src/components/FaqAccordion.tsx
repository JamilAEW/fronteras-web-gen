import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqGeneral } from '@/data/faq-general';
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';

const FaqAccordion = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
            <QuestionMarkCircledIcon className="h-8 w-8 text-accent" aria-hidden="true" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Preguntas frecuentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqGeneral.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-display font-semibold text-left">
                {faq.pregunta}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.respuesta}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqAccordion;
