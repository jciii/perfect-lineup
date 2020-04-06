
const positionsRequired = ['P', 'C', '1B', '2B', '3B', 'SS', 'OF', 'OF', 'OF']

function validateLineup(lineup) {
  const newLineup = lineup.length === 9

  if (newLineup) {
    const positionCheck = lineup.reduce((acc, player) => {
      acc.push(player.position)

      return acc
    }, [])

    positionCheck === positionsRequired
  }
  if (newLineup) {
    lineup.reduce((acc, team) => {
      acc[team.teamId] = (acc[team.teamId] || 0) + 1
      acc[team.teamId] <= 2

      return acc
    }, {})
  } if (newLineup) {
    lineup.reduce((acc, team) => {
      acc[team.gameId] = (acc[team.gameId] || 0) + 1
      acc[team.gameId] <= 2

      return acc
    }, {})
  }
  if (newLineup) {
    const salaryCapMet = lineup.reduce((acc, lineup) => acc + lineup.salary, 0)

    salaryCapMet <= 45000
  }

  return newLineup
}

module.exports = validateLineup
