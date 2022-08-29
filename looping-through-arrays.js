const pets = ['cat', 'dog', 'rat']
for (let i=0; i < 3; i++) {
    pets[i] = pets[i] + 's'
}
console.log(pets)

/* It is obviously better to use the .length feature for arrays as 
you could have a ridiculiusly long array in which you don't actually know
the specified number of. As for this case I just used the number
but for good practice I need to remember to use .length to set
the boundary for my functions with arrays.*/
