interface objectinterface{
    versionName:string,
    releaseDate:string,
    bugId:any[],
    features:any[],
    author: any[],
    typeOf:string
  }
  interface bugs{
      id: string,
      details:string  
  }
  
  const version:objectinterface[]=[{
      versionName: "7.0. 01",
      releaseDate: "23-03-2021",
      bugId: ["b1E35P"],
      features: ["1st update"],
      author: ["RAMAKRISHNAN"],
      typeOf:"PATCH"
  },{
      versionName: "7.0. 03",
      releaseDate: "21-09-2021",
      bugId: ["b1E3T6"],
      features: ["2 nd update"],
      author: ["MANIKANNU"],
      typeOf:"ENHANCEMENT"
  },{
      versionName: "7.0. 04",
      releaseDate: "10-10-2022",
      bugId: ["b1E357P"],
      features: ["3 rd update"],
      author: ["RAMAKRISHNAN"],
      typeOf:"PATCH"
  },{
      versionName: "7.0. 055",
      releaseDate: "6-11-2022",
      bugId: ["b5E357P"],
      features: ["4 th update"],
      author: ["VADIVELU"],
      typeOf:"MAJOR"
  },{
      versionName: "7.0. 099",
      releaseDate: "18-12-2021",
      bugId: ["b1E857P"],
      features: ["5 th update"],
      author: ["KALLAN"],
      typeOf: "ENHANCEMENT"}];
  
  const bugIdList:bugs[]= [{
      id: "b1E35P",
      details: "fixed the animation"
  },{
      id: "b1E3T6",
      details: "fixed the bugs for android"
  },{
      id: "b1E357P",
      details: "fixed the bugs for sound"
  },{
      id: "b5E357P",
      details: "fixed the bugs for screen"
  },{
      id: "b1E857P",
      details: "fixed the bugs for update theme"}];
  //--------------------------------findbugs------------------------------------------------------------------------
  function findBugs() {
      let enterId = "b1E35P";
      console.log("bugId:",enterId);
      for (let i = 0; i < bugIdList.length; i++) {
          if (bugIdList[i].id == enterId) {
              console.log("details:-", bugIdList[i].details);
          }
      }
  }findBugs()
  //--------------------------------------findYearReleaseVersion-----------------------------------------------------
  function findYearReleaseVersion() {
      let findYearVersion = "2021";
      console.log("YEAR-:",findYearVersion,"ReleaseVersion");
      for ( let i = 0; i < version.length; i++) {
          if (findYearVersion == (version[i].releaseDate).slice(-4)) {
              console.log("version:-",version[i].versionName);
          }
      }
  }findYearReleaseVersion()
  //------------------------------------------------findFeatures---------------------------------------------------------
  function findFeatures() {
      let findVersion = "7.0. 01";
      console.log("VERSION-NAME :",findVersion);
      for (let i = 0; i < version.length; i++) {
          if (version[i].versionName ==findVersion) {
              console.log("FEATURES:-",version[i].features)
          }
      }
  }findFeatures()
  // -----------------------------------------findAuthorBasedOnTheWork---------------------------------------------------
  function findAuthorBasedOnTheWork(){
   const authorNames:any=[]
   version.forEach((n:any) => {
      for (let i of n.author)
          authorNames.push(i)
      });
      let mostFrequent = 1;
      let findAuther = "";
      let m = 1;
      for (let i = 0; i < authorNames.length; i++) {
          for (let j = 1; j < authorNames.length; j++) {
              if (authorNames[i] == authorNames[j]){
                  m++;
                  if (mostFrequent < m) {
                      mostFrequent = m;
                      findAuther = authorNames[i]; 
                  }
              }  
          }
          m = 0;
      }
   console.log(`\nThe author'${findAuther}'has worked on more nnumber  of findYearReleaseVersions, the count is "${mostFrequent}"`);
  }findAuthorBasedOnTheWork()
  
  // ------------------------------------------versionRealeseBasedOnTypes---------------------------------------------------
  function versionRealeseBasedOnTypes() {
      var checkType="PATCH";
      console.log ("TYPE :", checkType)
      for (let i = 0; i < version.length; i++) {
          if (version[i].typeOf == checkType) {
              console.log(checkType,"-version:-",version[i].versionName);
          }
      }
  }versionRealeseBasedOnTypes()
  
  
  