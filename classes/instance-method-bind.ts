class Person {
    constructor( public name: string ) {

        // bind `getName` method to `this`.
        this.getName = this.getName.bind( this );
    }

    getName(): string {
        return this.name;
    }
}

// create `ross` instance of type `Person`
const ross: Person = new Person( 'Ross Geller' );

console.log( 'ross =>', ross );
console.log( 'ross.getName() =>', ross.getName() );

// save `ross.getName` in `getNameFn`
let getNameFn = ross.getName;
console.log( 'getNameFn() =>', getNameFn() );