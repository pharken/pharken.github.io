/*
    Verizon Tracfone
*/

let main = function (){
    let $brands = $('.brand');
    for ( let $brand of $brands) {
        console.log( 'brand: ' + $brand.attributes[1].nodeValue );
    }
    $brands.click( function(event) {
        setLpTagSections(event.target.attributes[1].value);
    });
};


let setLpTagSections = function(brand){
    console.log(brand);
    lpTag.section = [ brand ];
};


$(function() {
    console.log( "Tracfone begin" );
    lpTag.section = [ "tracfone" ];   // initialize lpTage sections
    main();
});
