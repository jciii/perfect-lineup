const positionsRequired = ['P', 'C', '1B', '2B', '3B', 'SS', 'OF', 'OF', 'OF']

function validateLineup(lineup) {
  if (lineup) {
    let positionCheck = lineup.reduce((acc, player) => {
      acc.push(player.position)

      return acc
    }, [])

    if (positionCheck.length !== positionsRequired.length ||
      positionCheck.every((value, index) => value !== positionsRequired[index])) {
      return false
    }
  } if (lineup) {
    let teamCounter = []

    lineup.reduce((acc, team) => {
      teamCounter = acc[team.teamId] = (acc[team.teamId] || 0) + 1

      return acc
    }, {})
    if (teamCounter > 2) {
      return false
    }
  } if (lineup) {
    let gameCounter = []

    lineup.reduce((acc, team) => {
      gameCounter = acc[team.gameId] = (acc[team.gameId] || 0) + 1



      return acc
    }, {})
    if (gameCounter >= 3) {
      return false
    }
  } if (lineup) {
    const salaryCapMet = lineup.reduce((acc, lineup) => acc + lineup.salary, 0)

    if (salaryCapMet <= 45000) {
      return true
    }

    return false
  }

  return lineup
}

module.exports = validateLineup
