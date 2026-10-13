import asyncio
import smtplib
import ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from datetime import datetime, timedelta, timezone
from typing import Optional
from sqlalchemy import select
from app.core.config import settings
from app.core.database import AsyncSessionLocal
from app.models.inquiry import Inquiry

def generate_followup_html(inquiry: Inquiry) -> str:
    product_line = f"<p style='margin: 4px 0;'><strong>Product Interest:</strong> {inquiry.product_interest}</p>" if inquiry.product_interest else ""
    qty_line = f"<p style='margin: 4px 0;'><strong>Requested Quantity:</strong> {inquiry.quantity_metric_tons}</p>" if inquiry.quantity_metric_tons else ""
    company_line = f"<p style='margin: 4px 0;'><strong>Company / Organization:</strong> {inquiry.company_name}</p>" if inquiry.company_name else ""

    return f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Thank you for connecting with Sangamnerkar Agro</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #faf6ee; color: #1a0f1f; margin: 0; padding: 30px 15px;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; border: 1px solid #e8decb; overflow: hidden; box-shadow: 0 4px 20px rgba(26,15,31,0.06);">
    <!-- Header -->
    <tr>
      <td style="background-color: #1a0f1f; padding: 32px 30px; text-align: center;">
        <span style="font-size: 32px;">🌾</span>
        <h1 style="color: #faf6ee; font-size: 22px; font-weight: bold; margin: 10px 0 4px; letter-spacing: 0.5px;">SANGAMNERKAR AGRO</h1>
        <p style="color: #c9a24b; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin: 0; font-weight: 600;">Heritage Grains &bull; Nagpur, Maharashtra</p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding: 36px 32px;">
        <p style="font-size: 16px; font-weight: 600; color: #1a0f1f; margin: 0 0 16px;">Dear {inquiry.full_name},</p>
        
        <p style="font-size: 14px; line-height: 1.6; color: #423646; margin: 0 0 18px;">
          Thank you for connecting with <strong>Sangamnerkar Agro</strong>. We have received your inquiry regarding our premium heirloom grain varieties.
        </p>

        <p style="font-size: 14px; line-height: 1.6; color: #423646; margin: 0 0 24px;">
          Our procurement and commercial desk has noted your requirements and will contact you soon with custom pricing, grain specifications, and delivery options for your location.
        </p>

        <!-- Inquiry Summary Card -->
        <div style="background-color: #faf6ee; border: 1px solid #e8decb; border-radius: 12px; padding: 18px 20px; margin-bottom: 24px; font-size: 13px; color: #5e5261;">
          <p style="margin: 0 0 10px; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #c9a24b;">Summary of Your Enquiry</p>
          {company_line}
          {product_line}
          {qty_line}
          <p style="margin: 4px 0;"><strong>Phone:</strong> {inquiry.phone}</p>
        </div>

        <p style="font-size: 14px; line-height: 1.6; color: #423646; margin: 0 0 24px;">
          If your order is urgent, you can also reach us directly on WhatsApp or phone at 
          <a href="https://wa.me/919923900943" style="color: #2F6B3A; font-weight: bold; text-decoration: none;">+91 99239 00943</a>.
        </p>

        <p style="font-size: 14px; line-height: 1.6; color: #1a0f1f; margin: 24px 0 0;">
          Warm regards,<br>
          <strong>Commercial & Client Relations Desk</strong><br>
          <span style="color: #c9a24b; font-weight: 600;">Sangamnerkar Agro</span>
        </p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #faf6ee; padding: 24px 32px; border-top: 1px solid #e8decb; font-size: 11px; color: #7f7482; text-align: center; line-height: 1.5;">
        <p style="margin: 0 0 6px;"><strong>Depot Office:</strong> Plot No. 6, Pragati Nagar, Ranala, Kamptee, Nagpur, Maharashtra, India</p>
        <p style="margin: 0;">Email: <a href="mailto:exportsangamnerkaragro@gmail.com" style="color: #1a0f1f;">exportsangamnerkaragro@gmail.com</a> | WhatsApp: +91 99239 00943</p>
      </td>
    </tr>
  </table>
</body>
</html>"""

def generate_followup_text(inquiry: Inquiry) -> str:
    return f"""Dear {inquiry.full_name},

Thank you for connecting with Sangamnerkar Agro. We have received your inquiry regarding our premium heirloom rice varieties.

Our team has reviewed your details and will contact you soon with availability, pricing, and dispatch details.

Enquiry Summary:
- Name: {inquiry.full_name}
- Company: {inquiry.company_name or 'N/A'}
- Product Interest: {inquiry.product_interest or 'Heritage Rice'}
- Quantity: {inquiry.quantity_metric_tons or 'N/A'}
- Phone: {inquiry.phone}

If you require urgent assistance, please message or call our desk directly at +91 99239 00943.

Warm regards,
Commercial Desk
Sangamnerkar Agro
Plot No. 6, Pragati Nagar, Ranala, Kamptee, Nagpur, Maharashtra, India
Email: exportsangamnerkaragro@gmail.com
"""

def send_smtp_email(to_email: str, subject: str, html_body: str, text_body: str) -> bool:
    """
    Sends an email using Gmail SMTP via SSL (port 465) or STARTTLS (port 587).
    Requires a valid 16-character Google App Password in settings.GMAIL_APP_PASSWORD.
    """
    sender = settings.GMAIL_USER or "exportsangamnerkaragro@gmail.com"
    app_password = settings.GMAIL_APP_PASSWORD.strip()

    if not app_password:
        print(f"[Email Notice] GMAIL_APP_PASSWORD is not set. Simulated sending to: {to_email}")
        return False

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = f"Sangamnerkar Agro <{sender}>"
    msg["To"] = to_email

    msg.attach(MIMEText(text_body, "plain"))
    msg.attach(MIMEText(html_body, "html"))

    try:
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(sender, app_password)
            server.sendmail(sender, to_email, msg.as_string())
        print(f"[Email Sent] Successfully sent follow-up email to {to_email}")
        return True
    except Exception as e:
        print(f"[Email Error] Failed to send email to {to_email}: {e}")
        return False

async def process_due_followups() -> int:
    """
    Queries Supabase for inquiries created >= 8 hours ago that haven't received
    the automated follow-up email, and dispatches the email.
    """
    if not settings.EMAIL_AUTOMATION_ENABLED:
        return 0

    hours = settings.EMAIL_AUTOMATION_HOURS
    cutoff = datetime.now(timezone.utc) - timedelta(hours=hours)

    sent_count = 0
    async with AsyncSessionLocal() as db:
        query = select(Inquiry).where(
            Inquiry.created_at <= cutoff,
            Inquiry.followup_email_sent == False,
            Inquiry.email.isnot(None),
        ).limit(50)

        result = await db.execute(query)
        inquiries = result.scalars().all()

        for inq in inquiries:
            if not inq.email or "@" not in inq.email:
                continue

            subject = "Thank you for connecting with Sangamnerkar Agro"
            html = generate_followup_html(inq)
            text = generate_followup_text(inq)

            success = send_smtp_email(
                to_email=inq.email,
                subject=subject,
                html_body=html,
                text_body=text,
            )

            # If sent (or if password is not set yet in dev mode to prevent looping), mark as sent
            if success:
                inq.followup_email_sent = True
                inq.followup_email_sent_at = datetime.now(timezone.utc)
                sent_count += 1

        if sent_count > 0:
            await db.commit()

    return sent_count

async def send_single_followup_now(inquiry_id: str) -> bool:
    """
    Immediately sends the follow-up email for a specific inquiry (for testing or manual dispatch).
    """
    async with AsyncSessionLocal() as db:
        result = await db.execute(select(Inquiry).where(Inquiry.id == inquiry_id))
        inq = result.scalar_one_or_none()
        if not inq or not inq.email:
            return False

        subject = "Thank you for connecting with Sangamnerkar Agro"
        html = generate_followup_html(inq)
        text = generate_followup_text(inq)

        success = send_smtp_email(
            to_email=inq.email,
            subject=subject,
            html_body=html,
            text_body=text,
        )

        if success:
            inq.followup_email_sent = True
            inq.followup_email_sent_at = datetime.now(timezone.utc)
            await db.commit()
            return True
        return False

async def email_automation_background_worker(interval_seconds: int = 600):
    """
    Background worker task that checks every 10 minutes (600 seconds)
    for inquiries that are 8 hours old.
    """
    print(f"[Email Worker] Started automatic 8-hour email follow-up worker (Check interval: {interval_seconds}s)")
    while True:
        try:
            processed = await process_due_followups()
            if processed > 0:
                print(f"[Email Worker] Sent {processed} automated follow-up emails")
        except Exception as e:
            print(f"[Email Worker Error] Error during follow-up processing: {e}")
        await asyncio.sleep(interval_seconds)
