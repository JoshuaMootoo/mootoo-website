import fs from 'fs'
import path from 'path'

export default async function PrivacyPage() {
  const filePath = path.join(
    process.cwd(),
    'src',
    'app',
    'mantaway-privacy-policy',
    'privacy-policy.html'
  )
  
  const html = fs.readFileSync(filePath, 'utf8')

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}