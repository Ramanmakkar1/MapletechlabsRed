// SplitForms submission helper — used by every form on the site.
// The access key is public by design: it ships in the page the same way it would
// in a plain <form action="https://splitforms.com/api/submit"> markup block.
const ACCESS_KEY = '8e9dae2b0b8a4c999f25c0095763e61a';
const ENDPOINT = 'https://splitforms.com/api/submit';

export async function submitToSplitForms(subject: string, fields: Record<string, string>) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: ACCESS_KEY, subject, ...fields }),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.success) throw new Error(data?.message || 'Submission failed');
}
