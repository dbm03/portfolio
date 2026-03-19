"use client";

import {
  Button,
  Card,
  Separator,
  Spinner,
  TextField,
  TextArea,
  Label,
  Input,
  FieldError,
} from "@heroui/react";
import { useMemo, useState } from "react";
import { MailLogo } from "../icons";
import useDebounce from "@/hooks/useDebounce";
import { toast } from "sonner";

const validateEmail = (mail: string) => {
  if (mail === "") return false;
  return !mail.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
};

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);

  const [debouncedEmailInvalid, setDebouncedEmailInvalid] = useState(false);

  const isEmailInvalid = useMemo(() => validateEmail(email), [email]);

  useDebounce(
    () => {
      setDebouncedEmailInvalid(isEmailInvalid);
    },
    700,
    [email],
  );

  const handleSubmit = async () => {
    setSending(true);
    try {
      await fetch("/api/submit-form", {
        method: "POST",
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setEmail("");
      setSubject("");
      setMessage("");
      toast.success("Email sent successfully");
    } catch {
      toast.error("Error sending email");
    } finally {
      setSending(false);
    }
  };

  const buttonDisabled =
    isEmailInvalid || email === "" || message === "" || sending;

  return (
    <Card className="shadow-sm w-full h-full">
      <Card.Header className="flex gap-3 justify-between p-4">
        <div className="flex flex-col">
          <Card.Title>Contact me</Card.Title>
          <Card.Description>Fill out this form...</Card.Description>
        </div>
      </Card.Header>
      <Separator />
      <Card.Content className="p-4">
        <form className="flex flex-col gap-4">
          <TextField
            isRequired
            isInvalid={debouncedEmailInvalid}
            name="email"
            type="email"
          >
            <Label>Email</Label>
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FieldError>
              {debouncedEmailInvalid ? "Please enter a valid email" : ""}
            </FieldError>
          </TextField>
          <TextField name="subject" type="text">
            <Label>Subject</Label>
            <Input
              placeholder="Enter a subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </TextField>
          <TextField isRequired name="message">
            <Label>Message</Label>
            <TextArea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </TextField>
          <div
            className={`flex justify-end gap-2 ${
              buttonDisabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <Button
              isDisabled={buttonDisabled}
              className="w-full"
              variant="primary"
              onPress={handleSubmit}
            >
              Send
              {sending ? <Spinner color="current" size="sm" /> : <MailLogo />}
            </Button>
          </div>
          <Separator />
          <div>
            <p className="text-sm text-muted">
              ... or you can email me directly at
            </p>
            <div className="flex items-center gap-2 px-0 py-1.5">
              <pre className="text-sm font-mono m-0">
                <a href="mailto:contact@davidbarroso.dev">
                  contact@davidbarroso.dev
                </a>
              </pre>
            </div>
          </div>
        </form>
      </Card.Content>
    </Card>
  );
};

export default ContactForm;
