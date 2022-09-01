let Participants:any[] = ['TEAM1', 'TEAM2', 'TEAM3', 'TEAM4']
let Venue:any[] = ["MUMBAI", "CHENNAI", "DELHI", "PUNE", "KOLKATA", "BANGALORE", "HYDERABAD"];
// .................................participantsPairing.......................
function participantsPairing(){
  const Dummy = -1;
  let numberOfParticipants = Participants.length
  const scheduledParticipants:any[]= [];
  if (numberOfParticipants % 2 === 1) {
    Participants.push(Dummy);
    numberOfParticipants += 1;
  }
  for (let j = 0; j < numberOfParticipants - 1; j++) {
    scheduledParticipants[j] = [];
    for (let x = 0; x < numberOfParticipants / 2; x++) {
     const reversesParticipants = numberOfParticipants - 1 - x;
      if (Participants[x] !== Dummy && Participants[reversesParticipants] !== Dummy) {  
        scheduledParticipants[j].push([Participants[x]+' vs '+ Participants[reversesParticipants]]);
      }
    }
    Participants.splice(1, 0, Participants.pop());
  }
 return scheduledParticipants
}
// .................................find all match.......................
function findAllMatches() {
    const newarray:any=[]
    const matches=participantsPairing()
    for (let i = 0; i < matches.length; i++) {
        for (let j = 0; j < matches[i].length; j++) {
            newarray.push(matches[i][j])
        }
    }  
    return newarray;
}
// .................................split slots.......................
function splitSlots() {
    const slotsSplits:any=[]
    const slot_1:any=[];
    const slot_2:any=[];
    const match=findAllMatches();
    for (let i = 0; i < match.length; i++) {
        if(i%2==0){
            slot_1.push(match[i])
        }else{
            slot_2.push(match[i])
        }
    }
    slotsSplits.push(slot_1);
    slotsSplits.push(slot_2);
    return slotsSplits
}
// .................................find weekends.......................
let saturday:any = new Date('2022-08-27');
let sunday:any = new Date('2022-08-28');
function findweekEnds(saturday:any, sunday:any) {
  const allMatches=findAllMatches()
  const weekEnds = new Array();
  const dt = new Date(saturday);
  const dt1 = new Date(sunday);
  for (let i = 0; i < allMatches.length / 2; i++) {
    weekEnds.push((new Date(dt)).toString().substring(0, 15));
    weekEnds.push((new Date(dt1).toString().substring(0, 15)))
    dt.setDate(dt.getDate() + 7);
    dt1.setDate(dt1.getDate() + 7);
  }
  return weekEnds
}let array=findweekEnds(saturday, sunday)
// .................................final schedule.......................
function finalSchedule (slotsSplits:any,Venue:any){ 
  const slot_1=slotsSplits[0]
  const slot_2=slotsSplits[1]
  let match = 1
  let day = 1
  if(slot_1.length==slot_2.length){
    for (let i=0;i<slot_1.length;i++) {
      console.log('DAY:', day++, 'DATE>>', array[i]);
      console.log('______________________________________');
      console.log('SLOT-1', '    MATCH-NO>>', match++);
      console.log(slot_1[i]);
      var Random = Math.floor(Math.random() * Venue.length);
      console.log('>>>>>>>>>>>>>>>>>>>VENUE-:',Venue[Random]);
      console.log('SLOT-2', '    MATCH-NO>>', match++);
      console.log(slot_2[i]);
      var Random = Math.floor(Math.random() * Venue.length);
      console.log('>>>>>>>>>>>>>>>>>>>VENUE-:',Venue[Random]);
      console.log('______________________________________');
    }
    console.log('Total Number of Matches', match - 1);
  }else{
    slot_2.push('NO-MATCH');
    for (let i=0;i<slot_1.length;i++) {
      console.log('DAY:', day++, 'DATE>>', array[i]);
      console.log('______________________________________');
      console.log('SLOT-1', '    MATCH-NO>>', match++);
      console.log(slot_1[i]);
      Random = Math.floor(Math.random() * Venue.length);
      console.log('>>>>>>>>>>>>>>>>>>>VENUE-:',Venue[Random]);
      console.log('SLOT-2', '    MATCH-NO>>', match++);
      console.log(slot_2[i]);
      Random = Math.floor(Math.random() * Venue.length);
      console.log('>>>>>>>>>>>>>>>>>>>VENUE-:',Venue[Random]);
      console.log('______________________________________');
    }
    console.log('Total Number of Matches', match - 2);
  }
}finalSchedule(splitSlots(),Venue)