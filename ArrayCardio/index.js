console.log('Welcome to JS');
const invertors = [
    {
        first: 'Albert',
        second: 'Enstein',
        year: 1879,
        passes: 1955
    },
    {
        first: 'Albert',
        second: 'Enstein',
        year: 1879,
        passes: 1955
    },
    {
        first: 'Issac',
        second: 'Newton',
        year: 1645,
        passes: 1727
    },
    {
        first: 'Galileo',
        second: 'Gaalilei',
        year: 1574,
        passes: 1755
    },
    {
        first: 'Max',
        second: 'Plank',
        year: 1779,
        passes: 1955
    }
] ; 

const years = invertors.filter(inventor=> inventor.year>=1600 && inventor.year<=2000)
const ordered = invertors.sort((a,b)=> a.year>b.year ? 1 : -1 )
    

console.table(years) ; 
console.table(ordered)