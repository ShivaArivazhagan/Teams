let Tournment={Game:"Cricket",Participants:["CSK","MI","RCB","RR","KXIP","RR","KKR","SRH"]}  
let Venue = ["MUMBAI", "CHENNAI", "DELHI", "PUNE", "KOLKATA", "BANGALORE", "HYDERABAD"];
// .................................PAIRING.......................
function participantsPairing(){
  const Dummy = -1;
  let numberOfParticipants =Tournment.Participants.length;
  const scheduledParticipants = [];
  if (numberOfParticipants % 2 === 1) {
      Tournment.Participants.push(Dummy);
    numberOfParticipants += 1;
  }
  for (let j = 0; j < numberOfParticipants - 1; j++) {
    scheduledParticipants[j] = [];
    for (let x = 0; x < numberOfParticipants / 2; x++) {
      const reversesParticipants = numberOfParticipants - 1 - x;
      if (Tournment.Participants[x] !== Dummy && Tournment.Participants[reversesParticipants] !== Dummy) {  
        scheduledParticipants[j].push([Tournment.Participants[x],' vs ',Tournment.Participants[reversesParticipants]]);
      }
    }
    Tournment.Participants.splice(1, 0, Tournment.Participants.pop());
  }
 return scheduledParticipants;
}
// .................................FIND ALL MATCHES.......................
function findAllMatches() {
    const newarray=[];
    const matches=participantsPairing();
    for (let i = 0; i < matches.length; i++) {
        for (let j = 0; j < matches[i].length; j++) {
            newarray.push(matches[i][j]);
        }
    }  
    return newarray;
}
// .................................FIND WEEKENDS.......................
function DateSchedules() {
    const daysSlot = [];
    const allMatch=findAllMatches()
    weekdaysList = ['sunday', 'monday', 'tuesday', 'wednsday', 'thursday', 'friday', 'saturday'];
    let date = new Date();
    let s = 6 - (date.getDay());
    let x = 0;
    for (let i = 1; i <allMatch.length; i++) {
        let next = new Date(date.getTime() + (s + x) * 24 * 60 * 60 * 1000);
        let next1 = new Date(date.getTime() + (s + 1 + x) * 24 * 60 * 60 * 1000);
        x += 7;
        let saturday = String(next, weekdaysList[next.getDay()]).slice(0, 15);
        let sunday = String(next1, weekdaysList[next1.getDay()]).slice(0, 15);
        daysSlot.push(saturday, sunday);
    }
    return daysSlot;
}
//.................................GENERATE NEW IDS FOR MATCHES..........
function generateMatchId(){
    const matchId=[];
    const allMatch=findAllMatches();
    for(let i=0;i<allMatch.length;i++){
        matchId.push('WCT20MTNO'+(i+1));
    }
    return matchId;
}
// .................................FINAL SCHEDULES.......................
function finalSchedule (Participants,Venue){ 
  let finalSchedule=[];
  const allMatch=findAllMatches(Participants);
  const DateSchedule=DateSchedules();
  const ID=generateMatchId();
  let match = 1;
  let day=1;let days=1;
  for (let i=0;i<allMatch.length;i++){
    if(i%2==0){
      let Random= Math.floor(Math.random() * Venue.length);
      let MatchSchedule={'DAY':day++,
                         'MATCH-NO':match++,
                         'TEAM-1':allMatch[i][0],
                         'TEAM-2':allMatch[i][2],
                         'MATCH-ID':ID[i],
                         'SLOT':'1',
                         'DATE':DateSchedule[i/2],  
                         'PLACE':Venue[Random]
                        }
      finalSchedule.push(MatchSchedule)
    }else{
      let Random= Math.floor(Math.random() * Venue.length);
      let MatchSchedule={'DAY':days++,
                        'MATCH-NO':match++,
                        'TEAM-1':allMatch[i][0],
                        'TEAM-2':allMatch[i][2],
                        'MATCH-ID':ID[i],
                        'SLOT':'2',
                        'PLACE':Venue[Random] 
                      }
      finalSchedule.push(MatchSchedule)
    }
  } console.log(finalSchedule);
}finalSchedule(Tournment,Venue)