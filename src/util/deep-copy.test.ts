import deepCopy from './deep-copy'

describe('deepCopy', () => {
  it('returns array has elements whose values equal original elements', () => {
    const original = [1, 'foo', ['bar', 2], { foo: 1, bar: 'bar' }]
    const actual = deepCopy(original)
    expect(actual).not.toBe(original)
    expect(actual).toEqual(original)
  })

  it('returns object has properties whose values equal original properties', () => {
    const original = { foo: 1, bar: { foo: 'foo', bar: 2 }, buz: [1, 'foo'] }
    const actual = deepCopy(original)
    expect(actual).not.toBe(original)
    expect(actual).toEqual(original)
  })
})
