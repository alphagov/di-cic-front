const { formatDate } = require('./utils')

describe('formatDate', () => {
  it('returns a YYYY-MM-DD date as DD MM YYYY', () => {
    expect(formatDate('1989-03-31', "YYYY-MM-DD")).toEqual('31 03 1989');
  })

  it('returns a YYYY-MM-DD date as DD MM YYYY', () => {
    expect(formatDate('198903/31', "YYYY-MM-DD")).toEqual('');
  })

  it('should return an empty string if date is empty string', () => {
    expect(formatDate("","YYYY-MM-DD")).toEqual("");
  })

  it('should return an empty string if date is empty', () => {
    expect(formatDate(null,"YYYY-MM-DD")).toEqual("");
  })
})