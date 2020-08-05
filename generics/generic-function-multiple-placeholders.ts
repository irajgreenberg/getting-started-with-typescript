// declare `getTuple` of the type of a generic function
var getTuple: <T, U>( a: T, b: U ) => [ T, U ] = ( a, b ) => {
    return [ a, b ];
}

// var stringArray: [string, string]
var stringArray = getTuple<string, string>( 'hello', 'world' );

// var numberArray: [number, number]
var numberArray = getTuple( 1.25, 2.56 );

// var mixedArray: [number, string]
var mixedArray = getTuple( 1.25, 'world' );