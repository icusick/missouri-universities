export const UniversityAPI = {

  data: [
    {id: 1, rank: 1, name: " Washington University in St.Louis", location: "St.Louis"},
    {id: 2, rank: 2, name: " Universty of Missouri", location: "Columbia"},
    {id: 3, rank: 3, name: " University of Missouri-Kansas City", location: "Kansas City"},
    {id: 4, rank: 4, name: " Saint Louis University", location: "St.Louis"},
    {id: 5, rank: 5, name: " University of Missouri-St.Louis", location: "St.Louis"},
    {id: 6, rank: 6, name: " Missouri State University", location: "Springfield"},
    {id: 7, rank: 7, name: " Missouri University of Science and Technology", location: "Rolla"},
    {id: 8, rank: 8, name: " Webster University", location: "St.Louis"},
    {id: 9, rank: 9, name: " Truman State University", location: "Kirksville"},
    {id: 10, rank:10, name: " Southeast Missouri State University", location: "Cape Girardeau"}
  ],

  all: function() { return this.data},
  get: function(id) {
    const isUniversity = u => u.id === id
    return this.data.find(isUniversity)
  }
};
