var wc_teams = ['France', 'Uruguay', 'Spain/Russia', 'Croatia/Denmark', 'Brazil/Mexico', 'Belgium/Japan', 'Sweden/Switzerland', 'Colombia/England'];
var fantasy_people = ['Andrew Weiser', 'Ben Vitello', 'CJ Aydin', 'Chris Tran', 'Eren Erdogan', 'Eric Revich', 'Mike Themis', 'Pat Nizza', 'Scott Kessler', 'Sean Slavin', 'Sunny Polepalli', 'Tim Sawma', 'LeBron Rizvi'];

function loopArray(array){
  array.map((person, index) => {
    console.log("%c" + index + ".) " + person, "font-weight: bold; font-size: 13px; font-family: 'Roboto';");
  });
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(loopArray(array));
}

for (var value of wc_teams) {
  console.log("%c Country: " + value, "background: #1779ba; color: #fff; font-weight: bold; padding: 15px; font-size: 16px; font-family: 'Roboto'");
  shuffle(fantasy_people)
}

console.log('%c       ', 'font-size: 500px; background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQAWancc4EwyQs3VhWadwDyWrugODyeXRmI68IUH-pA34vLXqi6w) no-repeat;');