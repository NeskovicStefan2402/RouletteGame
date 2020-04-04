<template>
<div>
    <div class='pozadina'>
    <div class="row">
        <div class="col-2">
            <router-link tag="button" to='/' class="back form-control"><- Back</router-link>
        </div>
    </div>
    <br>
    <Clanak class="clanak" naslov='What is Roulette?' text='Roulette is a casino game named after the French word meaning little wheel. In the game, players may choose to place bets on either a single number, various groupings of numbers, the colors red or black, whether the number is odd or even, or if the numbers are high (19–36) or low (1–18).To determine the winning number and color, a croupier spins a wheel in one direction, then spins a ball in the opposite direction around a tilted circular track running around the outer edge of the wheel. The ball eventually loses momentum, passes through an area of deflectors, and falls onto the wheel and into one of 37 (single zero French/European style roulette) or 38 (double zero American style roulette) colored and numbered pockets on the wheel. The winnings are then paid to anyone who has placed a successful bet. ' lista='[]'/>
    <Clanak class="clanak" naslov='How to Play Roulette?  – Step by Step' text='' lista="'Choose a number or group of numbers you want to bet on','Choose a bet amount that is suitable for your bankroll','Place your bet on the number/numbers of your choice','Wait for the dealer to spin the wheel and reveal the winning number','Collect your winnings, if you’ve guessed the number','Place another bet and try again'"/>
    <Clanak class="clanak" naslov='The Wheel' text='The game of American Roulette is played on a wheel which consists of thirty-eight slots, each with its own number. The numbers on a Roulette wheel are 1-36, 0, and 00. The numbers alternate pairs of odd numbers with pairs of even numbers. The numbers also alternate between black and red. Both the 0 and 00 slots are green. A dealer, or croupier spins the wheel in one direction and then rolls a small ball in the other direction. The ball then drops into one of the slots as it begins to slow down. ' lista='[]'/>
    <Clanak class="clanak" naslov='The Table' text='The table is designed so that the numbers, not including 0 and 00, are lined up into three columns, each of twelve numbers, the first row is 1,2,3; the second row is 4,5,6 and so on. The rest of the table is devoted to the myriad bets the game entails. Betting is broken down into two major categories, inside bets and outside bets. There is no limit to the number of bets one can play.' lista='[]'/>
    <Clanak class="clanak" naslov='Inside Bets' text='Straight bets - This is betting that one particular number on the wheel will come up. This bet is done by placing a chip on top of the number on which you want to bet. If that number wins, the payoff is 35 to 1. Split bets - This is betting that one of two numbers that lie next to each other on the table will win. Placing a chip on the line that separates two numbers does this. You win if the ball lands on either number. The payoff is 17 to 1. Street bet, Trio bet, or Three Number bet In this bet, a player is wagering that any number in a particular row will hit on the next spin. To make this bet, you must place a chip in the outside line of the row on which you want to bet. You win if any number in the row comes up. The payoff is 11 to 1. Corner bet, Square bet, or Four-Number bet This bets that one of four numbers will hit on the next spin. The numbers should all be touching and moving a chip into the center of four numbers places the bet. If one of these numbers comes up, you win. This bets pays 8 to 1. Five-Number bet - This is betting that either the 0, 00, 1, 2, or 3 will come up on the next roll. To take this bet, place a chip on the outside line that divides the 0 and 1. You will be paid 6 to 1 if any of these numbers come up. Six Line bet - This is betting that one of six numbers in two adjacent rows will come up. Place a chip in between two rows on the outside line. If the ball lands on any number in the two rows, you will be paid 6 to 1. ' lista='[]'/>
    <Clanak class='clanak' naslov='Outside Bets' text=' Red - You are betting that the next number to come up is a red. If the next number landed is red, you will be paid 1 to 1, or even money. To play this bet, place a chip on the box marked "Red". Black - You are betting that the next number to come up is a black. If the next number landed is black, you will be paid 1 to 1, or even money. To play this bet, place a chip on the box marked "Black". Even - This is wagering that the ball will land on an even number. This bet does not include 0 or 00. The payoff is 1 to 1. To play this bet, place a chip on the box marked "Even". Odd - This is wagering that the ball will land on an odd number. The payoff is 1 to 1 if the next number to come up is odd. To play this bet, place a chip on the box marked "Odd". Low bet - This is a bet that the next number will be between 1 and 18. The payout is 1 to 1. To play this bet, place a chip on the box marked "Low". High bet - This is a bet that the next number will be between 19 and 36. The payout is 1 to 1. To play this bet, place a chip on the box marked "High". Dozen bet - These bets divide the table into the numbers 1-12, 13-24, and 25-36. To play this bet, put a chip in one of the three boxes marked "1st 12", "2nd 12" or "3rd 12". This bet pays 2 to 1. Column bet - This bets that a number in a particular column will come up on the next spin. The payoff is 2 to 1 and is done by placing a chip at the end of the layout below your desired column where it is marked "2 to 1".' lista='[]'/>
    </div>
</div>
</template>
<script>
import Clanak from '../components/Clanak'
export default {
    components:{   
        Clanak
    },
    created(){
        this.$store.dispatch('updateProfile')
    },
    destroyed(){
        this.$store.dispatch('updateProfile')
    },
}
</script>
<style scoped>
.pozadina{
    margin: 30px auto;
    margin-top:0px;
    padding: 50px;
    background-color: rgb(194, 193, 193);
}
.clanak{
    background-color: white;
    border-radius: 10px;
    margin: 25px;
    /* text-align: center; */
    padding: 20px;
    box-shadow: 10px 10px 94px -7px rgba(0,0,0,0.39);
}
.back {
  background-color: rgb(78, 74, 74);
  color: white;
}
</style>