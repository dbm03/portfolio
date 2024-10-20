import { NextResponse } from "next/server";

import * as postmark from "postmark";

const serverToken = process.env.POSTMARK_SERVER_TOKEN;

export async function POST(request: Request) {
  const json = await request.json();

  if (!serverToken) {
    // return error if POSTMARK_SERVER_TOKEN is not defined
    return NextResponse.json(
      { error: "POSTMARK_SERVER_TOKEN is not defined" },
      { status: 500 },
    );
  }

  const { email, subject, message } = json;

  try {
    const client = new postmark.ServerClient(serverToken);

    await client.sendEmail({
      From: "dmurcia6@gatech.edu",
      To: "dmurcia6@gatech.edu",
      Subject: `PORTFOLIO: ${subject} from ${email}`,
      HtmlBody: `<html><body><p>${message}</p></body></html>`,
      TextBody: `${message}`,
      MessageStream: "form-portfolio",
    });
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
