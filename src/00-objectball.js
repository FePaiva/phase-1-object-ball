function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black" , "White"],
            players: {
                "Alan Anderson": {
                number: 0,
                Shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
            },
                "Reggie Evans": {
                number: 30,
                Shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,    
            },
                "Brook Lopez": {
                number: 11,
                Shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,    
            },
                "Mason Plumlee": {
                number: 1,
                Shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,    
            },
                "Jason Terry": {
                number: 31,
                Shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,    
            },
          }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise" , "Purple"],
            players: {
                "Jeff Adrien": {
                number: 4,
                Shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,    
            },
                "Bismak Biyombo": {
                number: 0,
                Shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,    
            },
                "DeSagna Diop": {
                number: 2,
                Shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,    
            },
                "Ben Gordon": {
                number: 8,
                Shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,    
            },
                "Brendan Haywood": {
                number: 33,
                Shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,    
            }
          }
        }
    }
}

// - Build a function, `numPointsScored` that takes in an argument of a player's name and returns the number of points scored for that player.
//   - Think about where in the object you will find a player's `points`. How can
//     you iterate down into that level? Think about the return value of your
    // function.

    function homeTeam (){
        return gameObject().home
    }

    function awayTeam (){
        return gameObject().away
    }
    
    function players (){
        // return Object.assign({}, homeTeam().players, awayTeam().players)
        return {... homeTeam().players, ...awayTeam().players}
    }
    function numPointsScored(playerInput){
        return players()[playerInput].points
    }

    function shoeSize (playerInput){
        return players()[playerInput].shoe
    }
    function playerNumbers (playerInput){
        return players()[playerInput].number
    }

    function teamColors (teamInput){
        return homeTeam()[teamInput].colors
    }
    function teamColors (teamInput){
        return awayTeam()[teamInput].colors
    }
    function teamNames (teamInput){
        return homeTeam()[teamInput].teamName
    }
    function teamNames (teamInput){
        return awayTeam()[teamInput].teamName
    }




        //    another way of doig the above
        // function numPointsScored(playerInput){
        //    const playerArrays =  Object.entries(players())
        //    const player = playerArrays.find(playerArray => playerArray[0] === playerInput)
        //   return player[1].points
        //        }
        
        // for (const playerName in players()){
        //     if (playerName === playerInput){
        //             return players()[playerName].points
        //         }
        //     }

        console.log('desagna number of points', numPointsScored("DeSagna Diop"))
        


        // const game = gameObject()
        // console.log('game', game)
        // for (const gameKey in game){
        //     const teamObj = game[gameKey]
        //     const playerObj = teamObj.players
        //     console.log('team object', teamObj)
        //     console.log("player object", playerObj)
        //     for (const playerKey in playerObj){
        //         console.log('player key', playerKey)
        //         console.log('player input', playerInput )
        //             if (playerKey === playerInput){
        //                 console.log('if true', playerKey === playerInput)
        //                 return playerObj[playerKey].points
        //             }
        //         }
        //     }
        // }
