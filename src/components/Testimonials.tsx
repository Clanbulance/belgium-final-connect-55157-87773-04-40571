import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";
import matter from "gray-matter";

interface Testimonial {
  author: string;
  role: string;
  company: string;
  quote: string;
}

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        // Load sample testimonial
        const response = await fetch('/src/content/testimonials/sample-testimonial.md');
        const text = await response.text();
        const { data, content } = matter(text);
        
        setTestimonials([{
          author: data.author,
          role: data.role,
          company: data.company,
          quote: content.trim()
        }]);
      } catch (error) {
        console.error('Failed to load testimonials:', error);
      }
    };
    loadTestimonials();
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real results from Belgian businesses</p>
        </div>

        <div className="grid grid-md-2 grid-lg-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-base mb-6 italic">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
