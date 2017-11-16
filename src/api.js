export const UniversityAPI = {

  data: [
    {rank: 1, name: " Washington University in St.Louis", location: "St.Louis"},
    {rank: 2, name: " Universty of Missouri", location: "Columbia"},
    {rank: 3, name: " University of Missouri-Kansas City", location: "Kansas City"},
    {rank: 4, name: " Saint Louis University", location: "St.Louis"},
    {rank: 5, name: " University of Missouri-St.Louis", location: "St.Louis"},
    {rank: 6, name: " Missouri State University", location: "Springfield"},
    {rank: 7, name: " Missouri University of Science and Technology", location: "Rolla"},
    {rank: 8, name: " Webster University", location: "St.Louis"},
    {rank: 9, name: " Truman State University", location: "Kirksville"},
    {rank:10, name: " Southeast Missouri State University", location: "Cape Girardeau"}
  ],

  all: function() { return this.data},
  get: function(index) {
    const isUniversity = u => u.index === index
    return this.data.find(isUniversity)
  }
};
