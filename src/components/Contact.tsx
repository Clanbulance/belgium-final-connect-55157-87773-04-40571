import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours."
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Failed to send message", {
        description: "Please try again or contact us directly at info@rjdp.be"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: 'hsl(180 20% 96% / 0.3)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {t('contact.title')}
            </h2>
            <p className="section-subtitle">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-md-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.form.name')} *</label>
                    <Input 
                      name="name"
                      placeholder={t('contact.form.placeholder.name')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.form.email')} *</label>
                    <Input 
                      name="email"
                      type="email" 
                      placeholder={t('contact.form.placeholder.email')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.form.company')}</label>
                    <Input 
                      name="company"
                      placeholder={t('contact.form.placeholder.company')}
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.form.message')} *</label>
                    <Textarea 
                      name="message"
                      placeholder={t('contact.form.placeholder.message')}
                      className="min-h-32"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button variant="default" className="w-full" size="lg" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.cta')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="contact-info-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{t('contact.email.title')}</h3>
                      <p className="text-muted-foreground">info@rjdp.be</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {t('contact.email.response')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="contact-info-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{t('contact.location.title')}</h3>
                      <p className="text-muted-foreground">{t('contact.location.city')}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {t('contact.location.serving')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="contact-info-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{t('contact.consult.title')}</h3>
                      <p className="text-muted-foreground">{t('contact.consult.schedule')}</p>
                      <Button 
                        variant="link" 
                        className="px-0 mt-2"
                        onClick={() => toast.info("Opening calendar...", {
                          description: "Calendar booking feature coming soon!"
                        })}
                      >
                        {t('contact.consult.cta')}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="contact-highlight-card">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">{t('contact.hours.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.hours.weekday')}<br />
                    {t('contact.hours.saturday')}<br />
                    {t('contact.hours.sunday')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
