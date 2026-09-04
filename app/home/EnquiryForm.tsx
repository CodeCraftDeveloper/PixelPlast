"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

type EnquiryData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirementType: string;
  quantity: string;
  material: string;
  details: string;
  website: string;
  consent: boolean;
};

type FormStatus = {
  state: "idle" | "loading" | "success" | "error";
  message: string;
};

const initialData: EnquiryData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  requirementType: "",
  quantity: "",
  material: "",
  details: "",
  website: "",
  consent: false,
};

export function EnquiryForm() {
  const [data, setData] = useState<EnquiryData>(initialData);
  const [status, setStatus] = useState<FormStatus>({ state: "idle", message: "" });

  function updateField(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setData((current) => ({ ...current, [name]: value }));
  }

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (data.website) {
      setStatus({ state: "success", message: "Thank you. Your requirement has been received." });
      return;
    }

    setStatus({ state: "loading", message: "Sending your requirement..." });

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@pixelplast.in", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          requirement: data.requirementType,
          expectedQuantity: data.quantity,
          material: data.material,
          message: data.details,
          consent: data.consent ? "Confirmed" : "Not confirmed",
          _subject: "New Pixelplast injection-moulding enquiry",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("The enquiry provider rejected the request.");
      }

      setData(initialData);
      setStatus({
        state: "success",
        message:
          "Thank you. Your requirement has been received. The Pixelplast team will review the information and contact you using the details provided.",
      });
    } catch {
      setStatus({
        state: "error",
        message:
          "The form could not be sent. Please try again or email info@pixelplast.in.",
      });
    }
  }

  const isLoading = status.state === "loading";

  return (
    <form className="enquiry-form" onSubmit={submitEnquiry} id="quote">
      <div className="form-grid">
        <label>
          <span>Name <span aria-hidden="true" className="text-green-600">*</span></span>
          <input required name="name" autoComplete="name" value={data.name} onChange={updateField} />
        </label>


        <label>
          <span>Email <span aria-hidden="true" className="text-green-600">*</span></span>
          <input required type="email" name="email" autoComplete="email" value={data.email} onChange={updateField} />
        </label>

        <label>
          <span>Phone number <span aria-hidden="true" className="text-green-600">*</span></span>
          <input required type="tel" name="phone" autoComplete="tel" value={data.phone} onChange={updateField} />
        </label>

        <label>
          <span>Requirement type <span aria-hidden="true" className="text-green-600">*</span></span>
          <select required name="requirementType" value={data.requirementType} onChange={updateField}>
            <option value="" disabled>Select a requirement</option>
            <option value="Tote Bins">Tote Bins</option>
            <option value="Plastic Spools">Plastic Spools</option>
            <option value="Custom OEM">Custom OEM</option>
            <option value="Other Plastic Part">Other Plastic Part</option>
          </select>
        </label>

  
        <label className="form-span">
          <span>Requirement details <span aria-hidden="true" className="text-green-600">*</span></span>
          <textarea
            required
            name="details"
            rows={5}
            value={data.details}
            onChange={updateField}
            placeholder="Describe the application, key dimensions, performance requirements, tooling status, and delivery timeline."
          />
        </label>

        <label className="form-honeypot" aria-hidden="true">
          <span>Website</span>
          <input name="website" tabIndex={-1} autoComplete="off" value={data.website} onChange={updateField} />
        </label>
      </div>

      <label className="consent-row">
        <input
          required
          type="checkbox"
          checked={data.consent}
          onChange={(event) =>
            setData((current) => ({ ...current, consent: event.target.checked }))
          }
        />
        <span>I agree that Pixelplast may use these details to respond to my enquiry.</span>
      </label>

      <div className="form-actions">
        <p className={`form-status form-status--${status.state}`} aria-live="polite">
          {status.message || "Required fields are marked with an asterisk."}
        </p>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <><LoaderCircle className="animate-spin" aria-hidden="true" /> Sending</>
          ) : (
            <>Send Requirement <ArrowRight aria-hidden="true" /></>
          )}
        </Button>
      </div>
    </form>
  );
}
