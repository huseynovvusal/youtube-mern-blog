export const limitText = (text, limit) => {
  const replaced = text.replace(/<[^>]+>/g, " ")

  return replaced.substring(0, limit) + (replaced.length > limit ? "..." : "")
}
