const expect = require('chai').expect
const { describe, it } = require('mocha')
const validateLineup = require('./index')

describe('validateLineup', () => {
  it.skip('returns true when the lineup satisfies all conditions', () => {
    const lineup = [
      {
        id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
      },
      {
        id: 2, name: 'Yadier Molina', position: 'C', teamId: 22, gameId: 115, salary: 2500
      },
      {
        id: 3, name: 'Luke Voit', position: '1B', teamId: 20, gameId: 115, salary: 2800
      },
      {
        id: 4, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 3200
      },
      {
        id: 5, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 3100
      },
      {
        id: 6, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 3300
      },
      {
        id: 7, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 3800
      },
      {
        id: 8, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 119, salary: 3800
      },
      {
        id: 9, name: 'Mookie Betts', position: 'OF', teamId: 12, gameId: 123, salary: 3600
      },
    ]

    expect(validateLineup(lineup)).to.equal(true)
  })

  it('returns false when the lineup includes too many players from a single team', () => {
    const lineup = [
      {
        id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
      },
      {
        id: 2, name: 'Yadier Molina', position: 'C', teamId: 22, gameId: 115, salary: 2500
      },
      {
        id: 3, name: 'Mitch Morelane', position: '1B', teamId: 12, gameId: 123, salary: 2800
      },
      {
        id: 4, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 3200
      },
      {
        id: 5, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 3100
      },
      {
        id: 6, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 3300
      },
      {
        id: 7, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 3800
      },
      {
        id: 8, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 119, salary: 3800
      },
      {
        id: 9, name: 'Mookie Betts', position: 'OF', teamId: 12, gameId: 123, salary: 3600
      },
    ]

    expect(validateLineup(lineup)).to.equal(false)
  })

  it.skip('returns false when the lineup includes too many players from a single game', () => {
    const lineup = [
      {
        id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
      },
      {
        id: 2, name: 'Yadier Molina', position: 'C', teamId: 22, gameId: 123, salary: 2500
      },
      {
        id: 3, name: 'Luke Voit', position: '1B', teamId: 20, gameId: 115, salary: 2800
      },
      {
        id: 4, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 3200
      },
      {
        id: 5, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 3100
      },
      {
        id: 6, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 3300
      },
      {
        id: 7, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 3800
      },
      {
        id: 8, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 123, salary: 3800
      },
      {
        id: 9, name: 'Mookie Betts', position: 'OF', teamId: 14, gameId: 123, salary: 3600
      },
    ]

    expect(validateLineup(lineup)).to.equal(false)
  })

  it.skip('returns false when the lineup includes too many players from a single position', () => {
    const lineup = [
      {
        id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
      },
      {
        id: 2, name: 'Yadier Molina', position: 'C', teamId: 22, gameId: 115, salary: 2500
      },
      {
        id: 3, name: 'Luke Voit', position: '1B', teamId: 20, gameId: 115, salary: 2800
      },
      {
        id: 4, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 3200
      },
      {
        id: 5, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 3100
      },
      {
        id: 6, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 3300
      },
      {
        id: 7, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 3800
      },
      {
        id: 8, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 119, salary: 3800
      },
      {
        id: 9, name: 'Mookie Betts', position: 'OF', teamId: 12, gameId: 123, salary: 3600
      },
      {
        id: 10, name: 'Mookie Betts', position: 'OF', teamId: 12, gameId: 123, salary: 2200
      },
    ]

    expect(validateLineup(lineup)).to.equal(false)
  })

  it('returns false when the lineup includes too few players from a single position', () => {
    const lineup = [
      {
        id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
      },
      {
        id: 2, name: 'Yadier Molina', position: 'C', teamId: 22, gameId: 115, salary: 2500
      },
      {
        id: 3, name: 'Luke Voit', position: '1B', teamId: 20, gameId: 115, salary: 2800
      },
      {
        id: 4, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 3200
      },
      {
        id: 5, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 3100
      },
      {
        id: 6, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 3300
      },
      {
        id: 7, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 3800
      },
      {
        id: 8, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 119, salary: 3800
      },
    ]

    expect(validateLineup(lineup)).to.equal(false)
  })

  it('returns false when the lineup does not include a player from a position', () => {
    const lineup = [
      {
        id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
      },
      {
        id: 3, name: 'Luke Voit', position: '1B', teamId: 20, gameId: 115, salary: 2800
      },
      {
        id: 4, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 3200
      },
      {
        id: 5, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 3100
      },
      {
        id: 6, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 3300
      },
      {
        id: 7, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 3800
      },
      {
        id: 8, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 119, salary: 3800
      },
      {
        id: 9, name: 'Mookie Betts', position: 'OF', teamId: 12, gameId: 123, salary: 3600
      },
    ]

    expect(validateLineup(lineup)).to.equal(false)
  })

  it('returns false when the lineup has a total salary greater than 45000', () => {
    const lineup = [
      {
        id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 10800
      },
      {
        id: 2, name: 'Yadier Molina', position: 'C', teamId: 22, gameId: 115, salary: 4000
      },
      {
        id: 3, name: 'Luke Voit', position: '1B', teamId: 20, gameId: 115, salary: 4400
      },
      {
        id: 4, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 4500
      },
      {
        id: 5, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 4100
      },
      {
        id: 6, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 4500
      },
      {
        id: 7, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 4200
      },
      {
        id: 8, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 119, salary: 4400
      },
      {
        id: 9, name: 'Mookie Betts', position: 'OF', teamId: 12, gameId: 123, salary: 4200
      },
    ]

    expect(validateLineup(lineup)).to.equal(false)
  })
})
