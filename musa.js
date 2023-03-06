function Musa(name, age, gender, location) {
    return {
      name: name,
      age: age,
      gender: gender,
      location: location,
    };
  }

  const createPerson = Musa("Musa Dawodu", "19", "Male", "Lekki, Lagos");
  //console.log(createPerson);
  
function course(eng, govt, lit, crk) {
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    };
  }

  const createJambScores = course("70", "85", "82", "94");
  //console.log(createJambScores);
  
  console.log(createPerson);
  console.log(createJambScores);
  