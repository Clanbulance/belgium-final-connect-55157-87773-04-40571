import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "contact.form.error.nameRequired" })
    .max(100, { message: "contact.form.error.nameTooLong" }),
  email: z
    .string()
    .trim()
    .email({ message: "contact.form.error.invalidEmail" })
    .max(255, { message: "contact.form.error.emailTooLong" }),
  company: z
    .string()
    .trim()
    .max(100, { message: "contact.form.error.companyTooLong" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, { message: "contact.form.error.messageRequired" })
    .max(1000, { message: "contact.form.error.messageTooLong" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const { t } = useLanguage();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      toast.success(t("contact.form.success.title"), {
        description: t("contact.form.success.description"),
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(t("contact.form.error.submitFailed"), {
        description: t("contact.form.error.submitFailedDescription"),
      });
    }
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "hsl(180 20% 96% / 0.3)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">{t("contact.title")}</h2>
            <p className="section-subtitle">{t("contact.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.name")} *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("contact.form.placeholder.name")}
                              maxLength={100}
                              disabled={form.formState.isSubmitting}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage>
                            {form.formState.errors.name?.message && 
                              t(form.formState.errors.name.message)}
                          </FormMessage>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.email")} *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={t("contact.form.placeholder.email")}
                              maxLength={255}
                              disabled={form.formState.isSubmitting}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage>
                            {form.formState.errors.email?.message && 
                              t(form.formState.errors.email.message)}
                          </FormMessage>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.company")}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("contact.form.placeholder.company")}
                              maxLength={100}
                              disabled={form.formState.isSubmitting}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage>
                            {form.formState.errors.company?.message && 
                              t(form.formState.errors.company.message)}
                          </FormMessage>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.message")} *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("contact.form.placeholder.message")}
                              className="min-h-32"
                              maxLength={1000}
                              disabled={form.formState.isSubmitting}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage>
                            {form.formState.errors.message?.message && 
                              t(form.formState.errors.message.message)}
                          </FormMessage>
                        </FormItem>
                      )}
                    />

                    <Button
                      variant="default"
                      className="w-full confButton"
                      size="lg"
                      type="submit"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? t("contact.form.sending") : t("contact.form.cta")}
                    </Button>
                  </form>
                </Form>
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
                      <h3 className="font-bold text-lg mb-1">{t("contact.email.title")}</h3>
                      <p className="text-muted-foreground">info@rjdp.be</p>
                      <p className="text-sm text-muted-foreground mt-2">{t("contact.email.response")}</p>
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
                      <h3 className="font-bold text-lg mb-1">{t("contact.location.title")}</h3>
                      <p className="text-muted-foreground">{t("contact.location.city")}</p>
                      <p className="text-sm text-muted-foreground mt-2">{t("contact.location.serving")}</p>
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
                      <h3 className="font-bold text-lg mb-1">{t("contact.consult.title")}</h3>
                      <p className="text-muted-foreground">{t("contact.consult.schedule")}</p>
                      <Button
                        variant="link"
                        className="px-0 mt-2"
                        onClick={() =>
                          toast.info("Opening calendar...", {
                            description: "Calendar booking feature coming soon!",
                          })
                        }
                      >
                        {t("contact.consult.cta")}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="contact-highlight-card">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">{t("contact.hours.title")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("contact.hours.weekday")}
                    <br />
                    {t("contact.hours.saturday")}
                    <br />
                    {t("contact.hours.sunday")}
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
