import { useMemo, useState } from "react";
import { heroLinks, socialLinks } from "../../config/portfolio";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { useTranslation } from "react-i18next";
import { usePortfolio } from "../../hooks/usePortfolio";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const { t } = useTranslation();
  const { contactFields } = usePortfolio();
  const [formState, setFormState] = useState<FormState>(initialState);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `${t("mail.subject")} - ${formState.name || t("mail.newProject")}`,
    );
    const body = encodeURIComponent(
      [
        `${t("mail.name")}: ${formState.name || "-"}`,
        `${t("mail.email")}: ${formState.email || "-"}`,
        "",
        formState.message || "",
      ].join("\n"),
    );

    return `mailto:${socialLinks[2].href.replace("mailto:", "")}?subject=${subject}&body=${body}`;
  }, [formState.email, formState.message, formState.name, t]);

  return (
    <Section
      id="contact"
      eyebrow={t("contactSection")}
      title={t("sections.contactTitle")}
      description={t("sections.contactDescription")}
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="rounded-3xl p-6 sm:p-8">
          <form
            className="space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              window.location.href = mailtoHref;
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {contactFields.slice(0, 2).map((field) => (
                <label key={field.id} htmlFor={field.id} className="space-y-2">
                  <span className="text-sm font-medium text-foreground">
                    {field.label}
                  </span>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    value={formState[field.id as keyof FormState]}
                    onChange={(event) =>
                      setFormState((currentState) => ({
                        ...currentState,
                        [field.id]: event.target.value,
                      }))
                    }
                    placeholder={field.placeholder}
                    className="h-12 w-full rounded-2xl border border-border/80 bg-background/70 px-4 text-sm text-foreground placeholder:text-muted-foreground/80 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    autoComplete={field.id}
                  />
                </label>
              ))}
            </div>

            <label htmlFor="message" className="block space-y-2">
              <span className="text-sm font-medium text-foreground">
                {t("cards.message")}
              </span>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={(event) =>
                  setFormState((currentState) => ({
                    ...currentState,
                    message: event.target.value,
                  }))
                }
                placeholder={contactFields[2].placeholder}
                rows={6}
                className="w-full rounded-2xl border border-border/80 bg-background/70 px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground/80 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="submit">{t("cards.sendMessage")}</Button>
              <Button href={heroLinks.email} variant="secondary" external>
                {t("cards.directEmail")}
              </Button>
            </div>
          </form>
        </Card>

        <Card className="rounded-3xl p-6 sm:p-8">
          <div className="space-y-5">
            <div>
              <p className="section-kicker">{t("cards.channels")}</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                {t("contactDetails.channelsTitle")}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <Badge
                  key={link.label}
                  className="bg-background/70 text-foreground"
                >
                  {link.label}
                </Badge>
              ))}
            </div>

            <div className="grid gap-3 rounded-2xl border border-border/80 bg-background/60 p-4">
              <p className="text-sm leading-7 text-muted-foreground">
                {t("contactDetails.channelsDescription")}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href={socialLinks[0].href} variant="ghost" external>
                  GitHub
                </Button>
                <Button href={socialLinks[1].href} variant="ghost" external>
                  LinkedIn
                </Button>
                <Button href={heroLinks.email} variant="ghost" external>
                  {socialLinks[2].label}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
