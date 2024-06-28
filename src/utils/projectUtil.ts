import { randomUUID } from 'crypto'

function getUuid() {
  const sUuid = randomUUID()

  console.log()
  return sUuid.replace(/-/g, '')
}

export { getUuid }
