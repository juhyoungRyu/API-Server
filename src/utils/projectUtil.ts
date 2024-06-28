import { randomUUID } from 'crypto'

function getUuid() {
  return randomUUID().replace('-', '')
}

export { getUuid }
