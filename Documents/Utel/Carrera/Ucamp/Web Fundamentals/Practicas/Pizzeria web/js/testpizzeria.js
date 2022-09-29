let TotalP              = document.getElementById("Total");
let PB                  = document.getElementById("PBasica");
let P2I                 = document.getElementById("P2Ingredientes");
let P3I                 = document.getElementById("P3Ingredientes");
let RG                  = document.getElementById("RefGrande");
let RC                  = document.getElementById("RefChico");
let promoActivada       = document.getElementById("promocion");
let Total, ValorPB, ValorP2I, ValorP3I, ValorRG, ValorRC, vPB, vP2I, vP3I, vRG, vRC;

function Calcular(){
    Total = 0;
    let promoActiva=false;
    vP3I = P3I.value;
    vP2I = P2I.value;
    vPB = PB.value;
    vRG = RG.value;
    vRC = RC.value;

    if(vP3I>0){
        if(vRG>0){
            Total       = (12+3)*0.8;
            promoActiva = true;
            vP3I        = vP3I-1;
            vRG         = vRG-1;
        }
    }
    if(!promoActiva){
        if(vRC>0){
            if(vP2I>0){
                Total       = (10+2)*0.85;
                promoActiva = true;
                vP2I         = vP2I-1;
                vRC          = vRC-1;
            }
            if(!promoActiva){
                if(vPB>0){
                    Total       = (5+2)*0.9;
                    vPB         = vPB-1;
                    vRC         = vRC-1;
                    promoActiva = true;
                }
            }
        }
    }
    ValorPB    = vPB * 5;
    ValorP2I   = vP2I * 10;
    ValorP3I   = vP3I * 12;
    ValorRG    = vRG *3;
    ValorRC    = vRC * 2;
    Total      = Total + ValorPB + ValorP2I + ValorP3I + ValorRG+ ValorRC;
    TotalP.innerText = Total;
}