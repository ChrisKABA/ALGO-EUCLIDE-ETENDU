    let inputElement1 = document.getElementById("nombre1");
    let inputElement2 = document.getElementById("nombre2");
    let pgcd = document.getElementById("Resultat__r");
    let bezout_s = document.getElementById("Resultat__s");
    let bezout_t = document.getElementById("Resultat__t");


    let algoEuclide = () =>{
        let r1 = inputElement1.value;
        let r2 = inputElement2.value;
        if (r1 && r2){
            console.log(r2);
            r1 = validator(r1) ? parseInt(r1) : 0;
            r2 = validator(r2) ? parseInt(r2) : 0;
            while (r2 !== 0) {
            q = Math.floor(r1 / r2);
            r =  r1 - q * r2;
            r1 = r2;
            r2 = r;
            }
        }
        pgcd.innerHTML = ""
        pgcd.innerHTML = r1
    }

    let algo__euclide__etendu = () =>{
        let r1 = inputElement1.value;
        let r2 = inputElement2.value;
        let s1 = t2 = 1; 
        let s2 = t1 = 0;
        if (r1 && r2){
            r1 = validator(r1) ? parseInt(r1) : 0;
            r2 = validator(r2) ? parseInt(r2) : 0;
            while (r2 !== 0) {
            q = Math.floor(r1 / r2);

            r =  r1 - q * r2;
            r1 = r2;
            r2 = r;

            s = s1 - q * s2;
            s1 = s2;
            s2 = s;

            t = t1 - q * t2;
            t1 = t2; 
            t2 = t;

            }
        }
        pgcd.innerHTML = ""
        bezout_s.innerHTML = ""
        bezout_t.innerHTML = ""
        pgcd.innerHTML = r1
        bezout_s.innerHTML = s1
        bezout_t.innerHTML = t1
    }

    
    let validator = (data) =>{
        return !isNaN(data);
    }


    let deleted = () =>{
        inputElement1.value = ""
        inputElement2.value = ""
        resultat.innerHTML = ""
    }





