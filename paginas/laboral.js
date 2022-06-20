
/* 
la empresa en el contrato del empleado tiene detallado que si quieren renunciar 
deben hacerlo el dia 15 en los meses que tiene 30 dias y los dias 16 en los meses que tienen 31.
Calculo de lo que le corresponde cobrar el mes que renuncia a la empresa.
*/


function calcular_sueldo_mes_renuncia(sueldomensual){
    if(dias_del_mes==30){
        return sueldo/ 30 * dias_trabajados
    }

    else if(dias_del_mes==31){
        return sueldo / 31 * 16 * dias_trabajados
}
    else{
        return loecharon
    } 
}


let nombre_usuario= prompt("ingrese su nombre");
let dni_usuario= prompt ("ingrese su DNI");
let sueldo = parseInt(prompt("ingrese su sueldo mensual"));
let dias_del_mes = parseInt(prompt("ingrese cuantos dias tiene el mes en el que renunció"));
let dias_trabajados =parseInt(prompt("ingrese si trabajó 15 o 16 dias respectivamente"))


console.log("El sueldo que le corresponde es:", sueldo/dias_del_mes*dias_trabajados);