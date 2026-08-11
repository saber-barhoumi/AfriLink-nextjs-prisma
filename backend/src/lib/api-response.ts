export function ok(data: any) {
  return { success: true, data }
}

export function error(message: string, code = 'ERROR') {
  return { success: false, error: { code, message } }
}

export default { ok, error }
