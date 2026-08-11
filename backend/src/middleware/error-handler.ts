export function handleError(err: any) {
  const message = err?.message ?? String(err)
  return { status: 500, body: { error: message } }
}
