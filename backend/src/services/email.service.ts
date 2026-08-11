export const EmailService = {
  send: async ({ to, subject, html }: { to: string; subject: string; html: string }) => {
    // Placeholder - integrate SendGrid/Mailer
    console.log('Sending email to', to)
    return true
  },
}

export default EmailService
