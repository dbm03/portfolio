"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Spinner,
  Textarea,
} from "@nextui-org/react";
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

  const [, cancel] = useDebounce(
    () => {
      setDebouncedEmailInvalid(isEmailInvalid);
    },
    700,
    [email]
  );

  const handleSubmit = async () => {
    // send email details to next.js endpoint /api/submit-form
    setSending(true);
    try {
      const res = await fetch("/api/submit-form", {
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
    } catch (e) {
      toast.error("Error sending email");
    } finally {
      setSending(false);
    }
  };

  const buttonDisabled =
    isEmailInvalid || email === "" || message === "" || sending;

  return (
    <Card
      shadow="sm"
      fullWidth
      classNames={{
        base: "h-full",
      }}
    >
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Contact me</p>
          <p className="text-small text-default-500">Send me an email</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <form className="flex flex-col gap-4">
          <Input
            isRequired
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={email}
            isInvalid={debouncedEmailInvalid}
            color={debouncedEmailInvalid ? "danger" : "default"}
            errorMessage={
              debouncedEmailInvalid ? "Please enter a valid email" : ""
            }
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Subject"
            placeholder="Enter a subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Textarea
            label="Message"
            placeholder="Enter your message"
            rows={3}
            maxRows={3}
            isRequired
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div
            className={`flex justify-end gap-2 ${
              buttonDisabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <Button
              isDisabled={buttonDisabled}
              fullWidth
              color="primary"
              endContent={
                sending ? <Spinner color="default" size="sm" /> : <MailLogo />
              }
              onPress={handleSubmit}
            >
              Send
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default ContactForm;
