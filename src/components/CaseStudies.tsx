import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import matter from "gray-matter";

interface CaseStudy {
  title: string;
  problem: string;
  solution: string;
  results: string;
  kpis: string[];
  quote: string;
}

export const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    const loadCaseStudies = async () => {
      try {
        // Load sample case study
        const response = await fetch('/src/content/cases/belgian-manufacturing.md');
        const text = await response.text();
        const { data } = matter(text);
        
        setCaseStudies([{
          title: data.title,
          problem: data.problem,
          solution: data.solution,
          results: data.results,
          kpis: data.kpis,
          quote: data.quote
        }]);
      } catch (error) {
        console.error('Failed to load case studies:', error);
      }
    };
    loadCaseStudies();
  }, []);

  if (caseStudies.length === 0) return null;

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">How we help Belgian businesses grow</p>
        </div>

        <div className="grid gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="text-2xl">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-destructive">Challenge</h3>
                    <p className="text-muted-foreground mb-6">{study.problem}</p>
                    
                    <h3 className="font-semibold text-lg mb-2 text-primary">Solution</h3>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-accent">Results</h3>
                    <p className="text-muted-foreground mb-4">{study.results}</p>
                    
                    <div className="space-y-2 mb-6">
                      {study.kpis.map((kpi, kpiIndex) => (
                        <div key={kpiIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium">{kpi}</span>
                        </div>
                      ))}
                    </div>
                    
                    {study.quote && (
                      <div className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                        "{study.quote}"
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
