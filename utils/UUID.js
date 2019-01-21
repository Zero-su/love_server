import uuid from 'uuid'

const commonFn = {
  getUuid: () => {
    return uuid.v1().split('-').join('')
  }
}
export default commonFn
