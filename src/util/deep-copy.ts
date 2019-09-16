const deepCopy = <T extends any[] | {}>(target: T): T => JSON.parse(JSON.stringify(target))
export default deepCopy
