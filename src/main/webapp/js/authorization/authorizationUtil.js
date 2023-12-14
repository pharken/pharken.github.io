






// THIS IS ALL CODE FROM THE BOOTCAMP








const identityFn = function(callback) {

    callback({
        iss: 'https://www.placeholder.com',
        acr: 'loa1',
        sub: 'sub'
    });
};

lpTag.identities = [];
lpTag.identities.push(identityFn);


/*
This is from the SE boot camp.
Should add this to the authentication code --- not here
*/
const xxxxxxx = function () {

    // Header
    window.onload = function () {
        function random32bit() {
            let u = new Uint32Array(1);
            window.crypto.getRandomValues(u);
            let str = u[0].toString(16).toUpperCase();
            return '00000000'.slice(str.length) + str;
        }

        var oHeader = { alg: 'RS256', typ: 'JWT' };

        // Payload
        var oPayload = {};
        var tNow = KJUR.jws.IntDate.get('now');
        var tEnd = KJUR.jws.IntDate.get('now + 1year');
        oPayload.iss = "http://foo.com";
        //oPayload.sub = "TestPage" + random32bit();
        oPayload.sub = "Nafeez";
        oPayload.nbf = tNow;
        oPayload.iat = tNow;
        oPayload.exp = tEnd;
        oPayload.jti = "id123456";
        oPayload.aud = "http://foo.com/employee";

        oPayload.type = "phVip";

        // Sign JWT, password=616161
        var sHeader = JSON.stringify(oHeader);
        var sPayload = JSON.stringify(oPayload);
        var prvKey = KEYUTIL.getKey("-----BEGIN RSA PRIVATE KEY-----MIICWwIBAAKBgQDdlatRjRjogo3WojgGHFHYLugdUWAY9iR3fy4arWNA1KoS8kVw33cJibXr8bvwUAUparCwlvdbH6dvEOfou0/gCFQsHUfQrSDv+MuSUMAe8jzKE4qW+jK+xQU9a03GUnKHkkle+Q0pX/g6jXZ7r1/xAK5Do2kQ+X5xK9cipRgEKwIDAQABAoGAD+onAtVye4ic7VR7V50DF9bOnwRwNXrARcDhq9LWNRrRGElESYYTQ6EbatXS3MCyjjX2eMhu/aF5YhXBwkppwxg+EOmXeh+MzL7Zh284OuPbkglAaGhV9bb6/5CpuGb1esyPbYW+Ty2PC0GSZfIXkXs76jXAu9TOBvD0ybc2YlkCQQDywg2R/7t3Q2OE2+yo382CLJdrlSLVROWKwb4tb2PjhY4XAwV8d1vy0RenxTB+K5Mu57uVSTHtrMK0GAtFr833AkEA6avx20OHo61Yela/4k5kQDtjEf1N0LfI+BcWZtxsS3jDM3i1Hp0KSu5rsCPb8acJo5RO26gGVrfAsDcIXKC+bQJAZZ2XIpsitLyPpuiMOvBbzPavd4gY6Z8KWrfYzJoI/Q9FuBo6rKwl4BFoToD7WIUS+hpkagwWiz+6zLoX1dbOZwJACmH5fSSjAkLRi54PKJ8TFUeOP15h9sQzydI8zJU+upvDEKZsZc/UhT/SySDOxQ4G/523Y0sz/OZtSWcol/UMgQJALesy++GdvoIDLfJX5GBQpuFgFenRiRDabxrE9MNUZ2aPFaFp+DyAe+b4nDwuJaW2LURbr8AEZga7oQj0uYxcYw==-----END RSA PRIVATE KEY-----  ");
        var sJWT = KJUR.jws.JWS.sign("RS256", sHeader, sPayload, prvKey);
        console.log(sJWT);

        /*
                var s = document.getElementById('jwt');
                s.innerHTML = sJWT;
                var site = document.getElementById('site');
                site.innerHTML = siteNumber;
        */

        window.LPJsMethodName = function (callback) {
            console.log("TEST");
            callback(sJWT);
        };
    }

}


